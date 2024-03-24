import { useEffect, useState } from "react";

export const useShelves = () => {
    const [shelves, setShelves] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchShelves = async (): Promise<void> => {
        try {
            setLoading(true);
            const response = await fetch('/api/shelf', {
                method: "get",
                cache: "no-cache",
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            if (response.ok) {
                const shelves = await response.json()
                setShelves(shelves);
            }
        } catch (err: any) {
            setError(err.message || "Error fetching shelf categories");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchShelves();
    }, []);

    const refetch = () => {
        setError(null);
        fetchShelves();
    };

    return { shelves, loading, error, refetch };
}
