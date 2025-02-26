import { Cards } from "../components/Cards/Cards"
import { GridContainer } from "../components/GridContainer/GridContainer"
import { SectionHeader } from "../components/SectionHeader/SectionHeader"
import { useGet } from "../hooks/useGet"

export const EstatesPage = () => {
    const { isLoading, error, data } = useGet('https://api.mediehuset.net/homelands/homes');
    return (
        <>
        <section>
        <SectionHeader title={"Boliger til salg"}/>
        </section>
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
                        link={`/estates/${item.id}`}
                    />
                ))}
            </GridContainer>
        </>
    )
}