import Card from "./card"
import { useState } from "react"

function Main() {

    const [pet, setPet] = useState({
        "img": "https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg",
        "name": "Simba",
        "gender": "masculine"
        })

    function nextPet(e) {
        const response = fetch("https://petinder-production.up.railway.app/pets")
            .then(result=>result.json())
            .then(data=>{
                setPet(data)
                console.log (pet)
            });
    }

    return (
        <main>
            <Card />
            <button onClick={nextPet}>❌</button>
            <button onClick={nextPet}>💚</button>
        </main>
    )
}

export default Main