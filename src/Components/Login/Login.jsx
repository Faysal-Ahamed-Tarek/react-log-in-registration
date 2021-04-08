import React from 'react';
import './Login.css';
import { Spinner } from 'react-bootstrap';

const UserLogin = (props) => {
    const {handleSubmit,Sign_In,register,errors,Spinner_btn,Start_Spinner,Set_Form_Switch,GoogleSign_In,Fb_Sign_in} = props;
    
    return(
        <div className="Login_form">
            <h2 className="text-center pt-2">Sign In</h2>
            <form action='#' onSubmit={handleSubmit(Sign_In)}>
                {/* Name feild area */}
                <div className="Name_area row pt-2">
                    <div className="col">
                        <label>First Name</label>
                        <input type="text" className="form-control" name="First_Name" ref={register({ required: true })} />
                        {
                            errors.First_Name && <p style={{ color: "red" }}>Name Is Required</p>
                        }
                    </div>
                    <div className="col">
                        <label>Last Name</label>
                        <input type="text" className="form-control " name="Last_Name" ref={register({ required: true })} />
                        {
                            errors.Last_Name && <p style={{ color: "red" }}>Name Is Required</p>
                        }
                    </div>
                </div>
                {/*email feild area*/}
                <div className="Email_field pt-2">
                    <label>Email</label>
                    <input type="email" className="form-control" name="Email_Address" ref={register({ required: true })} />
                </div>
                {
                    errors.Email_Address && <p style={{ color: "red" }}>Email Is Required</p>
                }
                {/*password feild area*/}
                <div className="password-feild pt-2">
                    <label>Password</label>
                    <input type="password" className="form-control" name="Password_value" ref={register({ required: true })} />
                </div>
                {
                    errors.Password_value && <p style={{ color: "red" }}>Password Is Required</p>
                }
                {
                    Spinner_btn ? (
                        <button type="submit" className="form-control Custom_button mt-3 p-0 shadow-none" >
                            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />&nbsp; Sign In</button>
                    ):(
                        <button type="submit" className="form-control Custom_button mt-3 p-0 shadow-none" onClick={Start_Spinner}> Sign In</button>
                    )
                }
            </form>
            <div className="row">
            <p onClick={() => Set_Form_Switch(false)} className="pt-2 pt-lg-3 col-lg-6 col-sm-12 text-center text-lg-left" style={{ fontWeight: 600, cursor: "pointer" }}>Forget Password</p>
            <p onClick={() => Set_Form_Switch(false)} className="pt-2 pt-lg-3  col-lg-6 col-sm-12 text-center text-lg-right" style={{ fontWeight: 600, cursor: "pointer" }}>Create An Account ? Sign Up</p>
            </div>
            <div className="row social_area p-3">
                <div  className="col-lg-4 col-sm-12 mb-2">
                <button className="social_btn google_signIn" onClick={GoogleSign_In}><i class="fa fa-google" aria-hidden="true"></i>&nbsp; google</button>
                </div>
                <div className="col-lg-4 col-sm-12 mb-2">
                <button className="social_btn fb_signin" onClick={Fb_Sign_in}><i class="fa fa-facebook" aria-hidden="true"></i>&nbsp; facebook</button>
                </div>
                <div className="col-lg-4 col-sm-12 mb-2">
                <button className="social_btn twitter_signIn" onClick={Fb_Sign_in}><i class="fa fa-facebook" aria-hidden="true"></i>&nbsp; twitter</button>
                </div>
            </div>    
        </div>
    )
}
export default UserLogin;