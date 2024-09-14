import React, { useEffect, useState } from "react";
import PollQuestion from '../PollQuestion';
import './StudentQuestion.scss'
import {socket} from '../../socket';
const StudentQuestion = ()=>{
    const [questionData,setQuestionData] = useState({});
    const option ={
        question:"here is the question",
        options:[
        {number:1,value:30,answer:'kkjasdkfjk jsd'},
        {number:2,value:70,answer:'kkjasdkfjk jsd'},
        {number:3,value:40,answer:'kkjasdkfjk jsd'},
        {number:4,value:90,answer:'kkjasdkfjk jsd'}
        ]
       }

       useEffect(() => {
        socket.on('connect', () => {
            console.log('Socket connected!');
        });

        socket.on('getQuestion', (questions) => {
            console.log(questions);
            setQuestionData(questions);
        });
        socket.on("connect_error", (err) => {
            // the reason of the error, for example "xhr poll error"
            console.log(err.message);
          
            // some additional description, for example the status code of the initial HTTP response
            console.log(err.description);
          
            // some additional context, for example the XMLHttpRequest object
            console.log(err.context);
          });
        // socket.connect();
 
      
        // return () => {
        //   socket.disconnect();
        // };
      }, []);
    return (
        <div className="student-questioin-wrapper">
        <div className="question-div">Quesiton</div>
        <PollQuestion 
        question={option.question}
        options ={option.options}
        />
        
        </div>

    )
}

export default StudentQuestion;