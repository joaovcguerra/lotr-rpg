// app/components/Ficha/ColunaMeio.js
'use client';

import { FaTrashAlt } from "react-icons/fa";

export default function ColunaMeio({
    styles, activeTab, setActiveTab, inventory, addItemToInventory,
    removeItemFromInventory, handleItemChange, openDescriptionModal
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
                    {activeTab === 'raca' && (<div><div className={styles.ability}><strong>Talento:</strong> Leveza Élfica</div><div className={styles.ability}><strong>Mau Hábito:</strong> Desgosto por Anões</div></div>)}
                    {activeTab === 'classe' && (<div><div className={styles.ability}><strong>Técnica:</strong> Tiro Profundo</div><div className={styles.ability}><strong>Tradição:</strong> Predador Comum</div></div>)}
                    {activeTab === 'valar' && (<div><div className={styles.ability}><strong>Valar:</strong> Manwë</div><div className={styles.ability}><strong>Benção:</strong> Águias Gigantes</div></div>)}
                </div>
            </div>
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Inventário</h2>
                <p>Peso: 0 / X</p>
                <div className={styles.inventoryWrapper}>
                    <table className={styles.inventoryTable}>
                        <thead><tr><th>Nome do Item</th><th>Dano/Efeito</th><th>Qtd.</th><th>Descrição</th><th></th></tr></thead>
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