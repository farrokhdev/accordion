import React, { useState,useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id,title,info}) => {

  const[showInfo , setShowinfo]=useState(false);

  const toggleInfo=()=>{
    setShowinfo(!showInfo);
  }

  let answerInfo = "";

  if(showInfo){
    answerInfo=<p>{info}</p>
  }

  useEffect(()=>{
    if(id==1){
      setShowinfo(!showInfo);
    }
  },[])


  return (
    <div className="content">
                <div className="question">
                <h4>{title}</h4>
                <button className="toggle" onClick={toggleInfo}>{!showInfo ? <AiOutlinePlus/> : <AiOutlineMinus/>}</button>
              </div>
              <div className="answer">
                {answerInfo}
              </div>
              </div>
  );
};

export default Question;
