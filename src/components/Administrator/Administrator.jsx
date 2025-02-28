import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import { toast } from "react-toastify";
import { ConvertTimeStampToDate } from "../../context/ConvertTimeStampToDate"
import s from "./Administrator.module.scss";

export const Administrator = () => {
    const { userToken, setUserData, setUserToken } = useContext(UserContext);
    const [reviewData, setReviewData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // Fetch reviews on mount
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await fetch(
                    "https://api.mediehuset.net/homelands/reviews"
                );
                const data = await response.json();
                setReviewData(data);
            } catch (error) {
                toast.error("Kunne ikke hente anmeldelser");
            }
        };

        fetchReviews();
    }, []);

    const deleteReview = async (id, token) => {
        setIsLoading(true);

        const options = {
            method: "DELETE",
            headers: { Authorization: `Bearer ${token}` },
        };

        try {
            const response = await fetch(
                `https://api.mediehuset.net/homelands/reviews/${id}`,
                options
            );

            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || "Der opstod en fejl");
            }

            const res = await response.json();

            if (res.message === "Record deleted") {
                toast.success("Du har slettet anmeldelsen");

                // Update local state
                setReviewData((prevData) => ({
                    ...prevData,
                    items: prevData.items.filter((item) => item.id !== id),
                }));
            } else {
                throw new Error("Unexpected response message");
            }
        } catch (err) {
            toast.error(err.message || "Der opstod en fejl, prøv igen senere");
        } finally {
            setIsLoading(false);
        }
    };

    const logOut = () => {
        setUserData(null);
        setUserToken(null);
        toast.info("Du er nu logget ud");
        sessionStorage.removeItem("userData");
        sessionStorage.removeItem("userToken");
    };

    return (
        <section className={s.adminStyle}>
            <SectionHeader title="Administration" text="Du er logget ind som admin" />
            <button className={s.logoutBtn} onClick={logOut}>
                Log Ud
            </button>
            {isLoading ? (
                <p>Indlæser...</p>
            ) : (
                <ul className={s.reviewsStyle}>
                    <div className={s.reviewTable}>
                        <p>Dine anmeldelser</p>
                        <p>Dato</p>
                        <p>Handling</p>
                    </div>
                    <br />
                    {reviewData?.items?.map((item) => (
                        <li key={item.id}>
                            <h4>{item.title.slice(0, 12)}</h4>
                            <p>{item.created_friendly.slice(0,10)}</p>
                            <button
                                onClick={() => deleteReview(item.id, userToken)}
                                disabled={isLoading}
                            >
                                Slet
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
};
