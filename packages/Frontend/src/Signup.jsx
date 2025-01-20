import React, { useState } from 'react';

export default function Signup(){
    const [login, setLogin] = useState(true); 
    return(
        <div className='container'>
            <div className='form-container'>
                <div className='buttons'>
                    <button className={login ? 'active' : ''} onClick={() => setLogin(true)}>Login</button> 
                    <button className={!login ? 'active' : ''} onClick={() => setLogin(false)}>Signup</button>
                </div>
                
                
                {login?
                (<div className ='name'>
                    <h1>Login</h1>
                    <input type='text' placeholder='Name'/>
                    <input type='text' placeholder='Email'/>
                    <input type='text' placeholder='Address'/>

                    </div>
                    ):(
                        <div className='name'>
                            <h1>Signup</h1>
                            <input type='text' placeholder='Name'/>
                            <input type='text' placeholder='Email'/>
                            <input type='text' placeholder='password'/>
                        </div>
                    )}
                    

            </div>
        </div>
    )
}