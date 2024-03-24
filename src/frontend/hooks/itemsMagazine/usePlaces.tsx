import { useEffect, useState } from "react";


export const usePlaces = () => {
    const [places, setPlaces] = useState<IDbResponseTypes[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchPlaces = async (): Promise<void> => {
        try {
            setLoading(true);  // Start by setting loading to true each time fetchItems is called.
            const response = await fetch('/api/place', {
                method: "get",
                cache: "no-cache",
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            if (response.ok) {
                const items = await response.json()
                setPlaces(items);
            }
        } catch (err: any) {
            setError(err.message || "Error fetching items");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPlaces();
    }, []);


    const refetch = () => {
        setError(null);
        fetchPlaces();
    };

    return { places, loading, error, refetch };
};
