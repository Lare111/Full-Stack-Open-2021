import React, { useState } from 'react'



const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  const handleGood = () => {
    
	
    setGood(good + 1)
	state.good++
	state.average++
	
	
  }

  const handleBad = () => {
    
	
    setBad(bad + 1)
	state.bad++
	state.average--
  }
  
  const handleNeutral = () => {
    
	
    setNeutral(neutral + 1)
	state.neutral++;
  }

const state = {
	average: 0,
	good: 0,
	bad: 0,
    neutral: 0, 
	
	}
  
 
 const Statistics = (props) => {
  console.log(good, neutral, bad)
  const total = good + neutral + bad
	const average = ( (good * 1) + (bad * -1) ) / total
	const positive = (good / total) * 100
	

    return (
      <p>good {good} <br /> neutral {neutral} <br /> bad {bad} <br /> total {total} <br /> average {average} % <br /> positive {positive} % </p>
	  
	  
	  
    );
  } 
 
	


  return (
    <div>
      <div>
	  <h1>give feedback</h1>     	
        <button onClick={handleGood}>good</button>
		<button onClick={handleNeutral}>neutral</button>
		<button onClick={handleBad}>bad</button>
		<h1>statistics</h1>
		<Statistics/>
		
		  
		
		
        
		
		
		 
        
      </div>
    </div>
  )
}

export default App