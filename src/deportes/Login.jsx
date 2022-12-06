import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
//import styles from "./styles.module.css";
//useNavigate
export const Login = () => {
    const [body, setBody] = useState({ correo: '', password: '' })
    const navigate  = useNavigate()
   // const classes = useStyles()

    const inputChange = ({ target }) => {
        const { name, value } = target
        setBody({
            ...body,
            [name]: value
        })
    }


    //********** */
       const onSubmit = async (e) => {
        e.preventDefault();
        try{

            let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                    
                }
              };
            const URI = 'http://localhost:8001/usuarios/login'
        console.log("paso por aca")
        const resp = await axios.post(URI, body, axiosConfig );
        
        let s = JSON.stringify(resp?.data);

            let union1 = s.split(":")[2];
  
             let r = union1.substring(1, union1.length-3);
                  console.log('Este es el JWT:',r);
                 localStorage.setItem('auth',r)
                  navigate('/sheventos')
                    window.location = '/sheventos'

        }
        catch(error)  {
                navigate('/login')
               window.location = '/login'
                console.log(error)
                console.log("Paso por abajo")
            }
        }
 

	return (
		
        <div className="login-form">
        <h3>Ingrese a su cuenta</h3>
         <form >
            <input
               
                 autoFocus
                 type= "text"
                 placeholder = "Correo"
                 value= {body.correo}
                 onChange= { inputChange }
                 name= "correo"
             />
             
             
             <input type="password"
                 placeholder = "Password"
                 value={body.password}
                 onChange={inputChange}
                 name="password"
                 
             />
            
             <button onClick={onSubmit} type="submit" color="#062af8" >
             
            </button>
             <Link to="/create" >
             <button type="submit" >Sing Up</button></Link>
         </form>
         
     </div>

	);
};

export default Login;