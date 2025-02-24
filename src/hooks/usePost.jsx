import { useEffect, useState } from 'react';

export const usePost = ({ url, body, token }) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState();

    useEffect(() => {
        setIsLoading(true);

        const options = {
            methos: 'POST',
            body: body,
            headers: token ? { Authorization: `Bearer ${token}` } : {},
        };

        fetch(url, options)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false));
    }, [url, body]);

    return { data, error, isLoading };


}