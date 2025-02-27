import { useParams } from "react-router-dom"
import { useGet } from "../hooks/useGet"
import { EstateDetails } from "../components/EstateDetails/EstateDetails";

export const DetailPage = () => {
    const { id } = useParams();
    const { isLoading: estateDetailsIsLoading, error: estateDetailsError, data: estateDetailsData } = useGet(`https://api.mediehuset.net/homelands/homes/${id}`)
    console.log(estateDetailsData);
    return (
        <>
            <div>
                <EstateDetails
                    key={estateDetailsData?.item.id}
                    img={estateDetailsData?.item.images[0].filename.large}
                    address={estateDetailsData?.item.address}
                    zipcode={estateDetailsData?.item.zipcode}
                    city={estateDetailsData?.item.city}
                    type={estateDetailsData?.item.type}
                    sagsnr={estateDetailsData?.item.id}
                    price={estateDetailsData?.item.price}
                    payout={estateDetailsData?.item.payout}
                    gross={estateDetailsData?.item.gross}
                    net={estateDetailsData?.item.net}
                    cost={estateDetailsData?.item.cost}
                    energy_label_name={estateDetailsData?.item.energy_label_name}
                    floor_space={estateDetailsData?.item.floor_space}
                    ground_space={estateDetailsData?.item.ground_space}
                    num_floors={estateDetailsData?.item.num_floors}
                    num_rooms={estateDetailsData?.item.num_rooms}
                    basement_space={estateDetailsData?.item.basement_space}
                    year_construction={estateDetailsData?.item.year_construction}
                    year_rebuilt={estateDetailsData?.item.year_rebuilt}
                    description={estateDetailsData?.item.description}
                    num_clicks={estateDetailsData?.item.num_clicks}
                    date_stamp={estateDetailsData?.item.date_stamp}
                    staffImg={estateDetailsData?.item.staff?.image}
                    staffName={`${estateDetailsData?.item.staff?.firstname} ${estateDetailsData?.item.staff?.lastname}`}
                    staffEmail={estateDetailsData?.item.staff?.email}
                    staffPhone={estateDetailsData?.item.staff?.phone}
                    staffRole={estateDetailsData?.item.staff?.role}

                />
            </div>
        </>
    )
}