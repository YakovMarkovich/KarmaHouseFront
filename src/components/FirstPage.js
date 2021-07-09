import React from 'react';
import style from "../css_modules/firstpage.module.css"
import house from "../Images/house-icon.png"
import galka from "../Images/galka.png"
import {BarLoader} from 'react-spinners'

const FirstPage = () => {
    return (
        <div className="container-fluid">
            <div className={style.appimages}>
                <img className={`col-sm-12 ml-5  ${style.house}`} src='https://d1icd6shlvmxi6.cloudfront.net/gsc/6EYT19/0d/ef/3a/0def3ab8261b46939af4b92b84f5b782/images/mobile/u303.png?token=ef108c4d51c3bf8a67538996c3795031fda7cf2a96054e42793eca5f5507319e' alt="house"/>
                {/*<img className={`col-sm-12 ml-5 ${style.galochka}`} src={galka} alt="galochka"/>*/}
            </div>
            {/* <div className="d-flex, align-items-center, justify-content-center col-12">*/}

            <div className={style.app}>
                <p className={`${style.name}`}>Karma Home</p>
            </div>
            <div className={style.app}>
                <span className="sr-only mb-5">Loading...</span>
                <BarLoader color={"orange"} loading/>
            </div>

        </div>
    );
};

export default FirstPage;