import { useState, useEffect } from "react";

export default function useFetch(query, options) {
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)


    const fetchData = async (query = 'Wizeline', options) => {

        const BASE_URL = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDl_unUFnfJYU-Sqg2AdBFWxP7fhLUyItM&type=video&part=snippet&maxResults=15&q=${query}`

        try {
            const res = await fetch(BASE_URL, options)
            const jsonResult = await res.json()
            setResult(jsonResult)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData(query, options)
    }, [options, query])

    return { loading, result, error, fetchData }
}