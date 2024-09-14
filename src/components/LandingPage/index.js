import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import './landingPage.scss'
import IntervueLogo from '../../assets/intervue.svg'
const LandingPage = () => {
    const history = useNavigate();
    const [selectedCard,setSelectedCard] = useState('');

    const onCardClickHandler =(event)=>{
      setSelectedCard(event);
    }
    const onContinueClickHandler = ()=>{
        if(selectedCard ==='student'){
            history('/student');
        }
        else{
            history('/teacher');
        }
    }
    return (
        <div className="landing-page">
            <div className="ogo-div">
                <img src={IntervueLogo} alt='intervue-logo' />
            </div>
            <div className="welcome-text-div">
                <div>
                    {"Welcome to the "}
                    <span className="bold-text">Live Polling System</span>
                </div>
            </div>
            <div className="discription-div">
                {"Please select the role that best describes you to begin using the live polling system"}
            </div>
            <div className="card-options-layout">
                <div  className={`select-card ${selectedCard==='student'?'active':''}`} onClick={()=>{onCardClickHandler("student")}}>
                    <div className="card-heading-text">
                        {"I’m a Student"}
                    </div>
                    <div className="card-discription-text">
                        {"Lorem Ipsum is simply dummy text of the printing and typesetting industry"}
                    </div>
                </div>
                <div  className={`select-card ${selectedCard==='teacher'?'active':''}`} onClick={()=>{onCardClickHandler("teacher")}}>
                    <div className="card-heading-text">
                        {"I’m a Teacher"}
                    </div>
                    <div className="card-discription-text">
                        {"Submit answers and view live poll results in real-time."}
                    </div>
                </div>
            </div>
            <button className="button" disabled={!selectedCard} onClick={onContinueClickHandler}>Continue</button>
        </div>
    )
}

export default LandingPage;