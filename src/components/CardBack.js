import React from 'react'

const CardBack = (props) => {
	console.log(props)
	return(
		<div>
			{ props.correctGuess ?
			<div className="ui header">Correct Guess!</div> :
			<div className="ui header">Incorrect Guess!</div>
			}
				<div className="ui description">
	      	<p>Answer: {props.answer.toString()}</p>
	    	</div>
		</div>
	)
}

export default CardBack
