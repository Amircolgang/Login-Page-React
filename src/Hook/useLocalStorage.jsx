import { useState, useEffect } from 'react'

let getEmailLOcalStorage = (key) => {
    let localData = localStorage.getItem(key)
    if (localData) {
        return localData
    }
    return " "
}


export default function useLocalStorage(key , val) {


    const [email, setEmail] = useState(() => {
        return getEmailLOcalStorage(key)
    })
    useEffect(() => {
        localStorage.setItem(key, email)
    }, [email])


    return [email , setEmail]
}
