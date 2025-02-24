import { Slider } from "../components/Slider/Slider"
import { Cards } from "../components/Cards/Cards"
import { GridContainer } from "../components/GridContainer/GridContainer"
import { useGet } from "../hooks/useGet"
export const HomePage = () => {

    const { isLoading, error, data } = useGet('https://api.mediehuset.net/homelands/homes');
    console.log(data);

    return (
        <>
            <Slider />
            <GridContainer columns="1fr 1fr 1fr">
                {!isLoading && data?.items?.map((item) => (
                    <Cards
                        key={item.id}
                        img={item.images[0].filename.large}
                        address={item.address}
                        zipcode={item.zipcode}
                        city={item.city}
                        energy_label_name={item.energy_label_name}
                        num_rooms={item.num_rooms}
                        floor_space={item.floor_space}
                        price={item.price}
                    />
                ))}
            </GridContainer>
        </>
    )
}