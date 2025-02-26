import s from './SectionHeader.module.scss'

export const SectionHeader = ({title, text}) =>{
    return(
        <>
        <div className={s.sectionHeaderStyle}>
            <h3>
                {title}
            </h3>
            <p>{text}</p>
        </div>
        </>
    )
}