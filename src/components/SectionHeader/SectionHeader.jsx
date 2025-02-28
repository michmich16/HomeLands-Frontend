import s from './SectionHeader.module.scss'

export const SectionHeader = ({title, text, textAlign = 'left' , padding, fontSize}) =>{
    return(
        <>
        <div className={s.sectionHeaderStyle}  style={{ textAlign, padding, fontSize }}>
            <h3>
                {title}
            </h3>
            <p>{text}</p>
        </div>
        </>
    )
}