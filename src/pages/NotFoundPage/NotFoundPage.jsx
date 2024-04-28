import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (
        <div>
            <p>Oops...Not Found Page</p>
            <p> Please visit our <Link to="/">Home Page </Link> </p>
            </div>
    )
    
}