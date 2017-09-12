import React from 'react'

const DeckDropdown = (props) => {
	if (props.deck) {
		return props.deck.map(d => <option value="">Select Country</option>)
		} else {
			return <div>Deck Dropdown</div>
		}
}

export default DeckDropdown
//
// <div>
//
// </div>
