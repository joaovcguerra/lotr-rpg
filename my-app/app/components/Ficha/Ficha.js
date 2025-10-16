// app/components/Ficha/Ficha.js
'use client';

import { useState, useMemo } from 'react';
import { rollCustomDice } from '../../utils/diceParser.js';
import { races, valar } from '../../utils/rpgData.js';
import ColunaEsquerda from './ColunaEsquerda';
import ColunaMeio from './ColunaMeio';
import ColunaDireita from './ColunaDireita';
import DescricaoModal from './DescricaoModal';

// Importando todos os módulos CSS
import mainStyles from './Ficha.module.css';
import leftStyles from './ColunaEsquerda.module.css';
import middleStyles from './ColunaMeio.module.css';
import rightStyles from './ColunaDireita.module.css';
import modalStyles from './DescricaoModal.module.css';

// Combinando todos os estilos em um único objeto
const styles = { ...mainStyles, ...leftStyles, ...middleStyles, ...rightStyles, ...modalStyles };

const getModifier = (value) => {
    const num = parseInt(value, 10);
    if (isNaN(num)) return '...';
    if (num <= 1) return -5; if (num <= 3) return -4; if (num <= 5) return -3;
    if (num <= 7) return -2; if (num <= 9) return -1; if (num <= 11) return 0;
    if (num <= 13) return '+1'; if (num <= 15) return '+2'; if (num <= 17) return '+3';
    if (num <= 19) return '+4'; if (num <= 21) return '+5'; if (num <= 23) return '+6';
    if (num <= 25) return '+7'; if (num <= 27) return '+8'; if (num <= 29) return '+9';
    return '+10';
};

export default function Ficha() {
    const [atributos, setAtributos] = useState({
        forca: '10', destreza: '10', constituicao: '10',
        inteligencia: '10', sabedoria: '10', carisma: '10',
    });
    const [hp, setHp] = useState({ current: 20, max: 20 });
    const [mana, setMana] = useState({ current: 15, max: 15 });
    const [danoValue, setDanoValue] = useState('');
    const [curaValue, setCuraValue] = useState('');
    const [custoValue, setCustoValue] = useState('');
    const [regenValue, setRegenValue] = useState('');
    const [notation, setNotation] = useState('1d20');
    const [rollResult, setRollResult] = useState(null);
    const [rollHistory, setRollHistory] = useState([]);
    const [activeTab, setActiveTab] = useState('raca');
    const [inventory, setInventory] = useState([
        { id: 1, nome: 'Item Exemplo', danoEfeito: 'Nenhum', quantidade: 1, descricao: 'Um item para demonstrar a estrutura.' },
    ]);
    const [editingItemId, setEditingItemId] = useState(null);
    const [selectedRace, setSelectedRace] = useState('');
    const [selectedValar, setSelectedValar] = useState('');

    const handleAtributoChange = (e) => {
        const { name, value } = e.target;
        setAtributos(prevState => ({ ...prevState, [name]: value }));
    };

    const forcaDeVontade = useMemo(() => {
        const con = parseInt(atributos.constituicao, 10) || 0;
        const car = parseInt(atributos.carisma, 10) || 0;
        return Math.floor((con + car) / 2);
    }, [atributos.constituicao, atributos.carisma]);

    const handleRoll = () => { if (!notation) return; const result = rollCustomDice(notation); setRollResult(result); setRollHistory(prev => [result, ...prev].slice(0, 10)); };
    const handleQuickRoll = (die) => { const result = rollCustomDice(die); setRollResult(result); setNotation(die); setRollHistory(prev => [result, ...prev].slice(0, 10)); };
    const handleKeyDown = (event) => { if (event.key === 'Enter') handleRoll(); };
    const clearHistory = () => setRollHistory([]);

    const handleMaxStatChange = (stat, value) => {
        const newMax = parseInt(value) || 0;
        if (stat === 'hp') setHp(prev => ({ max: newMax, current: Math.min(prev.current, newMax) }));
        if (stat === 'mana') setMana(prev => ({ max: newMax, current: Math.min(prev.current, newMax) }));
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

    const addItemToInventory = () => setInventory([...inventory, { id: Date.now(), nome: '', danoEfeito: '', quantidade: 1, descricao: '' }]);
    const removeItemFromInventory = (id) => setInventory(inventory.filter(item => item.id !== id));
    const handleItemChange = (id, field, value) => setInventory(inventory.map(item => item.id === id ? { ...item, [field]: value } : item));

    const openDescriptionModal = (itemId) => setEditingItemId(itemId);
    const closeDescriptionModal = () => setEditingItemId(null);

    const saveItemDescription = (itemId, newDescription) => {
        handleItemChange(itemId, 'descricao', newDescription);
    };

    const handleRaceChange = (e) => {
        setSelectedRace(e.target.value);
    };

    const handleValarChange = (e) => {
        setSelectedValar(e.target.value);
    };

    const itemToEdit = editingItemId ? inventory.find(item => item.id === editingItemId) : null;
    const raceData = selectedRace ? races.find(r => r.nome === selectedRace) : null;
    const valarData = selectedValar ? valar.find(v => v.nome === selectedValar) : null;

    return (
        <div className={styles.fichaGridContainer}>
            <ColunaEsquerda
                styles={styles}
                hp={hp} setHp={setHp}
                mana={mana} setMana={setMana}
                danoValue={danoValue} setDanoValue={setDanoValue}
                curaValue={curaValue} setCuraValue={setCuraValue}
                custoValue={custoValue} setCustoValue={setCustoValue}
                regenValue={regenValue} setRegenValue={setRegenValue}
                applyHpChange={applyHpChange}
                applyManaChange={applyManaChange}
                handleMaxStatChange={handleMaxStatChange}
                races={races}
                selectedRace={selectedRace}
                handleRaceChange={handleRaceChange}
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
                    onSave={saveItemDescription}
                    onClose={closeDescriptionModal}
                />
            )}
        </div>
    );
}