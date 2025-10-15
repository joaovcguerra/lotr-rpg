'use client';

import { useState, useMemo } from 'react';
import styles from './Ficha.module.css';
// A importação da biblioteca de dados foi REMOVIDA.

// ===== NOSSO NOVO ROLADOR DE DADOS =====

/**
 * Interpreta uma notação de dado (ex: "4d6d1+5") e retorna o resultado.
 * @param {string} notation - A string da notação a ser rolada.
 * @returns {{total: number, output: string}}
 */
function rollCustomDice(notation) {
    let output = `Rolagem: ${notation} -> `;
    let processedNotation = notation.replace(/\s+/g, ''); // Remove espaços

    // Regex para encontrar expressões de dados como "4d6", "12d100k3", "d20d1", etc.
    const diceExpressionRegex = /(\d*)d(\d+)([kd])?(\d*)/g;

    processedNotation = processedNotation.replace(diceExpressionRegex, (match, numDice, numSides, modifier, modifierValue) => {
        const count = numDice ? parseInt(numDice) : 1;
        const sides = parseInt(numSides);
        const modVal = modifierValue ? parseInt(modifierValue) : 0;

        if (count === 0 || sides === 0) return '0';

        let rolls = [];
        for (let i = 0; i < count; i++) {
            rolls.push(Math.floor(Math.random() * sides) + 1);
        }

        let resultRolls = [...rolls]; // Cópia para calcular o total
        let outputRolls = [...rolls]; // Cópia para exibir na string

        // Lógica de Keep/Drop
        if (modifier && modVal > 0 && modVal < count) {
            resultRolls.sort((a, b) => a - b); // Ordena do menor para o maior

            if (modifier === 'd') { // d = Drop Lowest
                resultRolls = resultRolls.slice(modVal);
            } else if (modifier === 'k') { // k = Keep Highest
                resultRolls = resultRolls.slice(count - modVal);
            }
        }

        // Formata a saída para mostrar os dados rolados
        const rollsString = `[${outputRolls.join(', ')}]`;
        output += `${match}${rollsString} `;

        // Soma os dados que restaram após o keep/drop
        return resultRolls.reduce((sum, val) => sum + val, 0);
    });

    // Tenta resolver a matemática simples (adição/subtração)
    let total;
    try {
        // Usamos uma forma segura de avaliar a expressão matemática
        total = Function(`'use strict'; return (${processedNotation})`)();
    } catch (e) {
        return { total: 'Erro', output: 'Notação matemática inválida' };
    }

    output += `= ${total}`;

    return { total, output };
}


// Função auxiliar (permanece a mesma)
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

    const [notation, setNotation] = useState('1d20');
    const [rollResult, setRollResult] = useState(null);
    const [rollHistory, setRollHistory] = useState([]);

    const handleAtributoChange = (e) => {
        const { name, value } = e.target;
        setAtributos(prevState => ({ ...prevState, [name]: value }));
    };

    const forcaDeVontade = useMemo(() => {
        const con = parseInt(atributos.constituicao, 10) || 0;
        const car = parseInt(atributos.carisma, 10) || 0;
        return Math.floor((con + car) / 2);
    }, [atributos.constituicao, atributos.carisma]);

    const handleRoll = () => {
        const result = rollCustomDice(notation); // Usa nossa nova função
        setRollResult(result);
        setRollHistory(prevHistory => [result, ...prevHistory].slice(0, 10));
    };

    const handleQuickRoll = (die) => {
        const result = rollCustomDice(die); // Usa nossa nova função
        setRollResult(result);
        setNotation(die);
        setRollHistory(prevHistory => [result, ...prevHistory].slice(0, 10));
    };

    return (
        <div className={styles.fichaGridContainer}>
            {/* O JSX (toda a parte visual) permanece exatamente o mesmo */}
            {/* Coluna da Esquerda */}
            <div className={styles.column}>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Informações Gerais</h2>
                    <div className={styles.infoGeral}>
                        <div className={styles.profilePic}></div>
                        <button className={styles.buttonSmall}>Mudar foto</button>
                        <button className={styles.buttonSmall}>Mudar moldura</button>
                    </div>
                    <div className={styles.field}> <label>Nome:</label> <input type="text" placeholder="Oberon" /> </div>
                    <div className={styles.field}> <label>Raça:</label> <input type="text" /> </div>
                    <div className={styles.field}> <label>Classe:</label> <input type="text" /> </div>
                    <div className={styles.field}> <label>Caminho:</label> <input type="text" /> </div>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Atributos</h2>
                    <div className={styles.atributosGrid}>
                        {Object.keys(atributos).map((attrName) => (
                            <div key={attrName} className={styles.atributoBox}>
                                <label className={styles.atributoLabel}>{attrName.toUpperCase()}</label>
                                <input type="number" name={attrName} value={atributos[attrName]} onChange={handleAtributoChange} className={styles.atributoInput} />
                                <div className={styles.atributoModificador}>{getModifier(atributos[attrName])}</div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.atributoBox} style={{ marginTop: '1.5rem' }}>
                        <label className={styles.atributoLabel}>FORÇA DE VONTADE</label>
                        <input type="number" value={forcaDeVontade} className={styles.atributoInput} disabled />
                        <div className={styles.atributoModificador}>{getModifier(forcaDeVontade)}</div>
                    </div>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Status</h2>
                    <div className={styles.statusDisplay}>
                        <p><strong>HP:</strong> XdX</p> <p><strong>MANA:</strong> XdX</p>
                        <p><strong>Energia de Jornada:</strong> Y</p> <p><strong>Barra de Vontade:</strong> Z</p>
                        <p><strong>Level:</strong> 1</p> <p><strong>Deslocamento:</strong> X</p>
                    </div>
                </div>
            </div>
            {/* Coluna do Meio */}
            <div className={styles.column}>
                <div className={styles.section}> <h2 className={styles.sectionTitle}>Habilidades de Raça</h2> <div className={styles.ability}> <strong>Talento:</strong> Leveza Élfica </div> <div className={styles.ability}> <strong>Mau Hábito:</strong> Desgosto por Anões </div> </div>
                <div className={styles.section}> <h2 className={styles.sectionTitle}>Habilidades de Classe</h2> <div className={styles.ability}> <strong>Técnica:</strong> Tiro Profundo </div> <div className={styles.ability}> <strong>Tradição:</strong> Predador Comum </div> </div>
                <div className={styles.section}> <h2 className={styles.sectionTitle}>Benção dos Valar</h2> <div className={styles.ability}> <strong>Valar:</strong> Manwë </div> <div className={styles.ability}> <strong>Benção:</strong> Águias Gigantes </div> </div>
                <div className={styles.section}> <h2 className={styles.sectionTitle}>Inventário</h2> <p>Peso: 0 / X</p> <div className={styles.item}> <p><strong>Nome:</strong> Item Exemplo</p> <p><strong>Descrição:</strong> Um item para demonstrar a estrutura.</p> <p><strong>Peso:</strong> 1 | <strong>Bônus:</strong> Nenhum</p> </div> <button className={styles.button}>Adicionar Item</button> </div>
            </div>
            {/* Coluna da Direita */}
            <div className={styles.column}>
                <div className={`${styles.section} ${styles.diceRollerSection}`}>
                    <h2 className={styles.sectionTitle}>Dados</h2>
                    <div className={styles.notationInputWrapper}>
                        <input type="text" value={notation} onChange={(e) => setNotation(e.target.value)} placeholder="Ex: 4d6d1+5" className={styles.notationInput} />
                        <button onClick={handleRoll} className={styles.rollButton}>Rolar</button>
                    </div>
                    <div className={styles.diceGrid}>
                        <div onClick={() => handleQuickRoll('1d100')} className={styles.diceButton}>D100</div>
                        <div onClick={() => handleQuickRoll('1d20')} className={styles.diceButton}>D20</div>
                        <div onClick={() => handleQuickRoll('1d12')} className={styles.diceButton}>D12</div>
                        <div onClick={() => handleQuickRoll('1d10')} className={styles.diceButton}>D10</div>
                        <div onClick={() => handleQuickRoll('1d8')} className={styles.diceButton}>D8</div>
                        <div onClick={() => handleQuickRoll('1d6')} className={styles.diceButton}>D6</div>
                        <div onClick={() => handleQuickRoll('1d4')} className={styles.diceButton}>D4</div>
                        <div onClick={() => handleQuickRoll('1d2')} className={styles.diceButton}>D2</div>
                    </div>
                    <h3 className={styles.subTitle}>Resultado</h3>
                    <div className={styles.diceResult}>
                        {rollResult ? (
                            <>
                                <span className={styles.resultTotal}>{rollResult.total}</span>
                                <span className={styles.resultOutput}>{rollResult.output}</span>
                            </>
                        ) : (<p>Faça uma rolagem...</p>)}
                    </div>
                    <h3 className={styles.subTitle}>Histórico</h3>
                    <ul className={styles.historyList}>
                        {rollHistory.map((roll, index) => (
                            <li key={index} className={styles.historyItem}>
                                <span>{roll.output}</span>
                                <strong>{roll.total}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}