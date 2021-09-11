import {React, useState} from 'react';
import style from "../css_modules/firstpage.module.css"
import house from "../Images/houseandvi.png"
import galka from "../Images/galka.png"
import {BarLoader} from 'react-spinners'
import LoginWithGoogle from "./LoginWithGoogle";
import {Redirect} from "react-router-dom";


const FirstPage = () => {
    let[loginPage, setLoginPage] = useState(false);

    function goToLoginPage() {
        setLoginPage(true);
    }

    return (
        loginPage ? <LoginWithGoogle/> :
        <div className="container-fluid justify-content-center">
            <div className={style.app}>
                <img className={`col-sm-12  ${style.house}`} src={house} alt="house" onClick={goToLoginPage}/>
                {/*<img className={`col-sm-12 ml-5 ${style.galochka}`} src={galka} alt="galochka"/>*/}
            </div>
            {/* <div className="d-flex, align-items-center, justify-content-center col-12">*/}

            <div className={style.app}>
                <p className={`${style.name}`}>Karma Home</p>
            </div>
            <div className={style.app}>
                <span className="sr-only mt-2 mb-5">Loading...</span><br/>
                <BarLoader width={"200px"} color={"orange"}  loading/>
            </div>

        </div>
    );
};

export default FirstPage;