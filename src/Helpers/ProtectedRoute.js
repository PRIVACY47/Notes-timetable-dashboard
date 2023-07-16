import {Navigate} from "react-router-dom"

const Protectedroute = ({children}) => {


    let token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" replace/>
    }

    return children
}

export default Protectedroute