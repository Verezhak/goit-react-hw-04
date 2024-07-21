
import s from './ImageCard.module.css'

export const ImageCard = ({ image, onClick }) => {
    return (
        <li className={s.imageCard} >
            <img src={image.urls.small} alt={image.alt_description} onClick={() => onClick(image)} />
        </li>
    )
}




