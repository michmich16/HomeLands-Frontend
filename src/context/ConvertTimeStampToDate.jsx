import React from 'react';

export const ConvertTimeStampToDate = (timestamp) => {
    const convertTimestamp = (timestamp) => {
        const daysOfWeek = [
            "Søndag",
            "Mandag",
            "Tirsdag",
            "Onsdag",
            "Torsdag",
            "Fredag",
            "Lørdag"
        ];

        const date = new Date(timestamp.replace(' ', 'T')); // Replace space to make it ISO 8601 compatible
        const day = daysOfWeek[date.getDay()];
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${day} Kl. ${hours}:${minutes}`;
    };

    return <>{convertTimestamp(timestamp)}</>;
};