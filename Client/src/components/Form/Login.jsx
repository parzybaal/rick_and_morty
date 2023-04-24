import {useState} from "react"
import validation from "../Validation/validation"

const Form = ({login}) => {

    const [error, setError] = useState({})

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        const validateErrors = validation({
            ...userData,
            [event.target.name]: event.target.value
        })
        setError(validateErrors)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }




    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label  htmlFor="email">Email: </label>
                <input value={userData.email} onChange={handleChange} name="email" type="text" />
                {error.email && <p style={{color: "red"}}>{error.email}</p>}

                <label  htmlFor="password">Password: </label>
                <input value={userData.password} onChange={handleChange} name="password" type="text" />
                {error.password && <p style={{color: "red"}} >{error.password}</p>}

                <button>Submit</button>

            </form>
        </div>
    )
}

export default Form;