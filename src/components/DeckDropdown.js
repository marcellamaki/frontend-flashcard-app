import React from 'react'

const DeckDropdown = (props) => {



			if (props.deck){
	    		return props.deck.map(d => 
	      		<div className="item" data-value={d.id}>{d.name}</div>
	    	)} else {
	      		return <div>Deck Dropdown </div>
	   		}

}

export default DeckDropdown