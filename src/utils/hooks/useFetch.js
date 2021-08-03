import { useState, useEffect } from "react";

export default function useFetch(query, options) {
    const [loading, setLoading] = useState(true)
    const [result, setResult] = useState(null)
    const [error, setError] = useState(null)
    const BASE_URL = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyA8thwUb9CbtC2zikp2iA6HO_WshBcTtKE&type=video&part=snippet&maxResults=15&q=${query}`

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch(BASE_URL, options)
                const jsonResult = await res.json()
                setResult(jsonResult)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        })()

    }, [options, query, BASE_URL])

    return { loading, result, error }
}