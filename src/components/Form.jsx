import React , { useState } from 'react'
import {useForm} from 'react-hook-form'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


  function Form(){
      const {register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange'
      });
      const handleRegistration = (data) => console.log(data)
      const handleError = (errors) => {};
      const registerOptions = {
        name: {required: "Name is Required",
        pattern:{
         value: /[A-Za-z]/,
         message:'error enter a valid name'
        }
      },
        email: {required: "Email is Required",
        pattern: {
          value: /^\S+@\S+\.\S+$/,
          message: "invalid email."
        }
      },
        password: {required: "Password is Required", 
        minLength: {
          value: 8,
          message: "password must have atleast 8 characters"
        }
      }
      }

      const[passwordShown, setPasswordShown] = useState(false);
      const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

      return(
    <div className='container'>
    <div className='steps'>
      <h5>Step 1 of 3 ...</h5>
    </div>
      <h1>Let's set up your account</h1>
      <h3 className='signin'>Already have an account? <a href="/">Sign in</a></h3>
      <form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <div>
        <input name="name" type="text" placeholder='Your Name' {...register('name',  registerOptions.name )} />
        {errors?.name && <p>{errors.name.message}</p>}
      </div>
      <div>
        <input type="email" name="email" placeholder='Email address' {...register('email', registerOptions.email)} />
        {errors?.email && <p>{errors.email.message}</p>}
      </div>
      <div>
        <select name="options" >
          <option value="" disabled selected> I would describe my user type as</option>
          <option value="a">a Developer</option>
          <option value="a">a student</option>
          <option value="a">a employer </option>
          <option value="a">a emplopyee</option>

        </select>
      </div>
      <div>
        <input type={passwordShown ? "text" : "password"} name="password"  placeholder='Password'{...register('password', registerOptions.password)} />
        <span className='eye'> <RemoveRedEyeIcon onClick={togglePassword} /> </span>
        {errors?.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">next</button>

      <span>  By clicking the 'Next' button, you agree to creating a free acount, and to the <a href=".">Terms of service </a> and <a href="/">Privacy Policy.</a></span>
    </form>
    </div>
  )
}


export default Form;