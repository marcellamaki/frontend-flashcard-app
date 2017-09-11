import React from 'react'
import {Route, Link} from 'react-router-dom'

class Welcome extends React.Component {



	render() {

		return(
			<div>
				<Link to="/flashcards"> Create a card deck </Link>
			</div>	
		)
	}


}

export default Welcome