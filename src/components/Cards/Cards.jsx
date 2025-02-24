import { useGet } from '../../hooks/useGet';
import s from './Cards.module.scss';

export const Cards = ({ img, address, zipcode, city, type, energy_label_name, num_rooms, floor_space, price }) => {


    return (
        <>
            <div className={s.cardStyle}>
                <img src={img} />
                <div className={s.primInfo}>
                    <h3>{address}</h3>
                    <p>{zipcode} {city}</p>
                    <p>{type}</p>
                </div>
                <div className={s.secInfo}>
                    <p>{energy_label_name}</p>
                    <p>{num_rooms} værelser, {floor_space} m2</p>
                    <p>{price} DKK</p>
                </div>
            </div>
        </>
    )
}