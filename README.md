    1st Commit is just Design.




     #           Validation:


                const [info1, setInfo1] = useState({});

                const [errorData, setErrorData] = useState("0");


                <input className='my-2' type="text" name='fullname' onChange={onInputChanged} value={info1.fullname} placeholder='Full Name' />

                {errorData == 1 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Full name. </div> : ''}

                <button className='loginSytemBtn mx-3' onClick={Resgister} >Register</button>





                const onInputChanged = (event) => {
                        const targetName = event.target.name;

                        if (targetName == "pleaseCheckbox") {
                            const targetValue = event.target.checked;
                            setInfo1((info1) => ({
                                ...info1,
                                [targetName]: targetValue
                            }));
                        } else {
                            const targetValue = event.target.value;
                            setInfo1((info1) => ({
                                ...info1,
                                [targetName]: targetValue
                            }));
                        }


                        console.log(info1)
                    };



                <!-- const Resgister = () => {

                    console.log(info1)

                    if (!info1.fullname) setErrorData(1);
                    else if (!info1.username) setErrorData(2);
                    else if (!info1.email) setErrorData(3);
                    else if (!info1.password) setErrorData(4);
                    else if (!info1.confirmpassword) setErrorData(5);
                    else if (!info1.fav_language) setErrorData(6);
                    else if (!info1.pleaseCheckbox ) setErrorData(7);
                    else {
                        setErrorData('');
                        console.log("hello")

                        navigate("/loginpage")
                    }

                }; -->





#         Password & Email Validation:

                else if (!info1.email.match(/[@]/)) {
                    setErrorData(15)
                    emailReference.current.focus()
                }
            
            
                // else if (!info1.password) {
                //     setErrorData(4)
                //     passwordReference.current.focus()
                // }

                // else if (!info1.password.match(/[A-Z]/)) {
                //     setErrorData(9)
                //     passwordReference.current.focus()
                // }

                // else if (!info1.password.match(/[a-z]/)) {
                //     setErrorData(10)
                //     passwordReference.current.focus()
                // }

                // else if (!info1.password.match(/[0-9]/)) {
                //     setErrorData(11)
                //     passwordReference.current.focus()
                // }

                // else if (info1.password.length < 8) {
                //     setErrorData(16)
                //     passwordReference.current.focus()
                // }



                // else if (!info1.confirmpassword) {
                //     setErrorData(5)
                //     confirmpasswordReference.current.focus()
                // }


                // else if (info1.password !== info1.confirmpassword) {
                //     console.log("Confirm")
                //     setErrorData(8)
                //     passwordReference.current.focus()
                // }







    #            Add Focus on missing input field by useRef:


                import React, { useState, useRef } from 'react'

                const fullnameReference = useRef(null);
                const usernameReference = useRef(null);


                const Resgister = () => {

                    console.log(info1)

                    if (!info1.fullname) {
                        setErrorData(1)
                        fullnameReference.current.focus()
                    }
                    else if (!info1.username) {
                        setErrorData(2)
                        usernameReference.current.focus()
                    }
                    else if (!info1.email) {
                        setErrorData(3)
                        emailReference.current.focus()
                    }
                    else if (!info1.password) {
                        setErrorData(4)
                        passwordReference.current.focus()
                    }
                    else if (!info1.confirmpassword) {
                        setErrorData(5)
                        confirmpasswordReference.current.focus()
                    }
                    else if (!info1.fav_language) {
                        setErrorData(6)
                        fav_languageReference.current.focus()
                    }
                    else if (!info1.pleaseCheckbox ) {
                    setErrorData(7)
                    pleaseCheckboxReference.current.focus()
                }
                    else {
                        setErrorData('');
                        console.log("hello")

                        // navigate("/loginpage")
                    }

                };




                <input className='my-2' type="text" name='fullname' onChange={onInputChanged} value={info1.fullname} placeholder='Full Name' ref={fullnameReference} />
                                            
                <input className='my-2' type="text" name='username' onChange={onInputChanged} value={info1.username} placeholder='User Name' ref={usernameReference}/>
                               




    #       Hit Register Api:


            *  {   "role-id" : 2  } ---> this is given by backend Develop that navigate the userside, admin side, instructor side (teacher side)

            *  {    "first_name": info1.fullname   }  ---> first_name is send by backend developer and info1.fullname is value of form ( info1 is useState and fullname is name of input tag)


                const data = {"role_id": 2, "first_name": info1.fullname, "last_name": info1.username, "email": info1.email, "phone_number": info1.number, "gender": info1.fav_language };
                    const responsr = axios
                        .post('https://admin.dhikrfikr.com/public/api/user_signup', data)
                        .then((response) => {
                            console.log(response);
                            // event.target.reset();
                        })
                        .catch((error) => {
                            console.log(error);
                        })






     #           Hit Register Api:


                  const data = { "email": info1.loginemail, "password": info1.loginpassword };
                  const responsr = axios

                .post('https://admin.dhikrfikr.com/public/api/user_login', data)
                .then((response) => {
                    console.log(response.data.user);
                    // event.target.reset();
                    if (response.data.token) {
                        localStorage.setItem("user",JSON.stringify( response.data.user))
                        navigate("/Home")
                        // navigate("/Home")  after login move to where
                    }
                    else {
                        // alert(response.data.message + " Hello")
                        setLoginError(response.data.message)
                    }
                })
                .catch((error) => {
                    console.log(error);
                })



     #           After login then not move to Login Page:

        *       if user have information then move to next page otherwise stay in loginpage

                const userinfo = localStorage.getItem("user")
    
                useEffect(() => {
                    if (userinfo) {
                        navigate1("/home")
                    }
                }, [userinfo])




        *       if user have no information then move to login page otherwise stay on same page 


                const userinfo = JSON.parse(localStorage.getItem("user"))

                                useEffect(() => {
                        if (!userinfo) {
                            navigate1("/loginPage")
                        }
                    }, [userinfo])





     #               Logout:


                    <button className='loginSytemBtn' onClick={logout}>Log out</button>


                      const logout = () => {
                     console.log("Hello")
                     localStorage.removeItem("user")
                     navigateLogout("/")
                     }



                     
    #                 After API Response ( when user is login then get data from Response API)


                     const userinfo = JSON.parse(localStorage.getItem("user"))

                     <h4>{userinfo.email}</h4>


