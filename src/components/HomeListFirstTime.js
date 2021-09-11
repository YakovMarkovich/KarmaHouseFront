import React, {useState} from 'react';
import style from "../css_modules/homelistfirsttime.module.css"
import {Helmet} from "react-helmet";
import addIcon from "../Images/addjoin.png"
import joinIcon from "../Images/joinIcon2.png"
import JoinHome from "./JoinHome";
import CreateHome from "./CreateHome";


const HomeListFirstTime = (props) => {
    const [join, setJoin] = useState(false);
    const [create, setCreate] = useState(false)

    function goToJoinHouse() {
        console.log("userId " + props.userId);
        setJoin(true);
    }

    function goToCreateHouse() {
        setCreate(true);
    }

    return (
        join ? <JoinHome userId={props.userId}/> : create ? <CreateHome name={props.name} userId={props.userId}/> :
            <div>
                <Helmet>
                    <style>{'body { background-color: white; display: flex; flexDirection: column; alignItems: center }'}</style>
                </Helmet>
                <img className={style.image} src={props.image} alt="image"/>
                <div className={style.name}>HI {props.name}!</div>
                <div className={style.description}>Looks like you are first time here.
                    Choose what you wanna do now:
                </div>
                <button onClick={goToCreateHouse} className={style.button}><img className={style.buttonImage}
                                                                                src={addIcon} alt="addButton"/> <span
                    className={style.buttonText}>CREATE MY HOME</span></button>
                <div className={style.app}>
                    <div onClick={goToJoinHouse} className={style.joinDiv}><img className={style.join} src={joinIcon}
                                                                                alt={"join home"}/>
                        JOIN ANOTHER HOME
                    </div>
                </div>
            </div>
    );
};

export default HomeListFirstTime;