1st Commit is just Design.




Validation:


<!-- const [info1, setInfo1] = useState({}); -->

<!-- const [errorData, setErrorData] = useState("0"); -->


<!-- <input className='my-2' type="text" name='fullname' onChange={onInputChanged} value={info1.fullname} placeholder='Full Name' />

{errorData == 1 ? <div className="errorMessage" style={{ color: "red" }}> Please enter Full name. </div> : ''}

<button className='loginSytemBtn mx-3' onClick={Resgister} >Register</button> -->





 <!-- const onInputChanged = (event) => {
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
    }; -->



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