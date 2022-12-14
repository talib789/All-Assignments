import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const user = {
            email,
            password,
            name
        }
        try {
            let data = await fetch('http://localhost:3008/createUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            let res = await data.json();

            if(res.message){
                alert(res.message)
            }
            else{
                alert("User created successfully")
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleRegister}>
                <label>Name:<input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} /></label>
                <label>Email:<input type="text" name="username" value={email} onChange={(e) => { setEmail(e.target.value) }} /></label>
                <label>Password:<input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} /></label>
                <button type="submit">Register</button>
            </form>
            <Link to='/login'>Already have an Account</Link>
        </div>
    )
}
export default Register