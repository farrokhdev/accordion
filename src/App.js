import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const[questions,setQuestions]=useState(data);
  return(
    <main>
      <div className="container">
        <div className="title">
        <h3>questions and answers about login</h3>
        </div>
        <div className="info">
          {questions.map((question)=>{
            const{id,title,info}=question;

            return(
              <SingleQuestion key={id} {...question}/>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default App;
