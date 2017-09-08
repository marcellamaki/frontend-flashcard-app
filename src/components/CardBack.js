import React from 'react'

const CardBack = (props) => {
	return(
		<div>
			{ props.correctGuess ?
			<div className="header">Correct Guess!</div> :
			<div className="header">Incorrect Guess!</div>
			}
				<div className="description">
	      	<p>Answer: {props.answer}</p>
	    	</div>
		</div>
	)
}

export default CardBack
