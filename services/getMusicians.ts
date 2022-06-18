import { useEffect, useState } from "react"
import { musicianApiPrefix } from "../config/apis"

const getMusicians = async () => {
    const response = await fetch(musicianApiPrefix('/musicians?page=1&size=100'))
    const data = await response.json()
    return data
}

export const useGetMusicians = () => {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<any[]>([])
    useEffect(() => {
        setLoading(true)
        getMusicians().then((response: { rows: any[] }) => {
            setData(response.rows)
            setLoading(false)
        }).catch(_error => {
            setLoading(false)
        })
    }, [])
    return [data, loading]
}

export default getMusicians

