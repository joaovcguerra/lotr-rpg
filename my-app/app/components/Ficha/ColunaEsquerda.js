// app/components/Ficha/ColunaEsquerda.js
'use client';

import { FaInfoCircle } from 'react-icons/fa';

export default function ColunaEsquerda({
    styles, hp, setHp, mana, setMana,
    vontade, setVontade, // <-- Propriedades da nova barra
    danoValue, setDanoValue, curaValue, setCuraValue,
    custoValue, setCustoValue, regenValue, setRegenValue,
    vontadeGastoValue, setVontadeGastoValue, // <-- Propriedades da nova barra
    vontadeRegenValue, setVontadeRegenValue, // <-- Propriedades da nova barra
    applyHpChange, applyManaChange, applyVontadeChange, // <-- Propriedades da nova barra
    handleMaxStatChange,
    races, selectedRace, handleRaceChange, classes, selectedClass, handleClassChange,
    availableSubclasses, selectedSubclass, handleSubclassChange, oficios, selectedOficio,
    handleOficioChange, openOficioModal,
    level, handleLevelChange,

    // ===== RECEBENDO AS NOVAS PROPS AQUI =====
    deslocamentoString,
    hpDadoString,
    manaDadoString,
    socoDadoString,
    vontadeDadoString // <-- NOVA PROP RECEBIDA
}) {
    return (
        <div className={styles.column}>
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Informações Gerais</h2>
                <div className={styles.infoGeral}>
                    <div className={styles.profilePic}></div>
                    <button className={styles.buttonSmall}>Mudar foto</button>
                </div>

                <div className={styles.field}><label>Nome:</label><input type="text" placeholder="Oberon" /></div>

                <div className={styles.raceLevelFields}>
                    <div className={styles.field}>
                        <label>Raça:</label>
                        <div className={styles.selectWrapper}>
                            <select className={styles.selectInput} value={selectedRace} onChange={handleRaceChange}>
                                <option value="">Selecione uma raça...</option>
                                {races.map(race => (<option key={race.nome} value={race.nome}>{race.nome}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className={styles.field}>
                        <label>Nível:</label>
                        <input
                            type="text"
                            inputMode="numeric"
                            className={styles.levelInput}
                            maxLength="2"
                            value={level}
                            onChange={handleLevelChange}
                        />
                    </div>
                </div>

                <div className={styles.classSubclassFields}>
                    <div className={styles.field}>
                        <label>Classe:</label>
                        <div className={styles.selectWrapper}>
                            <select className={styles.selectInput} value={selectedClass} onChange={handleClassChange}>
                                <option value="">Selecione uma classe...</option>
                                {classes.map(c => (<option key={c.nome} value={c.nome}>{c.nome}</option>))}
                            </select>
                        </div>
                    </div>
                    <div className={styles.field}>
                        <label>Subclasse:</label>
                        <div className={styles.selectWrapper}>
                            <select className={styles.selectInput} value={selectedSubclass} onChange={handleSubclassChange} disabled={!selectedClass}>
                                <option value="">Selecione uma subclasse...</option>
                                {availableSubclasses.map(sc => (<option key={sc.nome} value={sc.nome}>{sc.nome}</option>))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className={styles.field}>
                    <label>Ofício:</label>
                    <div className={styles.fieldWithIcon}>
                        <div className={`${styles.selectWrapper} ${styles.flexGrow}`}>
                            <select className={styles.selectInput} value={selectedOficio} onChange={handleOficioChange}>
                                <option value="">Selecione um ofício...</option>
                                {oficios.map(oficio => (<option key={oficio.nome} value={oficio.nome}>{oficio.nome}</option>))}
                            </select>
                        </div>
                        <button className={styles.infoButton} onClick={openOficioModal} disabled={!selectedOficio} title="Ver detalhes do ofício">
                            <FaInfoCircle />
                        </button>
                    </div>
                </div>

                <div className={styles.ageHeightFields}>
                    <div className={styles.field}><label>Idade:</label><input type="text" /></div>
                    <div className={styles.field}><label>Altura:</label><input type="text" /></div>
                </div>
            </div>
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Status</h2>
                {/* Barra de HP */}
                <h4 className={styles.barTitle}>Pontos de Vida</h4>
                <div className={styles.statusBarContainer}>
                    <button className={styles.statusBarButton} onClick={() => setHp(prev => ({ ...prev, current: prev.current - 1 }))}>-</button>
                    <div className={styles.statusBar}>
                        <div className={`${styles.statusBarFill} ${styles.hpBar}`} style={{ width: `${(hp.current / hp.max) * 100}%` }}></div>
                        <div className={styles.statusBarValues}>
                            <input type="text" inputMode="numeric" value={hp.current} onChange={(e) => setHp({ ...hp, current: Math.min(parseInt(e.target.value) || 0, hp.max) })} className={styles.maxStatInput} />
                            <span>|</span>
                            <input type="text" inputMode="numeric" value={hp.max} onChange={(e) => handleMaxStatChange('hp', e.target.value)} className={styles.maxStatInput} />
                        </div>
                    </div>
                    <button className={styles.statusBarButton} onClick={() => setHp(prev => ({ ...prev, current: prev.current + 1 }))}>+</button>
                </div>
                <div className={styles.changeInputContainer}>
                    <div className={styles.changeInputField}><label>Dano</label><input type="number" className={styles.smallInput} value={danoValue} onChange={(e) => setDanoValue(e.target.value)} onKeyDown={(e) => applyHpChange(e, danoValue, false)} /></div>
                    <div className={styles.changeInputField}><label>Cura</label><input type="number" className={styles.smallInput} value={curaValue} onChange={(e) => setCuraValue(e.target.value)} onKeyDown={(e) => applyHpChange(e, curaValue, true)} /></div>
                </div>

                {/* Barra de Mana */}
                <h4 className={styles.barTitle}>Mana</h4>
                <div className={styles.statusBarContainer}>
                    <button className={styles.statusBarButton} onClick={() => setMana(prev => ({ ...prev, current: prev.current - 1 }))}>-</button>
                    <div className={styles.statusBar}>
                        <div className={`${styles.statusBarFill} ${styles.manaBar}`} style={{ width: `${(mana.current / mana.max) * 100}%` }}></div>
                        <div className={styles.statusBarValues}>
                            <input type="text" inputMode="numeric" value={mana.current} onChange={(e) => setMana({ ...mana, current: Math.min(parseInt(e.target.value) || 0, mana.max) })} className={styles.maxStatInput} />
                            <span>|</span>
                            <input type="text" inputMode="numeric" value={mana.max} onChange={(e) => handleMaxStatChange('mana', e.target.value)} className={styles.maxStatInput} />
                        </div>
                    </div>
                    <button className={styles.statusBarButton} onClick={() => setMana(prev => ({ ...prev, current: prev.current + 1 }))}>+</button>
                </div>
                <div className={styles.changeInputContainer}>
                    <div className={styles.changeInputField}><label>Gasto</label><input type="number" className={styles.smallInput} value={custoValue} onChange={(e) => setCustoValue(e.target.value)} onKeyDown={(e) => applyManaChange(e, custoValue, false)} /></div>
                    <div className={styles.changeInputField}><label>Regeneração</label><input type="number" className={styles.smallInput} value={regenValue} onChange={(e) => setRegenValue(e.target.value)} onKeyDown={(e) => applyManaChange(e, regenValue, true)} /></div>
                </div>

                {/* ===== NOVA BARRA DE FORÇA DE VONTADE ===== */}
                <h4 className={styles.barTitle}>Força de Vontade</h4>
                <div className={styles.statusBarContainer}>
                    <button className={styles.statusBarButton} onClick={() => setVontade(prev => ({ ...prev, current: prev.current - 1 }))}>-</button>
                    <div className={styles.statusBar}>
                        <div className={`${styles.statusBarFill} ${styles.vontadeBar}`} style={{ width: `${(vontade.current / vontade.max) * 100}%` }}></div>
                        <div className={styles.statusBarValues}>
                            <input type="text" inputMode="numeric" value={vontade.current} onChange={(e) => setVontade({ ...vontade, current: Math.min(parseInt(e.target.value) || 0, vontade.max) })} className={styles.maxStatInput} />
                            <span>|</span>
                            <input type="text" inputMode="numeric" value={vontade.max} onChange={(e) => handleMaxStatChange('vontade', e.target.value)} className={styles.maxStatInput} />
                        </div>
                    </div>
                    <button className={styles.statusBarButton} onClick={() => setVontade(prev => ({ ...prev, current: prev.current + 1 }))}>+</button>
                </div>
                <div className={styles.changeInputContainer}>
                    <div className={styles.changeInputField}><label>Gasto</label><input type="number" className={styles.smallInput} value={vontadeGastoValue} onChange={(e) => setVontadeGastoValue(e.target.value)} onKeyDown={(e) => applyVontadeChange(e, vontadeGastoValue, false)} /></div>
                    <div className={styles.changeInputField}><label>Regeneração</label><input type="number" className={styles.smallInput} value={vontadeRegenValue} onChange={(e) => setVontadeRegenValue(e.target.value)} onKeyDown={(e) => applyVontadeChange(e, vontadeRegenValue, true)} /></div>
                </div>

                {/* ===== SEÇÃO DE OUTROS STATUS ATUALIZADA ===== */}
                <div className={styles.otherStats}>
                    <p><strong>Deslocamento:</strong> {deslocamentoString}</p>
                    <p><strong>Dado de Soco:</strong> {socoDadoString}</p>
                    <p><strong>Dado de HP:</strong> {hpDadoString}</p>
                    <p><strong>Dado de Mana:</strong> {manaDadoString}</p>
                    <p><strong>Dado de Força de Vontade:</strong> {vontadeDadoString}</p>
                </div>
            </div>
        </div>
    );
}