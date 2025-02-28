import s from './Employees.module.scss';

export const Employees = ({ img, name, role, email, telephone }) => {
    return (
        <>
            <div className={s.employeesStyle}>
                <img src={img} alt={name} />
                <div className={s.employeeInfo}>
                    <h4>{name}</h4>
                    <p>{role}</p>
                    <span className={s.employeeContact}>
                        <p>Email: {email}</p>
                        <p>Mobil: {telephone}</p>
                    </span>
                </div>
            </div>
        </>
    )
}