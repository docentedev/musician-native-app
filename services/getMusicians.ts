import { useEffect, useState } from "react";

const getMusicians = async () => {
    const response = await fetch('https://musician-api-production.up.railway.app/api/v1/musicians?page=1&size=100');
    const data = await response.json();
    return data;
}

export const useGetMusicians = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        setLoading(true)
        getMusicians().then(response => {
            setData(response.rows)
            setLoading(false)
        }).catch(_error => {
            setLoading(false)
        })
    }, []);
    return [data, loading]
}

export default getMusicians

