import React from 'react'

const DisplayAllDecks = (props) => {
	return(
		<div className="ui link card">
			<div className="image">
				<img src="https://images.unsplash.com/photo-1428550443830-190057dc8098?dpr=1&amp;auto=format&amp;fit=crop&amp;w=1199&amp;h=799&amp;q=80&amp;cs=tinysrgb&amp;crop=" />
			<div className="content">
				<a className="header">{props.deck.name}</a>
			</div>
			</div>
		</div>)

}

export default DisplayAllDecks


