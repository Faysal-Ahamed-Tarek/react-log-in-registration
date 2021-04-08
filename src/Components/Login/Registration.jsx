import React from 'react';
import './Login.css';
import { Spinner } from 'react-bootstrap';

const UserRegistration = (props) => {
    const {handleSubmit,Sign_up,register,errors,Spinner_btn,Start_Spinner,Set_Form_Switch} = props;
    
    return(
        <div className="Sign_up">
            <form action='#' onSubmit={handleSubmit(Sign_up)}>
            <h2 className="text-center">Sign Up</h2>
            {/* Name feild area */}
            <div className="Name_area row pt-2">
            <div className="col">
                <label>First Name</label>
                <input type="text" className="form-control" name="FirstName" ref={register({ required: true })} />
                {
                    errors.FirstName && <p style={{ color: "red" }}>Name Is Required</p>
                }
            </div>
            <div className="col">
                <label>Last Name</label>
                <input type="text" className="form-control " name="LastName" ref={register({ required: true })} />
                {
                    errors.LastName && <p style={{ color: "red" }}>Name Is Required</p>
                }
            </div>
            </div>
            {/*email feild area*/}
            <div className="Email_field pt-2">
            <label>Email</label>
            <input type="email" className="form-control" name="EmailAddress" ref={register({ required: true })} />
            {
                errors.EmailAddress && <p style={{ color: "red" }}>Email Is Required</p>
            }
            </div>
            {/* age & Number feild area */}
            <div className="age_Number row pt-2">
            <div className="col">
                <label>Age</label>
                <input type="number" className="form-control" name="age" ref={register({ required: true })} />
                {
                    errors.age && <p style={{ color: "red" }}>age Is Required</p>
                }
            </div>
            <div className="col">
                <label>Phone Number</label>
                <input type="number" className="form-control " name="PhoneNumber" ref={register({ required: true })} />
                {
                    errors.PhoneNumber && <p style={{ color: "red" }}>Number Is Required</p>
                }
            </div>
            </div>
            {/*password feild area*/}
            <div className="password-feild pt-2">
            <label>Password</label>
            <input type="password" className="form-control" name="Password_val" ref={register({ required: true })} />
            {
                errors.Password && <p style={{ color: "red" }}>Password Is Required</p>
            }
            </div>
            {/* confirm password feild area*/}
            <div className="password-feild pt-2">
            <label>Confirm Password</label>
            <input type="password" className="form-control" name="ConfirmPassword" ref={register({ required: true })} />
            {
                errors.ConfirmPassword && <p style={{ color: "red" }}>Password Is Required</p>
            }
            </div>
            {
            Spinner_btn ? (
                <button type="submit" className="form-control Custom_button mt-3 p-0 shadow-none" >
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />&nbsp; Sign Up</button>
            ):(
                <button type="submit" className="form-control Custom_button mt-3 p-0 shadow-none" onClick={Start_Spinner}> Sign Up</button>
            )
            }

            </form>
            <p onClick={() => Set_Form_Switch(true)} className="pt-3 text-center" style={{ fontWeight: 600, cursor: "pointer" }}>Do You Have An Account ? Sign In</p>
                            </div>
    )
}
export default UserRegistration;