// app/components/Ficha/ColunaDireita.js
'use client';

import { FaTrashAlt, FaDiceD20, FaCube, FaDiceD6, FaCaretUp, FaCoins } from "react-icons/fa";

export default function ColunaDireita({
    styles, atributos, handleAtributoChange, forcaDeVontade, getModifier, notation, setNotation,
    rollResult, rollHistory, handleRoll, handleQuickRoll, handleKeyDown, clearHistory
}) {
    return (
        <div className={styles.column}>
            <div className={`${styles.section} ${styles.attributesSection}`}>
                <h2 className={styles.sectionTitle}>Atributos</h2>
                <div className={styles.atributosGrid}>
                    {Object.keys(atributos).map((attrName) => (
                        <div key={attrName} className={styles.atributoBox}>
                            <label className={styles.atributoLabel}>{attrName.toUpperCase()}</label>
                            {/* ===== CORREÇÃO APLICADA AQUI ===== */}
                            <input
                                type="text"
                                inputMode="numeric"
                                name={attrName}
                                value={atributos[attrName]}
                                onChange={handleAtributoChange}
                                className={styles.atributoInput}
                            />
                            <div className={styles.atributoModificador}>{getModifier(atributos[attrName])}</div>
                        </div>
                    ))}
                </div>
                <div className={styles.atributoBox} style={{ marginTop: '1.5rem' }}>
                    <label className={styles.atributoLabel}>FORÇA DE VONTADE</label>
                    {/* ===== CORREÇÃO APLICADA AQUI ===== */}
                    <input
                        type="text"
                        inputMode="numeric"
                        value={forcaDeVontade}
                        className={styles.atributoInput}
                        disabled
                    />
                    <div className={styles.atributoModificador}>{getModifier(forcaDeVontade)}</div>
                </div>
            </div>
            <div className={`${styles.section} ${styles.diceRollerSection}`}>
                <h2 className={styles.sectionTitle}>Dados</h2>
                <div className={styles.notationInputWrapper}>
                    <input type="text" value={notation} onChange={(e) => setNotation(e.target.value)} onKeyDown={handleKeyDown} placeholder="Ex: 3#d20+5" className={styles.notationInput} />
                    <button onClick={handleRoll} className={styles.rollButton}>Rolar</button>
                </div>
                <div className={styles.diceResult}>
                    {rollResult ? (
                        rollResult.isMultiRoll ? (
                            <>
                                <div className={styles.multiRollResult}>
                                    {rollResult.output.map((res, i) => (<span key={i} className={`${styles.multiRollTotal} ${res.critStatus === 'critSuccess' ? styles.critSuccess : res.critStatus === 'critFailure' ? styles.critFailure : ''}`}>{res.total}</span>))}
                                </div>
                                <span className={styles.resultOutput}>{rollResult.output.map(res => res.output.replace('Rolagem: ', '')).join('; ')}</span>
                            </>
                        ) : (
                            <>
                                <span className={`${styles.resultTotal} ${rollResult.critStatus === 'critSuccess' ? styles.critSuccess : rollResult.critStatus === 'critFailure' ? styles.critFailure : ''}`}>{rollResult.total}</span>
                                <span className={styles.resultOutput}>{rollResult.output}</span>
                            </>
                        )
                    ) : (<p>Faça uma rolagem...</p>)}
                </div>
                <div className={styles.diceGrid}>
                    <div onClick={() => handleQuickRoll('1d100')} className={styles.diceButton}><span>D100</span></div>
                    <div onClick={() => handleQuickRoll('1d20')} className={styles.diceButton}><span><FaDiceD20 /> D20</span></div>
                    <div onClick={() => handleQuickRoll('1d12')} className={styles.diceButton}><span><FaCube /> D12</span></div>
                    <div onClick={() => handleQuickRoll('1d10')} className={styles.diceButton}><span><FaCube /> D10</span></div>
                    <div onClick={() => handleQuickRoll('1d8')} className={styles.diceButton}><span><FaCube /> D8</span></div>
                    <div onClick={() => handleQuickRoll('1d6')} className={styles.diceButton}><span><FaDiceD6 /> D6</span></div>
                    <div onClick={() => handleQuickRoll('1d4')} className={styles.diceButton}><span><FaCaretUp /> D4</span></div>
                    <div onClick={() => handleQuickRoll('1d2')} className={styles.diceButton}><span><FaCoins /> D2</span></div>
                </div>
                <div className={styles.historyHeader}>
                    <h3 className={styles.subTitle}>Histórico</h3>
                    <button onClick={clearHistory} className={styles.clearHistoryButton} title="Limpar histórico"><FaTrashAlt /></button>
                </div>
                <ul className={styles.historyList}>
                    {rollHistory.map((roll, index) => (
                        <li key={index} className={styles.historyItem}>
                            {roll.isMultiRoll ? (<span>{`${notation} -> [${roll.output.map(r => r.total).join(', ')}]`}</span>) : (<span>{roll.output}</span>)}
                            <strong>{roll.total}</strong>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}