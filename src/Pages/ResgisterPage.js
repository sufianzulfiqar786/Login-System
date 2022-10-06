import React, { useState } from 'react'
import { Row, Col, Button, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Routes, Route, useNavigate, useHistory } from 'react-router-dom';

import '../CSS/LoginSystem.css'
import '../CSS/RadioMaleFemale.css'
import '../CSS/Checkbox.css'
import FontAwesome from 'react-fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import RegistrationPage from '../Pages/RegistrationPage';





const ResgisterPage = (props, args) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    let navigate = useNavigate()

    const [info1, setInfo1] = useState({});

    const [errorData, setErrorData] = useState("0");



    const Login = () => {

        console.log("hello")

            navigate("/loginpage")

        

    };

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


    const Resgister = () => {

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

    };

    return (
        <>

            <div className="container loginSystemBody">




                <div className="row row1stloginSystemBody ">


                    <div className="col-lg-5 col-md-5  col1strow1stloginSystemBody text-light">

                        <img className='mt-lg-1 mt-md-4 mt-4 mb-1' src="https://www.freeiconspng.com/uploads/multimedia-photo-icon-31.png" alt="" />
                        <h1>Login Sytem</h1>
                        <p className='text-justify px-lg-4 px-md-2 px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio temporibus harum eveniet fugit esse alias rem neque placeat quas eum! Fuga eligendi facere tempora animi, amet modi corporis corrupti commodi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque odit perspiciatis facere, mollitia numquam totam id voluptatem quidem minus natus maiores sequi sint vero quasi ipsum! Culpa eos fuga ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt unde aspernatur? Aperiam saepe obcaecati illum dolore.</p>
                        <i className=" iconFontRow fa fa-info-circle   text-light " aria-hidden="true"></i>
                    </div>

                    <div className="col-lg-7 col-md-7  col2ndrow1stloginSystemBody ">

                        <div className="row">

                            <div className="col-lg-12 registerInput mt-lg-0 mt-md-0 mt-3">

                                <h1 className='Register text-center'>Register Here</h1>

                            </div>

                            <div className="col-lg-12 registerInput">

                                <input className='my-2' type="text" name='fullname' onChange={onInputChanged} value={info1.fullname} placeholder='Full Name' />
                                {errorData == 1 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Full name. </div> : ''}


                            </div>

                            <div className="col-lg-12 registerInput">

                                <input className='my-2' type="text" name='username' onChange={onInputChanged} value={info1.username} placeholder='User Name' />
                                {errorData == 2 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Username. </div> : ''}

                            </div>

                            <div className="col-lg-12 registerInput">

                                <input className='my-2' type="email" name='email' onChange={onInputChanged} value={info1.email} placeholder='Email' />
                                {errorData == 3 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Email. </div> : ''}

                            </div>

                            <div className="col-lg-6 registerInput">

                                <input className='my-2' type="password" name='password' onChange={onInputChanged} value={info1.password} placeholder='Password' />
                                {errorData == 4 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Password. </div> : ''}

                            </div>

                            <div className="col-lg-6 registerInput">

                                <input className='my-2' type="password" name='confirmpassword' onChange={onInputChanged} value={info1.confirmpassword} placeholder='Repeat Password' />
                                {errorData == 5 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Confirm Password. </div> : ''}

                            </div>


                            <div className="col-lg-6 pl-2 pr-0">

                                <div className="row Step1Row3Common2Ratio">



                                    <p className="ratioButton mt-md-4 ml-4 mt-4">
                                        <input type="radio" id="featured-1" name="fav_language" value="Male" onChange={onInputChanged} />
                                        <label className="ratioButtonLabel" for="featured-1"><p className="ml-3 mt-1">Male</p></label>

                                        <input type="radio" id="featured-2" name="fav_language" value="Female" onChange={onInputChanged} />
                                        <label className="ratioButtonLabel" for="featured-2"><p className="ml-3 mt-1">Female</p></label>
                                        {errorData == 6 ? <div className="errorMessage " style={{ color: "red" }}> Please Select Gender. </div> : ''}

                                    </p>


                                </div>
                                {/* {errorData == 6 ? <div className="errorMessage">Please enter Gender.</div> : ''} */}

                            </div>


                            <div className="col-lg-6 ">

                                <div className="row mt-lg-4 mb-lg-2 mb-md-5 mb-4">

                                    <div className="col-2">

                                        <input className='CheckboxInput mx-0 ' type="checkbox" id="featured-6" name="pleaseCheckbox" onChange={onInputChanged} value={info1.pleaseCheckbox} />
                                        <label className='Checkboxlabel mb-3 mr-0' for="featured-6" > </label>

                                    </div>

                                    <div className="col-10 pl-0 pr-0">
                                        <div className="row">
                                            <span className='PleaseAcceptCheckbox  ' > Please Accept <span className='termsAndConditionsCheckbox' onClick={toggle}> terms and conditions </span> ? </span>

                                        </div>
                                    </div>
                                    {errorData == 7 ? <div className="errorMessage ml-3" style={{ color: "red" }}> Please accept Terms & Conditions. </div> : ''}

                                </div>


                            </div>


                        </div>


                        <div className="row mb-lg-2 mb-md-2 mb-4">

                            <div className="col-lg-12 d-flex align-items-center justify-content-center">

                                <button className='loginSytemBtn mx-3' onClick={Resgister} >Register</button>
                                <button className='loginSytemBtn mx-3' onClick={Login}>Login</button>

                            </div>

                        </div>


                    </div>

                </div>

                <Modal isOpen={modal} toggle={toggle} {...args}>

                    <ModalHeader toggle={toggle}>Terms & Conditions:</ModalHeader>

                    <ModalBody>

                        {/* <b>First Name:</b> <p>{props.user.firstname || ""}</p><br/>
<b>Last Name:</b> <p>{props.user.lastname || ""}</p><br/>
<b>Email:</b> <p>{props.user.email || ""}</p><br/>
<b>Telephone:</b> <p>{props.user.phone || ""}</p><br/>
<b>Age:</b> <p>{props.user.age || ""}</p><br/>
<b>Gender:</b> <p>{props.user.fav_language || ""}</p><br/>
<b>Address:</b> <p>{props.user.address || ""}</p><br/>
<b>City:</b> <p>{props.user.city || ""}</p><br/>
<b>Postcode:</b> <p>{props.user.postcode || ""}</p><br/>
<b>Country:</b> <p>{props.user.countryData || ""}</p><br/>

<b>Message:</b> <p>{props.user.message || ""}</p><br/>
<b>Accept terms & conditions:</b> <p>{props.user.pleaseCheckbox == true ? "Yes" : "No" }</p><br/> */}

                        <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur rerum, neque, fuga architecto provident iste aut dicta ratione in sunt optio itaque. Maxime expedita cum veritatis similique optio assumenda pariatur, dolorem ut fugiat sequi at labore vitae tenetur incidunt iste necessitatibus eum distinctio? Tempore excepturi doloremque nesciunt cupiditate tempora est eaque vero ipsa quod culpa assumenda veritatis ullam facere temporibus, dolore beatae sint fugiat illum molestias, voluptate ipsam repudiandae quae impedit. Esse odio quaerat, amet minima odit unde nam, fugit magnam incidunt omnis iure libero aspernatur ut molestiae vitae. At eaque, laudantium sed similique amet tenetur dolore minus. Odio exercitationem voluptates debitis praesentium libero consequatur eaque, rem vitae itaque natus, officia ad laboriosam? Saepe enim quaerat, harum consectetur accusantium aliquam.</p>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>
                            Privacy & Policy
                        </Button>{' '}
                        <Button color="secondary" onClick={toggle}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>


            </div>

        </>
    )
}

export default ResgisterPage
