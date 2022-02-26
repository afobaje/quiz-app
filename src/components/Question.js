import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';



const Question = (props) => {
  let [score, setScore]=useState(0);
  let [trivia,setTrivia]=useState([]);
  let [currentQuestion,setcurrentQuestion]=useState(0)
  let params =useParams();
  let quizdata=`https://opentdb.com/api.php?amount=15&category=${params.id}&type=multiple`;
   
  useEffect(() => {
      axios.get(quizdata)
      .then(res=>{
        setTrivia(res.data.results)
      })
    },[setTrivia]) 

  let shuffle=(array)=>array.sort(()=>Math.random()-0.5);
  
  let options;
  let quest;
  let clickHandler;
  
   clickHandler=(e)=>{
    let option=e.target.textContent;  
    if(option===quest.correct_answer){
      console.log('youre correct')
      setScore(score+1)
    }
    setcurrentQuestion(currentQuestion+1) 
  }
  
  return (
      <div className='
      flex 
      p-6 
      pl-10 
      flex-col 
      content-center 
      self-center'>
       
          {trivia.length>0?(
            currentQuestion>=trivia.length?
            <div className=' 
            col-span-4 
            hover:bg-teal-400 
            justify-center
            content-center
            p-8 
            m-2.5 
            mr-3.5
            shadow-lg'>
              <span className='
              text-xl
              font-semibold
              text-center
              '>Your score: {score}/{trivia.length}</span>
              <br/>
              </div>:(
          quest=trivia[currentQuestion],
          options=[...quest.incorrect_answers,quest.correct_answer],
            <div className='
            basis-4
            justify-center
            col-span-4 
            hover:bg-teal-400 
            rounded-md
            p-8
            shadow-lg'>
              <p>{quest.question}</p>
            <ul className='
            grid
            grid-cols-2
            '>{shuffle(options).map((val,i)=>{
              return <button key={i} onClick={clickHandler} className='p-2 font-mono ml-4 border-2 outline-none hover:bg-teal-400 hover:bg-white hover:border-teal border-teal-400 ml-10 mt-6 justify-center w-72 shadow-md' >{val}</button>
            })}</ul>
          </div>
          )
        ):<p className='
        text-xl
        font-semibold
        text-center
        '>loading..</p>}
  </div>
  );
};


export default Question;


