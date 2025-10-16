// app/components/Ficha/DescricaoModal.js
'use client';

import { useState, useEffect } from 'react';

export default function DescricaoModal({ styles, item, onSave, onClose }) {
    const [editedItem, setEditedItem] = useState(item);

    // Garante que o estado local é atualizado se o item mudar
    useEffect(() => {
        setEditedItem(item);
    }, [item]);

    const handleChange = (field, value) => {
        setEditedItem(prev => ({ ...prev, [field]: value }));
    };

    const handleSave = () => {
        onSave(item.id, editedItem);
        onClose();
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h3 className={styles.modalTitle}>Detalhes do Item: {editedItem.nome || '(Sem nome)'}</h3>

                {/* ===== NOVOS CAMPOS AQUI ===== */}
                <div className={styles.modalFieldsGrid}>
                    <div className={styles.field}>
                        <label>Peso do Item</label>
                        <input type="number" value={editedItem.peso} onChange={(e) => handleChange('peso', e.target.value)} />
                    </div>
                    <div className={styles.field}>
                        <label>Espaço Ocupado</label>
                        <input type="number" value={editedItem.espaco} onChange={(e) => handleChange('espaco', e.target.value)} />
                    </div>
                </div>

                <div className={styles.field}>
                    <label>Descrição</label>
                    <textarea
                        className={styles.modalTextarea}
                        value={editedItem.descricao}
                        onChange={(e) => handleChange('descricao', e.target.value)}
                        rows="8"
                    ></textarea>
                </div>

                <button className={styles.button} onClick={handleSave}>
                    Salvar e Fechar
                </button>
            </div>
        </div>
    );
}