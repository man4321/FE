import React, { useState } from "react";
import './Student.scss'
import IntervueLogo from '../../assets/intervue.svg'
import { useNavigate } from "react-router-dom";

const Student = () => {
    const history = useNavigate();
    const [name,setName] = useState("");
    const onClickHandler=()=>{
       sessionStorage.setItem("Student",name);
       history("/student-question")
    }
    const onChangeNameHandler = (e)=>{
        const name = e.target.value;
        setName(name);
    }
    return (
        <>
            <div className="student-page">
                <div className="logo-div">
                    <img src={IntervueLogo} alt="interveu-logo" />
                </div>
                <div className="get-start-text-div">
                    {"Let’s "}
                    <span className="bold-text">{"Get Started"}</span>
                    <div className="discription-div">
                        {" If you’re a student, you’ll be able to"} <span className="dis-bold-text">submit your answers,</span> {"participate in live polls, and see how your responses compare with your classmates"}
                    </div>
                </div>
                <div className="enter-name-div">
                    <div className="header-div">
                        <div className="heading-text">{"Enter your Name"}</div>
                    </div>
                    <div className="text-box-div">
                        <textarea className="text-box-div" onChange={(e)=>onChangeNameHandler(e)} style={{resize:'none'}} rows={1}/>
                    </div>
                </div>
                <button className="primary-button" disabled={name.length<=3} onClick={onClickHandler}>Continue</button>
            </div>

        </>
    )
}

export default Student;