import React, { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Home.css'


const Home = () => {

  // let navigateAfter5mint = useNavigate()
  let navigateLogout = useNavigate()
  let navigate1 = useNavigate()

  
  const userinfo = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        if (!userinfo) {
            navigate1("/loginPage")
        }
    }, [userinfo])




     // useEffect(() => {
  //   setTimeout(() => {
  //     // navigateAfter5mint("/")
  //   }, 5000);
  // })


  const logout = () => {
    console.log("Hello")
    localStorage.removeItem("user")
    navigateLogout("/")
}


  return (
    <>


      <div className="FullBodySucess">

        <div className="row">

          <div className="col-12 mb-3 d-flex align-items-center justify-content-center">

            <svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
              <g stroke="currentColor" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <path class="circle" d="M13 1C6.372583 1 1 6.372583 1 13s5.372583 12 12 12 12-5.372583 12-12S19.627417 1 13 1z" />
                <path class="tick" d="M6.5 13.5L10 17 l8.808621-8.308621" />
              </g>
            </svg>

          </div>

          <div className="col-12 d-flex align-items-center justify-content-center text-center">

            <h1>Your are Successfully Login </h1>

          </div>
          <div className="col-12 d-flex align-items-center justify-content-center text-center">

          <h4>{userinfo.email}</h4>

          </div>

          <div className="col-12 mt-3 d-flex align-items-center justify-content-center text-center">

<button className='loginSytemBtn' onClick={logout}>Log out</button>

</div>

        </div>








      </div>



    </>
  )
}

export default Home
