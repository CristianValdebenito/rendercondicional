import react, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmapass, setConfirmapass] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        if(username.length>1 && apellido.length>1 && email.length>4 && password.length >7 && confirmapass.length>7 && password===confirmapass){
        const newUser = { username, apellido, email, password, confirmapass };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
        }
        else{
            console.log("No puede enviar el formulario")
        }
        
    };
    
    return (
        <form onSubmit={ createUser }>
            {
            hasBeenSubmitted ? 
            <h2>"Gracias por enviar el formulario!"</h2>: 
            <h2>"Bienvenido, por favor envie el formulario!"</h2>
            }
            <h4>* Todos los campos son obligatorios</h4>
	        <div>
                <label>*Nombre: </label> 
                <input type="text"  onChange={ (e) => setUsername(e.target.value)}/>  
                {
                    username.length===1?
                    <p style={{color:'red'}}>{"El nombre debe tener minimo 2 caracteres"}</p>:
                    username.length>1?
                    <p>{""} </p>:
                    <p>{""} </p>   
                }
            </div>
            <div>
                <label>*Apellido: </label> 
                <input type="text"  onChange={ (e) => setApellido(e.target.value)}/>  
                {
                    apellido.length===1?
                    <p style={{color:'red'}}>{"El apellido debe tener minimo 2 caracteres"}</p>:
                    apellido.length>1?
                    <p>{""} </p>:
                    <p>{""} </p>   
                }
            </div>

            <div>
                <label>*Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                {
                    email.length>0 && email.length<5?
                    <p style={{color:'red'}}>{"El correo debe tener minimo 5 caracteres"}</p>:
                    email.length>4?
                    <p>{""} </p>:
                    <p>{""} </p>   
                }
            </div>
            <div>
                <label>*Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                {
                    password.length>0 && password.length<8?
                    <p style={{color:'red'}}>{"La password debe tener minimo 8 caracteres"}</p>:
                    password.length>7?
                    <p>{""} </p>:
                    <p>{""} </p>   
                }
            </div>
            <div>
                <label>*Confirma Password: </label>
                <input type="text" onChange={ (e) => setConfirmapass(e.target.value) } />
                {
                    confirmapass.length>0 && confirmapass.length<8 && confirmapass !== password?
                    <p style={{color:'red'}}>{"La confirmacion no coincide con la password"}</p>:
                    confirmapass.length>7?
                    <p>{""} </p>:
                    <p>{""} </p>
                }
            </div>
            <input type="submit" value="Create User"/>
        </form>
    );
};
    
export default UserForm;