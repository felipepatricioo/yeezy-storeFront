import axios from "axios";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


export default function Profile() {
    const navigate = new useNavigate();

    const token = localStorage.getItem('token');

    const [ user, setUser ] = useState([])

    const getUser = async () => {

        const config = {
            headers: { Authorization: `Bearer ${token}` },
          };

        await axios.get("/auth/profile", config).then((response) => {
            setUser(response.data);
          });
    }

    useEffect(() => {
        getUser()
    }, [])

    function logOut () {
        localStorage.removeItem('token');
        navigate("/")
    }

    return(
        <>
        <p>
            {user.name}
        </p>
        <p>
            {user.email}
        </p>
        <button onClick={logOut}>
            LOGGOFF
        </button>
        </>
    )
}