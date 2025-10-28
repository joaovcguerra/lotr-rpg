// app/components/Ficha/Ficha.js
'use client';

import { useState, useMemo } from 'react';
import { rollCustomDice } from '../../utils/diceParser.js';
import { races, valar, classes, oficios } from '../../utils/rpgData.js';
import ColunaEsquerda from './ColunaEsquerda';
import ColunaMeio from './ColunaMeio';
import ColunaDireita from './ColunaDireita';
import DescricaoModal from './DescricaoModal';
import OficioInfoModal from './OficioInfoModal';

// Importando todos os módulos CSS
import mainStyles from './Ficha.module.css';
import leftStyles from './ColunaEsquerda.module.css';
import middleStyles from './ColunaMeio.module.css';
import rightStyles from './ColunaDireita.module.css';
import descModalStyles from './DescricaoModal.module.css';
import oficioModalStyles from './OficioInfoModal.module.css';

// Combinando todos os estilos em um único objeto
const styles = { ...mainStyles, ...leftStyles, ...middleStyles, ...rightStyles, ...descModalStyles, ...oficioModalStyles };

// ===== FUNÇÃO getModifier CORRIGIDA =====
const getModifier = (value) => {
    const num = parseInt(value, 10);
    if (isNaN(num)) return '...';
    if (num <= 1) return '-5'; if (num <= 3) return '-4'; if (num <= 5) return '-3';
    if (num <= 7) return '-2'; if (num <= 9) return '-1';
    if (num <= 11) return '+0'; // <-- CORRIGIDO (era o número 0)
    if (num <= 13) return '+1'; if (num <= 15) return '+2'; if (num <= 17) return '+3';
    if (num <= 19) return '+4'; if (num <= 21) return '+5'; if (num <= 23) return '+6';
    if (num <= 25) return '+7'; if (num <= 27) return '+8'; if (num <= 29) return '+9';
    return '+10';
};
// ===== FIM DA CORREÇÃO =====

export default function Ficha() {
    const [atributos, setAtributos] = useState({
        forca: '10', destreza: '10', constituicao: '10',
        inteligencia: '10', sabedoria: '10', carisma: '10',
    });
    const [hp, setHp] = useState({ current: 20, max: 20 });
    const [mana, setMana] = useState({ current: 15, max: 15 });
    // ===== NOVOS STATES AQUI =====
    const [vontade, setVontade] = useState({ current: 10, max: 10 });
    const [vontadeGastoValue, setVontadeGastoValue] = useState('');
    const [vontadeRegenValue, setVontadeRegenValue] = useState('');

    const [danoValue, setDanoValue] = useState('');
    const [curaValue, setCuraValue] = useState('');
    const [custoValue, setCustoValue] = useState('');
    const [regenValue, setRegenValue] = useState('');
    const [notation, setNotation] = useState('1d20');
    const [rollResult, setRollResult] = useState(null);
    const [rollHistory, setRollHistory] = useState([]);
    const [activeTab, setActiveTab] = useState('raca');
    const [inventory, setInventory] = useState([
        { id: 1, nome: 'Item Exemplo', danoEfeito: 'Nenhum', quantidade: 1, descricao: 'Um item para demonstrar a estrutura.', espaco: 1, peso: 0.5 },
    ]);
    const [editingItemId, setEditingItemId] = useState(null);
    const [selectedRace, setSelectedRace] = useState('');
    const [selectedValar, setSelectedValar] = useState('');
    const [selectedClass, setSelectedClass] = useState('');
    const [selectedSubclass, setSelectedSubclass] = useState('');
    const [selectedOficio, setSelectedOficio] = useState('');
    const [isOficioModalOpen, setIsOficioModalOpen] = useState(false);
    const [level, setLevel] = useState(1);

    // Lógicas de cálculo para o inventário
    const conBonus = useMemo(() => Number(getModifier(atributos.constituicao)) || 0, [atributos.constituicao]);
    const maxWeight = useMemo(() => 1 + (conBonus * 2), [conBonus]);
    const maxSpace = useMemo(() => {
        const baseSpace = 1;
        const bonusSpace = inventory.reduce((total, item) => {
            const spaceValue = String(item.espaco);
            if (spaceValue.startsWith('+')) {
                return total + (Number(spaceValue.substring(1)) || 0);
            }
            return total;
        }, 0);
        return baseSpace + bonusSpace;
    }, [inventory]);

    const currentSpace = useMemo(() => {
        return inventory.reduce((total, item) => {
            const spaceValue = String(item.espaco);
            if (!spaceValue.startsWith('+')) {
                return total + ((Number(spaceValue) || 0) * (Number(item.quantidade) || 0));
            }
            return total;
        }, 0);
    }, [inventory]);

    const currentWeight = useMemo(() => {
        let weightFromItems = 0;
        let zeroWeightItemCount = 0;
        inventory.forEach(item => {
            const weight = Number(item.peso) || 0;
            const quantity = Number(item.quantidade) || 0;
            if (weight > 0) {
                weightFromItems += weight * quantity;
            } else {
                zeroWeightItemCount += quantity;
            }
        });
        const weightFromZeroItems = Math.floor(zeroWeightItemCount / 3);
        return weightFromItems + weightFromZeroItems;
    }, [inventory]);

    const penalty = useMemo(() => {
        const overweight = Math.floor(currentWeight - maxWeight);
        if (overweight > 0) {
            return `-${overweight} DES | -${overweight * 2} Iniciativa`;
        }
        return "Nenhuma";
    }, [currentWeight, maxWeight]);


    const handleAtributoChange = (e) => {
        const { name, value } = e.target;
        setAtributos(prevState => ({ ...prevState, [name]: value }));
    };

    const forcaDeVontade = useMemo(() => {
        const con = parseInt(atributos.constituicao, 10) || 0;
        const car = parseInt(atributos.carisma, 10) || 0;
        return Math.floor((con + car) / 2);
    }, [atributos.constituicao, atributos.carisma]);

    // ===== SEÇÃO DE LÓGICA DE DADOS =====

    const raceData = selectedRace ? races.find(r => r.nome === selectedRace) : null;
    const classData = selectedClass ? classes.find(c => c.nome === selectedClass) : null;

    const deslocamentoString = useMemo(() => {
        if (!raceData) return '...';
        return raceData.deslocamento || '...';
    }, [raceData]);

    const hpDadoString = useMemo(() => {
        if (!raceData || !classData) return '...';

        const conValue = parseInt(atributos.constituicao, 10) || 0;
        const conModStr = getModifier(atributos.constituicao);
        const dieSides = classData.hpDie?.sides || '?';

        // Helper para formatar: +10, +1, -1. (Trata o 0)
        const formatAttr = (val) => val >= 0 ? `+${val}` : `${val}`;

        switch (raceData.nome) {
            case 'Ents': // 4d ++ ½ do atributo de Constituição
                return `4d${dieSides}++${Math.floor(conValue / 2)}`;
            case 'Troca-peles': // 4d + atributo de Constituição e rola com vantagem
                return `4d${dieSides}${formatAttr(conValue)} (Vantagem)`;
            case 'Elfos': // 3d ++ bônus de Constituição
                return `3d${dieSides}++${conModStr}`; // getModifier já inclui "+"
            case 'Anões': // 3d + atributo de Constituição
                return `3d${dieSides}${formatAttr(conValue)}`;
            case 'Humanos': // 3d + bônus de Constituição
                return `3d${dieSides}${conModStr}`; // <-- Bug corrigido pela fonte (getModifier)
            case 'Hobbits': // 2d + bônus de Constituição
                return `2d${dieSides}${conModStr}`; // <-- Bug corrigido pela fonte (getModifier)
            default:
                return '...';
        }
    }, [raceData, classData, atributos.constituicao]);

    const manaDadoString = useMemo(() => {
        if (!raceData || !classData) return '...';

        const sabModStr = getModifier(atributos.sabedoria);
        const numDice = classData.manaDice?.num || '?';
        const formatMod = (mod) => (mod === '+0') ? '' : mod; // Helper for "+sabedoria"

        switch (raceData.nome) {
            case 'Elfos': // d10 ++ Sabedoria (bônus)
                return `${numDice}d10++${sabModStr}`;
            case 'Humanos': // d8 ++ Sabedoria (bônus)
                return `${numDice}d8++${sabModStr}`;
            case 'Troca-peles': // d8 + Sabedoria (bônus)
                return `${numDice}d8${formatMod(sabModStr)}`;
            case 'Hobbits': // d8 puro
                return `${numDice}d8`;
            case 'Ents': // d6 + Sabedoria (bônus)
                return `${numDice}d6${formatMod(sabModStr)}`;
            case 'Anões': // d6 puro
                return `${numDice}d6`;
            default:
                return '...';
        }
    }, [raceData, classData, atributos.sabedoria]);

    const socoDadoString = useMemo(() => {
        if (!raceData || !classData) return '...';

        const forModStr = getModifier(atributos.forca);
        const numDice = classData.socoDice?.num || '?';
        const formatMod = (mod) => (mod === '+0') ? '' : mod;

        switch (raceData.nome) {
            case 'Ents': // d12++força (bônus)
                return `${numDice}d12++${forModStr}`;
            case 'Humanos':
            case 'Troca-peles':
            case 'Anões': // d8+força (bônus)
                return `${numDice}d8${formatMod(forModStr)}`;
            case 'Elfos': // d6+força (bônus)
                return `${numDice}d6${formatMod(forModStr)}`;
            case 'Hobbits': // d4
                return `${numDice}d4`;
            default:
                return '...';
        }
    }, [raceData, classData, atributos.forca]);

    // ===== LÓGICA DO DADO DE VONTADE CORRIGIDA =====
    const vontadeDadoString = useMemo(() => {
        const sabModStr = getModifier(atributos.sabedoria);
        const sabModNum = parseInt(sabModStr); // Converte "+3" para 3, "+0" para 0, "-1" para -1

        let numDice;
        if (!isNaN(sabModNum) && sabModNum > 0) {
            numDice = 1 + sabModNum; // Ex: +1 de bônus = 2 dados
        } else {
            numDice = 1; // Mínimo de 1d20
        }

        const vonModStr = getModifier(forcaDeVontade);
        // Não mostra o bônus se for "+0"
        const bonusPart = (vonModStr === '+0') ? '' : vonModStr;

        return `${numDice}d20${bonusPart}`;

    }, [atributos.sabedoria, forcaDeVontade]);
    // ===== FIM DA SEÇÃO DE LÓGICA DE DADOS =====


    const handleRoll = () => { if (!notation) return; const result = rollCustomDice(notation); setRollResult(result); setRollHistory(prev => [result, ...prev].slice(0, 10)); };
    const handleQuickRoll = (die) => { const result = rollCustomDice(die); setRollResult(result); setNotation(die); setRollHistory(prev => [result, ...prev].slice(0, 10)); };
    const handleKeyDown = (event) => { if (event.key === 'Enter') handleRoll(); };
    const clearHistory = () => setRollHistory([]);

    const handleMaxStatChange = (stat, value) => {
        const newMax = parseInt(value) || 0;
        if (stat === 'hp') {
            setHp(prev => ({ max: newMax, current: Math.min(prev.current, newMax) }));
        } else if (stat === 'mana') {
            setMana(prev => ({ max: newMax, current: Math.min(prev.current, newMax) }));
        } else if (stat === 'vontade') { // ===== ADICIONADO =====
            setVontade(prev => ({ max: newMax, current: Math.min(prev.current, newMax) }));
        }
    };

    const applyHpChange = (e, amount, isHealing) => {
        if (e.key === 'Enter') {
            const value = parseInt(amount);
            if (!isNaN(value) && value > 0) {
                const newCurrentHp = isHealing ? hp.current + value : hp.current - value;
                const clampedHp = Math.max(0, Math.min(newCurrentHp, hp.max));
                setHp({ ...hp, current: clampedHp });
            }
            isHealing ? setCuraValue('') : setDanoValue('');
        }
    };

    const applyManaChange = (e, amount, isRegen) => {
        if (e.key === 'Enter') {
            const value = parseInt(amount);
            if (!isNaN(value) && value > 0) {
                const newCurrentMana = isRegen ? mana.current + value : mana.current - value;
                const clampedMana = Math.max(0, Math.min(newCurrentMana, mana.max));
                setMana({ ...mana, current: clampedMana });
            }
            isRegen ? setRegenValue('') : setCustoValue('');
        }
    };

    // ===== NOVA FUNÇÃO AQUI =====
    const applyVontadeChange = (e, amount, isRegen) => {
        if (e.key === 'Enter') {
            const value = parseInt(amount);
            if (!isNaN(value) && value > 0) {
                const newCurrentVontade = isRegen ? vontade.current + value : vontade.current - value;
                const clampedVontade = Math.max(0, Math.min(newCurrentVontade, vontade.max));
                setVontade({ ...vontade, current: clampedVontade });
            }
            isRegen ? setVontadeRegenValue('') : setVontadeGastoValue('');
        }
    };

    const addItemToInventory = () => {
        const newItem = {
            id: Date.now(), nome: '', danoEfeito: '', quantidade: 1, descricao: '',
            espaco: 1, peso: 0
        };
        setInventory([...inventory, newItem]);
    };

    const removeItemFromInventory = (id) => setInventory(inventory.filter(item => item.id !== id));
    const handleItemChange = (id, field, value) => setInventory(inventory.map(item => item.id === id ? { ...item, [field]: value } : item));

    const openDescriptionModal = (itemId) => setEditingItemId(itemId);
    const closeDescriptionModal = () => setEditingItemId(null);

    const saveItemDetails = (itemId, updatedDetails) => {
        setInventory(inventory.map(item =>
            item.id === itemId ? { ...item, ...updatedDetails } : item
        ));
    };

    const handleRaceChange = (e) => setSelectedRace(e.target.value);
    const handleValarChange = (e) => setSelectedValar(e.target.value);
    const handleClassChange = (e) => {
        setSelectedClass(e.target.value);
        setSelectedSubclass('');
    };
    const handleSubclassChange = (e) => setSelectedSubclass(e.target.value);
    const handleOficioChange = (e) => setSelectedOficio(e.target.value);
    const openOficioModal = () => { if (selectedOficio) setIsOficioModalOpen(true); };
    const closeOficioModal = () => setIsOficioModalOpen(false);
    const handleLevelChange = (e) => {
        setLevel(e.target.value);
    };

    const itemToEdit = editingItemId ? inventory.find(item => item.id === editingItemId) : null;
    const valarData = selectedValar ? valar.find(v => v.nome === selectedValar) : null;
    const availableSubclasses = classData ? classData.subclasses : [];
    const subclassData = selectedSubclass ? availableSubclasses.find(sc => sc.nome === selectedSubclass) : null;
    const oficioData = selectedOficio ? oficios.find(o => o.nome === selectedOficio) : null;

    return (
        <div className={styles.fichaGridContainer}>
            <ColunaEsquerda
                styles={styles}
                hp={hp} setHp={setHp}
                mana={mana} setMana={setMana}
                vontade={vontade} setVontade={setVontade} // Passa o novo state
                danoValue={danoValue} setDanoValue={setDanoValue}
                curaValue={curaValue} setCuraValue={setCuraValue}
                custoValue={custoValue} setCustoValue={setCustoValue}
                regenValue={regenValue} setRegenValue={setRegenValue}
                vontadeGastoValue={vontadeGastoValue} setVontadeGastoValue={setVontadeGastoValue} // Passa o novo state
                vontadeRegenValue={vontadeRegenValue} setVontadeRegenValue={setVontadeRegenValue} // Passa o novo state
                applyHpChange={applyHpChange}
                applyManaChange={applyManaChange}
                applyVontadeChange={applyVontadeChange} // Passa a nova função
                handleMaxStatChange={handleMaxStatChange}
                races={races}
                selectedRace={selectedRace}
                handleRaceChange={handleRaceChange}
                classes={classes}
                selectedClass={selectedClass}
                handleClassChange={handleClassChange}
                availableSubclasses={availableSubclasses}
                selectedSubclass={selectedSubclass}
                handleSubclassChange={handleSubclassChange}
                oficios={oficios}
                selectedOficio={selectedOficio}
                handleOficioChange={handleOficioChange}
                openOficioModal={openOficioModal}
                level={level}
                handleLevelChange={handleLevelChange}

                // ===== PROPS NOVAS ADICIONADAS AQUI =====
                deslocamentoString={deslocamentoString}
                hpDadoString={hpDadoString}
                manaDadoString={manaDadoString}
                socoDadoString={socoDadoString}
                vontadeDadoString={vontadeDadoString} // <-- NOVA PROP ADICIONADA
            />
            <ColunaMeio
                styles={styles}
                activeTab={activeTab} setActiveTab={setActiveTab}
                inventory={inventory}
                addItemToInventory={addItemToInventory}
                removeItemFromInventory={removeItemFromInventory}
                handleItemChange={handleItemChange}
                openDescriptionModal={openDescriptionModal}
                raceData={raceData}
                valar={valar}
                selectedValar={selectedValar}
                handleValarChange={handleValarChange}
                valarData={valarData}
                subclassData={subclassData}
                maxSpace={maxSpace}
                currentSpace={currentSpace}
                maxWeight={maxWeight}
                currentWeight={currentWeight}
                penalty={penalty}
                level={level}
            />
            <ColunaDireita
                styles={styles}
                atributos={atributos} handleAtributoChange={handleAtributoChange}
                forcaDeVontade={forcaDeVontade} getModifier={getModifier}
                notation={notation} setNotation={setNotation}
                rollResult={rollResult} rollHistory={rollHistory}
                handleRoll={handleRoll} handleQuickRoll={handleQuickRoll}
                handleKeyDown={handleKeyDown} clearHistory={clearHistory}
            />
            {itemToEdit && (
                <DescricaoModal
                    styles={styles}
                    item={itemToEdit}
                    onSave={saveItemDetails}
                    onClose={closeDescriptionModal}
                />
            )}
            {isOficioModalOpen && oficioData && (
                <OficioInfoModal
                    styles={styles}
                    oficio={oficioData}
                    onClose={closeOficioModal}
                />
            )}
        </div>
    );
}