import s from './ReviewSection.module.scss';

export const ReviewSection = ({title, text, name, date}) => {
    return (
        <>
        <section className={s.reviewStyle}>
            <h3>{title}</h3>
            <p>{text}</p>
            <div className={s.reviewUser}>
                <p>{name}</p>
                <p>{date}</p>
            </div>
        </section>
        </>
    )
}