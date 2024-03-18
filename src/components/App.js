import React, { useState, useEffect } from 'react'

function App() {
    const [dogImage, setDogImage] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then(image => {
            setDogImage(image.message)
            setIsLoading(false)
            })
    }, [])

    return (
        <div>
        {isLoading ? <p>Loading...</p> : <img src={dogImage} alt='A Random Dog' />}
        </div>
    )
}

export default App