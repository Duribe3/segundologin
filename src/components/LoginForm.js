import React from 'react'

function LoginForm() {
    return (
      <form >

         <div className="form-inner">
             <h2>Login</h2>
             {/*ERORR*/}
             <div className ="form-group">
               <label htmlfor="name">name:</label>
               <input type="text" name="name"  id="name"></input>

             </div>

             <div className="form-group">
                 <label htmlFor="email">email:</label>
                 <input type="email" name="email" id="email"></input>
             </div>
              <div className="form-group">
               <label htmlFor="password">password:</label>
               <input type="password" name="password" id="password"></input>

              </div>
              <input type="submit" value="LOGIN"></input>
         </div>

      </form>
    )
}

export default LoginForm;
