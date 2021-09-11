import React, {useContext, useState} from 'react';
import {Helmet} from "react-helmet";
import style from "../css_modules/createhouse.module.css";
import house from "../Images/houseCreate.png";
import playButton from "../Images/playwhite.png"
import MissionsLog from "./MissionsLog";
import {houseAPI} from "../api/ajax";

const CreateHome = (props) => {
    const [homeName, setHomeName] = useState('');
    const [create, setCreate] = useState(false);

    function changeHomeName(event) {
        setHomeName(event.target.value)
    }

    function goToMissionLogs() {
        houseAPI.createHome(homeName, props.name, localStorage.getItem("token")).then(response => {
            localStorage.setItem('token', response.headers['x-token']);
            setHomeName(response.data.name);
        });
        setCreate(true);
    }

    return (
        create ? <MissionsLog houseName={homeName}/> :
        <div className="container-fluid justify-content-center">
            <Helmet>
                <style>{'body { background-color: white; display: flex; flexDirection: column; alignItems: center }'}</style>
            </Helmet>
            <div className={style.app}>
                <img className={`col-sm-12  ${style.house}`} src={house} alt="add house"/>
            </div>
            <div className={style.app}>
                <p className={`${style.name}`}>Create My Home</p>
            </div>
            {/*<div>*/}
            {/*    <input className={style.homeName} type="text" placeholder="My Home"/>*/}
            {/*</div>*/}
            {/*<div className={style.formWrapper}>*/}
            <div>
                <label className={style.labelClass} htmlFor='name'>Home name</label>
                <input onChange={changeHomeName} className={style.inputClass} value={homeName} type='text' name='name' placeholder="My home"/>
            </div>
            <div className={style.app}>
                <button  onClick={goToMissionLogs} className={style.start}>
                    <img src={playButton} className={style.playImage} alt={"start"} />START
                </button>
            </div>

        </div>
    );
};

export default CreateHome;