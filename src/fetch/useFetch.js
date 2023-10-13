import { useEffect, useState } from "react";

export function useFetch(url){
    const[data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setData(data))
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }, []);

    // useEffect(() => {
    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((data) => setData(data));
    // }, []);

    return {data};
}