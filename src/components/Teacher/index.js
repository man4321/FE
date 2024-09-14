import React, { useState } from "react";
import './Teacher.scss'
import IntervueLogo from '../../assets/intervue.svg'
import { socket } from "../../socket";
const OptionComp = (number)=>{
    return (
        <div className="option-div">
            <div className="option-number">{number}</div>
            <textarea className="option-text-area" rows={1}/>
            <input className="radio-button" type="radio" name={"option"+{number}}/>
            <label>True</label>
            <input className="radio-button" type="radio" name={"option"+{number}}/>
            <label>False</label>
        </div>
    )
}
const Teacher = () => {
    const [options,setOptions] = useState([]);
    const [question,setQuestion] = useState("");
    const [optionsValues,setOptionsValues] = useState("");
    const addMoreOptionHandler =()=>{
        const currentOptions = [...options];
        currentOptions.push(OptionComp(options.length+3));
         setOptions([...currentOptions]);
    }
    const onAskQuestionHandler=()=>{
        const addedOptions = [];
        const data = {
            question:question,
            options:[{
                number:1,value:30,answer:'kkjasdkfjk jsd'
            }
            ]
        }
        socket.timeout(1000).emit('getQuestion', data, () => {
            console.log('sent data....')
          });
    }
    return (
        <>
            <div className="teacher-page">
                <div className="logo-div">
                    <img src={IntervueLogo} alt="interveu-logo" />
                </div>
                <div className="get-start-text-div">
                    {"Let’s "}
                    <span className="bold-text">{"Get Started"}</span>
                    <div className="discription-div">
                        {"you’ll have the ability to create and manage polls, ask questions, and monitor your students' responses in real-time."}
                    </div>
                </div>
                <div className="enter-question-div">
                    <div className="header-div">
                        <div className="heading-text">{"Enter your question"}</div>
                        <div> 60 Seconds </div>
                    </div>
                    <div className="text-box-div">
                        <textarea className="text-box-div" style={{resize:'none'}} onChange={(e)=>{setQuestion(e.target.value)}}/>
                        <div className="words-number">{question.length}/100</div>
                    </div>
                </div>

                <div className="edit-options-wrapper">
                    <div className="edit-options-div">
                    <div className="heading-text">
                        {"Edit Options"}
                    </div>
                    <div className="heading-text">
                        {"Is it corroct?"}
                    </div>
                    </div>
                    <div className="option-div">
                        <div className="option-number">1</div>
                        <textarea className="option-text-area" rows={1}/>
                        <input className="radio-button" type="radio" name="optoin-1" value={true}/>
                        <label>True</label>
                        <input className="radio-button" type="radio" name="optoin-2" value={true}/>
                        <label>False</label>
                    </div>
                    <div className="option-div">
                        <div className="option-number">2</div>
                        <textarea className="option-text-area" rows={1}/>
                        <input className="radio-button" type="radio" name="optoin-2" value={true}/>
                        <label>True</label>
                        <input className="radio-button" type="radio" name="optoin-2" value={true}/>
                        <label>False</label>
                    </div>
                    {options.map(item => item)}
                </div>

            <button className="secondry-button" onClick={addMoreOptionHandler}>+ Add More option</button>

            <div className="footer-div">
                <button className="primary-button" onClick={onAskQuestionHandler}>Ask Question</button>
            </div>
            </div>

        </>
    )
}

export default Teacher;