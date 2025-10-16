// app/components/Ficha/OficioInfoModal.js
'use client';

export default function OficioInfoModal({ styles, oficio, onClose }) {
    if (!oficio) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <h3 className={styles.modalTitle}>{oficio.nome}</h3>
                <p className={styles.modalDescription}>{oficio.descricao}</p>
                <button className={styles.button} onClick={onClose}>
                    Fechar
                </button>
            </div>
        </div>
    );
}