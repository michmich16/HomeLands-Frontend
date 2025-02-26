import { useParams } from "react-router-dom"
import { useGet } from "../hooks/useGet"
import { EstateDetails } from "../components/EstateDetails/EstateDetails";

export const DetailPage = () => {
    const { id } = useParams();
    const { isLoading, error, data } = useGet(`https://api.mediehuset.net/homelands/homes/${id}`)
    return (
        <>
            <div>
                {!isLoading && data?.items?.map((item) => (
                    <EstateDetails 
                    img={item.images[0].filename.large}
                    address={item.address}
                    zipcode={item.zipcode}
                    city={item.city}
                    
                    />
                ))}
            </div>
        </>
    )
}