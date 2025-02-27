import { Cards } from "../components/Cards/Cards";
import { GridContainer } from "../components/GridContainer/GridContainer";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";
import { useGet } from "../hooks/useGet";
import { FindValuesInObject } from "../context/FindValuesInObject";
import { useParams } from "react-router-dom";

export const EstatesPage = () => {
    const { keyword } = useParams();
    const { isLoading, error, data } = useGet('https://api.mediehuset.net/homelands/homes');

    // Filter the fetched data based on the keyword
    const filteredData = keyword 
        ? data?.items?.filter((item) => FindValuesInObject(item, keyword))
        : data?.items;

    return (
        <>
            <section>
                <SectionHeader title={"Boliger til salg"} />
            </section>
            <GridContainer columns="1fr 1fr 1fr">
                {!isLoading && filteredData?.map((item) => (
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
                        link={`/estates/${item.id}`}
                    />
                ))}
            </GridContainer>
        </>
    );
};
