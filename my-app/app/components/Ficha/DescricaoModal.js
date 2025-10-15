// app/components/Ficha/DescricaoModal.js
'use client';

import { useState } from 'react';

export default function DescricaoModal({ styles, item, onSave, onClose }) {
    // Cria um estado local para editar a descrição sem afetar o original até salvar
    const [description, setDescription] = useState(item.descricao);

    const handleSave = () => {
        onSave(item.id, description);
        onClose();
    };

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h3 className={styles.modalTitle}>Descrição do Item: {item.nome || '(Sem nome)'}</h3>
                <textarea
                    className={styles.modalTextarea}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="10"
                ></textarea>
                <button className={styles.button} onClick={handleSave}>
                    Salvar e Fechar
                </button>
            </div>
        </div>
    );
}