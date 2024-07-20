import s from './LoadMoreBtn.module.css'


export const LoadMoreBtn = ({ onClick }) => {
    return (
        <div className={s.loadBtn}>
            <button onClick={onClick}>Load more</button>
        </div>
    )
}


