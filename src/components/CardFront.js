import React from 'react'

const CardFront = (props) => {
	return(
		<li key={props.key}>Category is: {props.category}</li>
	)
} 

export default CardFront