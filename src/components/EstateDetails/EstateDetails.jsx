import s from "./EstateDetails.module.scss"
import { FaCamera } from "react-icons/fa";
import { TbRuler } from "react-icons/tb";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";

export const EstateDetails = ({ img, address, zipcode, city, type, floor_space, num_floors, ground_space, year_construction, year_rebuilt, energy_label_name, date_stamp, basement_space, num_rooms, num_clicks, price, payout, cost, sagsnr, gross, net, description, staffImg, staffName, staffEmail, staffPhone, staffRole }) => {
    return (
        <>
            <div className={s.estateBackground}>
                <img src={img} alt={address} />
            </div>
            <section className={s.estateDetailStyle}>
                <div className={s.estateDetailInfoGrid}>
                    <div className={s.estateDetailInfo1}>
                        <div>
                            <h1>{address}</h1>
                            <p>{`${zipcode} ${city}`}</p>
                            <p>{`${type} | ${floor_space} m2 | ${num_rooms} vær`}</p>
                            <p>set {num_clicks} gange</p>
                        </div>
                        <div>
                            <span className={s.circleSpan}><button><FaCamera /></button></span>
                            <span className={s.circleSpan}><button><TbRuler /></button></span>
                            <span className={s.circleSpan}><button><FaMapMarkerAlt /></button></span>
                            <span className={s.circleSpan}><button><MdFavoriteBorder /></button></span>
                        </div>
                        <div>
                            <h2>Kontantpris {price}</h2>
                            <p>Udbetaling {payout}</p>
                            <p>Ejerudgift per måned {cost}</p>
                        </div>
                    </div>
                    <div className={s.estateDetailInfo2}>
                        <div>
                            <ul><p>Sagsnr.</p> <p>{sagsnr}</p></ul>
                            <ul><p>Boligareal</p> <p>{floor_space} m2</p></ul>
                            <ul><p>Grundareal</p> <p>{ground_space} m2</p></ul>
                            <ul><p>Antal rum</p> <p>{num_rooms}</p></ul>
                            <ul><p>Antal plan</p> <p>{num_floors}</p></ul>
                        </div>
                        <div>
                            <ul><p>Kælder</p> <p>{basement_space}</p></ul>
                            <ul><p>Byggeår</p> <p>{year_construction}</p></ul>
                            <ul><p>Ombygget</p> <p>{year_rebuilt}</p></ul>
                            <ul><p>Energimærke</p> <p>{energy_label_name}</p></ul>
                            <ul><p>Liggetid</p> <p>{date_stamp}</p></ul>
                        </div>
                        <div>
                            <ul><p>Kontantpris</p> <p>{price}</p></ul>
                            <ul><p>Udbetaling</p> <p>{payout}</p></ul>
                            <ul><p>Brutto ex. ejerudgift</p> <p>{gross}</p></ul>
                            <ul><p>Netto ex. ejerudgift</p> <p>{net}</p></ul>
                            <ul><p>Ejerudgift</p> <p>{cost}</p></ul>
                        </div>
                    </div>
                </div>
                <div className={s.estateDetailInfo3}>
                    <div>
                        <p>{description}</p>
                    </div>
                    <div>
                        <h3>Kontakt</h3>
                        <img src={staffImg} alt={staffName} />
                        <p>{staffName}</p>
                        <p>{staffRole}</p>
                        <p>Mobil: {staffPhone}</p>
                        <p>Email: {staffEmail}</p>
                    </div>
                </div>
            </section>
            <div className={s.modalStyle}>
                
            </div>
        </>
    )
}