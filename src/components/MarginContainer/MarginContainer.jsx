import style from "./MarginContainer.module.scss";

export const MarginContainer = ({ children }) => {

    return(
        <div className={style.marginContainer}>
            {children}
        </div>
    );
}