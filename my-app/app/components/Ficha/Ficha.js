'use client';

import { useState, useMemo } from 'react';
import styles from './Ficha.module.css';
import { rollCustomDice } from '../../utils/diceParser.js';

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

    // State para controlar a aba de habilidades ativa
    const [activeTab, setActiveTab] = useState('raca');

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
        if (!notation) return;
        const result = rollCustomDice(notation);
        setRollResult(result);
        setRollHistory(prevHistory => [result, ...prevHistory].slice(0, 10));
    };

    const handleQuickRoll = (die) => {
        const result = rollCustomDice(die);
        setRollResult(result);
        setNotation(die);
        setRollHistory(prevHistory => [result, ...prevHistory].slice(0, 10));
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleRoll();
        }
    };

    const clearHistory = () => {
        setRollHistory([]);
    };

    return (
        <div className={styles.fichaGridContainer}>
            {/* ===== COLUNA DA ESQUERDA ATUALIZADA ===== */}
            <div className={styles.column}>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Informações Gerais</h2>
                    <div className={styles.infoGeral}>
                        <div className={styles.profilePic}></div>
                        <button className={styles.buttonSmall}>Mudar foto</button>
                    </div>
                    <div className={styles.field}> <label>Nome:</label> <input type="text" placeholder="Oberon" /> </div>
                    <div className={styles.field}> <label>Raça:</label> <input type="text" /> </div>
                    <div className={styles.field}> <label>Classe:</label> <input type="text" /> </div>
                    <div className={styles.field}> <label>Caminho:</label> <input type="text" /> </div>
                    <div className={styles.field}> <label>Ofício:</label> <input type="text" /> </div>
                    <div className={styles.sideBySideFields}>
                        <div className={styles.field}> <label>Idade:</label> <input type="text" /> </div>
                        <div className={styles.field}> <label>Altura:</label> <input type="text" /> </div>
                    </div>
                </div>
                {/* Status movido para a coluna da esquerda */}
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Status</h2>
                    <div className={styles.statusDisplay}>
                        <p><strong>HP:</strong> XdX</p> <p><strong>MANA:</strong> XdX</p>
                        <p><strong>Energia de Jornada:</strong> Y</p> <p><strong>Barra de Vontade:</strong> Z</p>
                        <p><strong>Level:</strong> 1</p> <p><strong>Deslocamento:</strong> X</p>
                    </div>
                </div>
            </div>

            {/* ===== COLUNA DO MEIO ATUALIZADA (COM ABAS) ===== */}
            <div className={styles.column}>
                <div className={styles.section}>
                    <div className={styles.tabNav}>
                        <button
                            className={`${styles.tabButton} ${activeTab === 'raca' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('raca')}>
                            Habilidades de Raça
                        </button>
                        <button
                            className={`${styles.tabButton} ${activeTab === 'classe' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('classe')}>
                            Habilidades de Classe
                        </button>
                        <button
                            className={`${styles.tabButton} ${activeTab === 'valar' ? styles.activeTab : ''}`}
                            onClick={() => setActiveTab('valar')}>
                            Benção dos Valar
                        </button>
                    </div>

                    {/* Conteúdo das Abas */}
                    <div className={styles.tabContent}>
                        {activeTab === 'raca' && (
                            <div>
                                <div className={styles.ability}> <strong>Talento:</strong> Leveza Élfica </div>
                                <div className={styles.ability}> <strong>Mau Hábito:</strong> Desgosto por Anões </div>
                            </div>
                        )}
                        {activeTab === 'classe' && (
                            <div>
                                <div className={styles.ability}> <strong>Técnica:</strong> Tiro Profundo </div>
                                <div className={styles.ability}> <strong>Tradição:</strong> Predador Comum </div>
                            </div>
                        )}
                        {activeTab === 'valar' && (
                            <div>
                                <div className={styles.ability}> <strong>Valar:</strong> Manwë </div>
                                <div className={styles.ability}> <strong>Benção:</strong> Águias Gigantes </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Inventário</h2>
                    <p>Peso: 0 / X</p>
                    <div className={styles.item}> <p><strong>Nome:</strong> Item Exemplo</p> <p><strong>Descrição:</strong> Um item para demonstrar a estrutura.</p> <p><strong>Peso:</strong> 1 | <strong>Bônus:</strong> Nenhum</p> </div>
                    <button className={styles.button}>Adicionar Item</button>
                </div>
            </div>

            {/* ===== COLUNA DA DIREITA ATUALIZADA ===== */}
            <div className={styles.column}>
                {/* Atributos movidos para a coluna da direita */}
                <div className={`${styles.section} ${styles.attributesSection}`}>
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

                <div className={`${styles.section} ${styles.diceRollerSection}`}>
                    <h2 className={styles.sectionTitle}>Dados</h2>
                    <div className={styles.notationInputWrapper}>
                        <input type="text" value={notation} onChange={(e) => setNotation(e.target.value)} onKeyDown={handleKeyDown} placeholder="Ex: 3#d20+5" className={styles.notationInput} />
                        <button onClick={handleRoll} className={styles.rollButton}>Rolar</button>
                    </div>

                    {/* Resultado movido para cima */}
                    <div className={styles.diceResult}>
                        {rollResult ? (
                            rollResult.isMultiRoll ? (
                                <>
                                    <div className={styles.multiRollResult}>
                                        {rollResult.output.map((res, i) => (
                                            <span key={i} className={`${styles.multiRollTotal} ${res.critStatus === 'critSuccess' ? styles.critSuccess :
                                                    res.critStatus === 'critFailure' ? styles.critFailure : ''
                                                }`}>
                                                {res.total}
                                            </span>
                                        ))}
                                    </div>
                                    <span className={styles.resultOutput}>
                                        {rollResult.output.map(res => res.output.replace('Rolagem: ', '')).join('; ')}
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span className={`${styles.resultTotal} ${rollResult.critStatus === 'critSuccess' ? styles.critSuccess :
                                            rollResult.critStatus === 'critFailure' ? styles.critFailure : ''
                                        }`}>
                                        {rollResult.total}
                                    </span>
                                    <span className={styles.resultOutput}>{rollResult.output}</span>
                                </>
                            )
                        ) : (
                            <p>Faça uma rolagem...</p>
                        )}
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

                    <div className={styles.historyHeader}>
                        <h3 className={styles.subTitle}>Histórico</h3>
                        <button onClick={clearHistory} className={styles.clearHistoryButton} title="Limpar histórico">
                            🗑️
                        </button>
                    </div>
                    <ul className={styles.historyList}>
                        {rollHistory.map((roll, index) => (
                            <li key={index} className={styles.historyItem}>
                                {roll.isMultiRoll ? (
                                    <span>{`${notation} -> [${roll.output.map(r => r.total).join(', ')}]`}</span>
                                ) : (
                                    <span>{roll.output}</span>
                                )}
                                <strong>{roll.total}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}