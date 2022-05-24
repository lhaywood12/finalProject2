import React from 'react'

    export default function App() {
        const [formData, setFormData] = React.useState({
            usersname: "",
            password: "",        
        })

        function handleChange(event) {
            const {name,value, type,} = event.target
            setFormData(prevFormData => ({
                ...prevFormData,
            }))
        }

        function handleSubmit(event) {
            event.preventDefault()
                if(formData.username === formData.password) {
                    console.log ("Signed In")
                } else {
                    console.log("Incorrect Password")
                    return
                }
        }

        return (
            <div className="sign-div">
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        type="username"
                        placeholder="Username"
                        classname="form--input"
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="form--input"
                        name="Password"
                        onChange={handleChange}
                    />

                <div>
                     <button className="sign-button" type="submit">Log In</button>
                 </div>

                 <div>
                     <button className="sign-button" type="submit">Sign Up</button>
                 </div>

            </form>
        </div>
        )
    }