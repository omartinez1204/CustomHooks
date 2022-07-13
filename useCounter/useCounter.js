import { useState } from "react"

export const useCounter = (initialValue = 1) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        setCounter(counter + value)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    const decrement = () => {
        if (counter === 1) return
        setCounter(counter - 1)
    }

    return {
        counter,
        increment, reset, decrement
    }
}
