import React, { useContext, useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/database';

  const User_Details = () => {
    const [User_Info,set_User_Info] = useState();
    //get user information from firebase databse
    useEffect(() => {
      firebase.database().ref("User_Info").on("value",get_data,error_data);
    },[]);
    const get_data = (get_data) => {
      set_User_Info(get_data.val());
    }
    const error_data = (error_data) => {
      console.log(error_data);
    }
    return (
      <>      
      <div className="Profile_info container-fluid mt-3">
          <div className="row">
              {User_Info && <div className="col-12 col-lg-4 card p-3 mx-auto d-flex align-item-center justify-content-center">
                  <h5>First Name : {User_Info.User_firstName}</h5>
                  <h5>Last Name : {User_Info.User_LastName}</h5>
                  <h5>Email Addres : {User_Info.User_Email}</h5>
              </div>}
          </div>       
      </div>
      </>
    );
  }
export default User_Details;  