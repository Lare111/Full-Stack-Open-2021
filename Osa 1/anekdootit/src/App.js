import React, { useState } from 'react'
  
	  

const App = () => {
	
	 const handleClick = () => {
     setSelected(Math.floor(Math.random() * anecdotes.length));
    
  }
  
	const handleVote = () => {
		const copy = { ...points };
		copy[selected] += 1;
		setPoints(copy);
		if (points[selected] > points[mostVotes]) {
      setMostVotes(selected);
    }
	}
	
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(7));
  const [mostVotes, setMostVotes] = useState(0);
  

  return (
    <div>
	 {anecdotes[selected]}
	 <br />
	 <p>This anecdote has {points[selected]} points.</p>
	 <br />
	  <button onClick={handleClick}>next anecdote</button>
	  <button onClick={handleVote}>vote</button>
	  <br />
      <h1>Anecdote with most votes</h1>
      {anecdotes[mostVotes]} 
	  <br />
	  <p> It has {points[mostVotes]} points. </p>
	  
	  
    </div>
  )
}

export default App