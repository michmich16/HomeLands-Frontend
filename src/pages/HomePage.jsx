import { Slider } from "../components/Slider/Slider"
import { Cards } from "../components/Cards/Cards"
import { GridContainer } from "../components/GridContainer/GridContainer"
import { SectionHeader } from "../components/SectionHeader/SectionHeader"
import { Employees } from "../components/Employees/Employees"
import { ReviewSection } from "../components/ReviewSection/ReviewSection"
import { useGet } from "../hooks/useGet"
export const HomePage = () => {

    const { isLoading, error, data } = useGet('https://api.mediehuset.net/homelands/homes');
    const { isLoading: employeesIsLoading, error: employeesError, data: employeesData } = useGet('https://api.mediehuset.net/homelands/staff');
    const { isLoading: reviewIsLoading, error: reviewError, data: reviewData } = useGet('https://api.mediehuset.net/homelands/reviews');


    return (
        <>
            <Slider />
            <GridContainer columns="1fr 1fr 1fr">
                {!isLoading && data?.items?.slice(0, 3).map((item) => (
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
            <SectionHeader title="Det siger kunderne:" />
                {!reviewIsLoading && reviewData?.items?.length > 0 && (
                    (() => {
                        // vælger random review med math.random
                        const randomIndex = Math.floor(Math.random() * reviewData.items.length);
                        const randomReview = reviewData.items[randomIndex];

                        return (
                            <ReviewSection
                                key={randomReview.id}
                                title={randomReview.title}
                                text={randomReview.content}
                                name={`${randomReview.user.firstname} ${randomReview.user.lastname}`}
                                date={randomReview.created_friendly}
                            />
                        );
                    })()
                )}
            <SectionHeader title="Mød vores ansatte" />
            <GridContainer columns="1fr 1fr 1fr 1fr">
                {!employeesIsLoading && employeesData?.items?.map((item) => {
                    return (
                        <Employees
                            key={item.id}
                            img={item.image}
                            name={`${item.firstname} ${item.lastname}`}
                            role={item.position}
                            email={item.email}
                            telephone={item.phone} />
                    )
                })}
            </GridContainer>
        </>
    )
}