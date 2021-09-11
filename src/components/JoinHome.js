import React, {useState} from 'react';
import {houseAPI} from "../api/ajax";
import MissionsLog from "./MissionsLog";
import {Helmet} from "react-helmet";
import style from "../css_modules/joinhome.module.css";
import key from "../Images/key.png";
import addJoin from "../Images/addjoin.png";

const JoinHome = (props) => {
    const [homeId, setHomeId] = useState('');
    const [join, setJoin] = useState(false);

    function changeHomeName(event) {
        setHomeId(event.target.value)
    }

    function goToMissionLogs() {
        houseAPI.joinHome(props.userId, homeId, localStorage.getItem("token")).then(response => {
            localStorage.setItem('token', response.headers['x-token']);
            setHomeId(response.data.name);
        });
        setJoin(true);
    }

    return (
        join ? <MissionsLog homeId={homeId}/> :
            <div className="container-fluid justify-content-center">
                <Helmet>
                    <style>{'body { background-color: white; display: flex; flexDirection: column; alignItems: center }'}</style>
                </Helmet>
                <div className={style.app}>
                    <img className={`col-sm-12  ${style.house}`} src={key} alt="add house"/>
                </div>
                <div className={style.app}>
                    <p className={`${style.name}`}>Join Home</p>
                </div>
                <div>
                    <label className={style.labelClass} htmlFor='name'>Home ID</label>
                    <input onChange={changeHomeName} className={style.inputClass} value={homeId} type='text' name='name' placeholder="Home ID"/>
                </div>
                <div className={style.app}>
                    <button  onClick={goToMissionLogs} className={style.start}>
                        <img src={addJoin} className={style.addJoin} alt={"start"} />START
                    </button>
                </div>

            </div>
    );
};

export default JoinHome;