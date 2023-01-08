import React, {useState, useEffect} from 'react';
import Display from './components/Display';
import './App.css';
import Navbar from './components/Navbar';
import Types from './components/Types';


function importAll(r, records) {
  let data = new Object();

  r.keys().map((item, ) => {
    const temp = item.replace('./', '').split('/');
    if(data[temp[0]])
    {
      data[temp[0]][records[temp[0]][(temp[1]).replace('.jpg', '')]][(temp[1]).replace('.jpg', '')] = r(item);
      // data[temp[0]][(temp[1]).replace('.jpg', '')] = r(item);
    }
    else {
      data[temp[0]] = new Object();
      for(let i = 1; i < 6; i++)
      {
        data[temp[0]][i] = new Object();
      }
      data[temp[0]][records[temp[0]][(temp[1]).replace('.jpg', '')]][(temp[1]).replace('.jpg', '')] = r(item);
      // data[temp[0]][(temp[1]).replace('.jpg', '')] = r(item);
    }
  }
  )
  return data;
}

function App() {
  const [heading, setHeading] = useState("Question 1");
  const [ques, setQues] = useState("Q1");
  const [answers, setAnswers] = useState({});
  const [qtype, setQtype] = useState(1);
  const records = require('./records.json');
  const data = importAll(require.context('./extracted', true, /\.(png|jpe?g|svg)$/), records);
  const [grades, setGrades] = useState({});

  const [state, updateState] = React.useState(true);
  const forceUpdate = React.useCallback(async () => {
    return await new Promise((resolve) => {
    updateState(resolve, !state);
  });
}, []);


const getGrades = () => {
  return grades;
}

const getSpecificGrade = (id) => {
  let score = 0;
  Object.keys(grades[id]).map((item,) => {
    score = score + grades[id][item];
  });
  return {grades: grades[id], score: score};
}

window.getGrades = getGrades;
window.getSpecificGrade = getSpecificGrade;


  useEffect(()=>{
		setAnswers(data[ques][qtype]);
    Object.keys(records['Q1']).map((item,) => {
      let temp = grades;
      temp[item] = new Object();
      for(let i = 1; i < 13; i++)
      {
        temp[item]['Q' + i] = 0; 
      }
      // setGrades(grades => ({...grades, [item] : 0}));
      setGrades(temp); 
    });
    // console.log("i", grades);
	}, []);


  useEffect(()=>{
		
    setAnswers(data[ques][qtype]);
    setHeading("Question" + ' ' + ques[1]);
    const u = async () => await forceUpdate();
	}, [ques, qtype])

  

  return (
    <div className="App">
      <h1>{heading}</h1>
      <div className="underline"></div>
      <Types qtype={qtype} setQtype={setQtype}/>
      <Navbar records={records} setQues = {setQues}/>
      {state ? <Display data = {answers} grades={grades} setGrades={setGrades} ques={ques} state={state} /> : <Display data = {answers} grades={grades} setGrades={setGrades} ques={ques} state={state}/>}
      

    </div>
  );
}

export default App;
