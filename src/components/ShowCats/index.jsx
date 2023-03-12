import { useState, useEffect } from "react";
import './index.css'

export const ShowCats = () =>{
    const [cats, setCats] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
    const fetchData = async() =>{
        const res = await fetch('https://cats.petiteweb.dev/api/single/RobbyIng/show')
        if (res.ok) {
            const data = await res.json()
            return setCats(data)
        }
        setError(true)
    }
    fetchData()
}, [])
 
 if (error) return <div>Alarm!</div>

 const generateCatCard=(cat) =>
        <div key={cat.id} className="card mb-2">
            <img
            src={cat.image}
            className="card-img-top"
            alt="фоточка котенка"
            />
            <div className="card-body">
                <h5 className="card-title">{cat.name}</h5>
                <p className="card-text">{cat.description}</p>
                <div className="btn-cont">
                    <button type="button" data-action="open" className="btn btn-primary">Open</button>
                    <button type="button" data-action="edit" className="btn btn-warning">Edit</button>
                    <button type="button" data-action="delete" className="btn btn-danger">Delete</button>
                </div>
            </div>
        </div> 

return(
    <form className="d-flex justify-content-center mb-5 catWrapper" >
        {cats.map(cat => generateCatCard(cat))}
    </form>   
)
}