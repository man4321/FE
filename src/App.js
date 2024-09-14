import './App.css';
import React, { useEffect,useState } from "react";
import { socket } from './socket';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import LandingPage from './components/LandingPage';
import Teacher from './components/Teacher';
import Student from './components/Student';
import StudentQuestion from './components/StudentQuestion';
function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      console.log(value)
      setFooEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('getQuestions', onFooEvent);

    // return () => {
    //   socket.off('connect', onConnect);
    //   socket.off('disconnect', onDisconnect);
    //   socket.off('foo', onFooEvent);
    // };
  }, []);

  return (
    <div className="App">
     <Router>
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path='/teacher' element={<Teacher/>}/>
      <Route path='/student' element={<Student/>}/>
      <Route path="/student-question"element={<StudentQuestion/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
