import React from "react";
import './PollQuestion.scss';


const PollQuestion = ({ question, options }) => {
    return (
        <>
            <div className="poll-question-wrapper">
                <div className="poll-question-div">{question}</div>
                {options.map((option, index) => {
                    return (
                        <div key={index} className="poll-options-div" style={{
                            background: `linear-gradient(to right, #6766D5 ${option.value}%, white ${100 - option.value}%)` 
                        }}>
                            <div className="poll-option-number">{option.number}</div>
                            <div className="poll-option-answer">{option.answer}</div>
                            <div className="poll-option-value">{option.value}%</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default PollQuestion;