import React from 'react';
import ReactModal from 'react-modal';
import s from './ImageModal.module.css';

ReactModal.setAppElement('#root');

export const ImageModal = ({ image, onClose }) => {
    return (
        <ReactModal
            isOpen={!!image}
            onRequestClose={onClose}
            contentLabel="Image Modal"
            className={s.modal}
            overlayClassName={s.overlay}
            shouldCloseOnOverlayClick={true} // Додано властивість для закриття при кліку на оверлей
            ariaHideApp={false} // Додано щоб уникнути помилки
        >
            <button onClick={onClose} className={s.closeButton}>X</button>
            {image && (
                <>
                    <img src={image.urls.regular} alt={image.alt_description} className={s.image} />
                    <div className={s.details}>
                        <p><strong>Description:</strong> {image.description || image.alt_description}</p>
                        <p><strong>Author:</strong> {image.user.name}</p>
                        <p><strong>Likes:</strong> {image.likes}</p>
                    </div>
                </>
            )}
        </ReactModal>
    );
};



