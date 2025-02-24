import { useState, useEffect } from "react";
import { useGet } from "../../hooks/useGet";
import s from "./Slider.module.scss";

export const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [images, setImages] = useState([]);
    const { isLoading, error, data } = useGet(`https://api.mediehuset.net/homelands/images`);

    useEffect(() => {
        if (data?.items) {
            const shuffledImages = [...data.items]
                .sort(() => Math.random() - 0.5) // random image
                .map(item => item.image[1]); // kun vis large img i image array
            setImages(shuffledImages);
        }
    }, [data]);

    useEffect(() => {
        if (images.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
            }, 10000); // skifter hver 10 seconds

            return () => clearInterval(interval); // Cleanup on unmount
        }
    }, [images]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading images: {error.message}</p>;

    return (
        <div className={s.sliderStyle}>
            {images.length > 0 && (
                <img
                    src={images[currentIndex]}
                    alt={`Slider image ${currentIndex + 1}`}
                    className={s.sliderImage}
                />
            )}
        </div>
    );
};
