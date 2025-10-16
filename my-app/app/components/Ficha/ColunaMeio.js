// app/components/Ficha/ColunaMeio.js
'use client';

import { FaTrashAlt } from "react-icons/fa";

export default function ColunaMeio({
    styles, activeTab, setActiveTab, inventory, addItemToInventory,
    removeItemFromInventory, handleItemChange, openDescriptionModal,
    raceData, valar, selectedValar, handleValarChange, valarData
}) {
    return (
        <div className={styles.column}>
            <div className={styles.section}>
                <div className={styles.tabNav}>
                    <button className={`${styles.tabButton} ${activeTab === 'raca' ? styles.activeTab : ''}`} onClick={() => setActiveTab('raca')}>Habilidades de Raça</button>
                    <button className={`${styles.tabButton} ${activeTab === 'classe' ? styles.activeTab : ''}`} onClick={() => setActiveTab('classe')}>Habilidades de Classe</button>
                    <button className={`${styles.tabButton} ${activeTab === 'valar' ? styles.activeTab : ''}`} onClick={() => setActiveTab('valar')}>Benção dos Valar</button>
                </div>
                <div className={styles.tabContent}>
                    {activeTab === 'raca' && (
                        <div>
                            {raceData ? (
                                <>
                                    {raceData.talentos.map(talento => (
                                        <div key={talento.nome} className={styles.ability}>
                                            <strong>Talento: {talento.nome}</strong>
                                            <p className={styles.abilityDescription}>{talento.descricao}</p>
                                        </div>
                                    ))}
                                    <div className={styles.ability}>
                                        <strong>Mau Hábito: {raceData.mauHabito.nome}</strong>
                                        <p className={styles.abilityDescription}>{raceData.mauHabito.descricao}</p>
                                    </div>
                                    <div className={styles.ability}>
                                        <strong>Benção: {raceData.bencao.nome}</strong>
                                        <p className={styles.abilityDescription}>{raceData.bencao.descricao}</p>
                                    </div>
                                    <div className={styles.ability}>
                                        <strong>Maldição: {raceData.maldicao.nome}</strong>
                                        <p className={styles.abilityDescription}>{raceData.maldicao.descricao}</p>
                                    </div>
                                </>
                            ) : (
                                <p className={styles.placeholderText}>Selecione uma raça para ver suas habilidades.</p>
                            )}
                        </div>
                    )}
                    {activeTab === 'classe' && (
                        <div>
                            <div className={styles.ability}> <strong>Técnica:</strong> Tiro Profundo </div>
                            <div className={styles.ability}> <strong>Tradição:</strong> Predador Comum </div>
                        </div>
                    )}
                    {activeTab === 'valar' && (
                        <div className={styles.valarSelection}>
                            <div className={styles.selectWrapper}>
                                <select className={styles.selectInput} value={selectedValar} onChange={handleValarChange}>
                                    <option value="">Selecione um Valar...</option>
                                    {valar.map(v => (
                                        <option key={v.nome} value={v.nome}>{v.nome}</option>
                                    ))}
                                </select>
                            </div>

                            {valarData && (
                                <div className={styles.valarDetails}>
                                    <div className={styles.ability}>
                                        <strong>Benção: {valarData.bencao.nome}</strong>
                                        <p className={styles.abilityDescription}>{valarData.bencao.descricao}</p>
                                    </div>
                                    <div className={styles.ability}>
                                        <strong>Restrições</strong>
                                        <p className={styles.abilityDescription}>{valarData.restricoes}</p>
                                    </div>
                                    <div className={styles.ability}>
                                        <strong>Local de Adoração</strong>
                                        <p className={styles.abilityDescription}>{valarData.localAdoracao}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Inventário</h2>
                <p>Peso: 0 / X</p>
                <div className={styles.inventoryWrapper}>
                    <table className={styles.inventoryTable}>
                        <thead>
                            <tr>
                                <th>Nome do Item</th>
                                <th>Dano/Efeito</th>
                                <th>Qtd.</th>
                                <th>Descrição</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventory.map(item => (
                                <tr key={item.id}>
                                    <td><input type="text" value={item.nome} onChange={(e) => handleItemChange(item.id, 'nome', e.target.value)} /></td>
                                    <td><input type="text" value={item.danoEfeito} onChange={(e) => handleItemChange(item.id, 'danoEfeito', e.target.value)} /></td>
                                    <td><input type="text" inputMode="numeric" value={item.quantidade} onChange={(e) => handleItemChange(item.id, 'quantidade', e.target.value)} className={styles.quantityInput} /></td>
                                    <td>
                                        <button className={styles.openDescriptionButton} onClick={() => openDescriptionModal(item.id)}>
                                            Abrir Descrição
                                        </button>
                                    </td>
                                    <td><button className={styles.deleteItemButton} onClick={() => removeItemFromInventory(item.id)}><FaTrashAlt /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button className={styles.button} onClick={addItemToInventory}>Adicionar Item</button>
            </div>
        </div>
    );
}