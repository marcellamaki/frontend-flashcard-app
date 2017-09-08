import React from 'react'

const CardBack = (props) => {
	return(
		<li key={props.key}>Answer: {props.answer}</li>
	)
}

export default CardBack
