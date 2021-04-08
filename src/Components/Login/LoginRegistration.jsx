import { React, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import { useHistory } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { User_Information } from '../../App';
import UserRegistration from './Registration';
import UserLogin from './Login';
import firebase from "./firebase/firebaseConfig";
import "firebase/auth";
import 'firebase/database';


//initialize toast 
toast.configure();

const Login = () => {
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();

    //login registration switch
    const [Form_Switch, Set_Form_Switch] = useState(true);

    //add form submitting spinners
    const [Spinner_btn, set_Spinner] = useState(false);

    //set user information on state
    const [User_Info,set_User_Info] = useContext(User_Information);

    //Forget password state
    const [forget_pass,setforget_pass] = useState(false);

    //spinner function
    const Start_Spinner = () => {
        set_Spinner(true);
        setTimeout(() => {
                set_Spinner(false);
        },400);
    }
    //push User information to firebase database
    useEffect(() => {
        firebase.database().ref("User_Info").set(User_Info);
    },[User_Info]);

    //create an account Sign Up
    const Sign_up = data => {
        const { EmailAddress, Password_val,FirstName,LastName} = data;
        firebase.auth().createUserWithEmailAndPassword(EmailAddress, Password_val)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                const notify = () => toast.success("Account Created successfully",{autoClose:3000,hideProgressBar: false,pauseOnHover: true});
                notify(set_Spinner(false));
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                const notify = () => toast.error(errorMessage,{autoClose:3000,hideProgressBar: false,pauseOnHover: true});
                notify(set_Spinner(false));
            });
    };
    //sign in form submission
    const Sign_In = data => {
        const { Email_Address, Password_value,First_Name,Last_Name } = data;
        firebase.auth().signInWithEmailAndPassword(Email_Address, Password_value)
            .then((userCredential) => {
                const notify = () => toast.success("Log in Successfully");
                notify(set_Spinner(false));
                set_User_Info({
                    User_Email : Email_Address ,
                    User_Password : Password_value,
                    User_firstName : First_Name,
                    User_LastName : Last_Name
                });
                history.push('/User-details');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
                const notify = () => toast.error(errorMessage);
                notify(set_Spinner(false));
            });
    }
    //Sign In With Google
    const GoogleSign_In = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
        var user = result.user;
        history.push('/dashboard');
        const {displayName , email } = user ;
            set_User_Info({
                User_Email : email ,
                User_firstName : displayName,
            });
            const notify = () => toast.success("successfully logged in");
            notify();    
    })
    .catch((error) => {
        var errorMessage = error.message;
        var email = error.email;
        const notify = () => toast.error(errorMessage);
        notify();
    });
}
//sign in with facebook
const Fb_Sign_in = () => {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    var user = result.user;
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    const notify = () => toast.error(errorMessage);
    notify();
  });
}
    return (
        <>
            <div className="Login_section container">
                <div className="card Login_body p-4">
                    {
                        Form_Switch ? (
                            <UserLogin handleSubmit={handleSubmit} Sign_In={Sign_In} register={register} errors={errors} Spinner_btn={Spinner_btn} Start_Spinner={Start_Spinner} Set_Form_Switch={Set_Form_Switch} GoogleSign_In={GoogleSign_In} Fb_Sign_in={Fb_Sign_in}/>
                        ) : (
                            <UserRegistration handleSubmit={handleSubmit} Sign_up={Sign_up} register={register} errors={errors} Spinner_btn={Spinner_btn} Start_Spinner={Start_Spinner} Set_Form_Switch={Set_Form_Switch}/>
                        )
                    }
                </div>
            </div>
        </>
    )
}
export default Login;