import React from 'react'
import {Route, Link} from 'react-router-dom'
import SignupForm from './SignupForm.js'

class Welcome extends React.Component {


	render() {

		return(
			<div className="pushable">
			<div className="pusher">
		    <div className="ui inverted vertical masthead center aligned segment">
		        <div className="ui text container">
		            <h1 className="ui inverted header center aligned">Card Flashr</h1>
								<Link to="/flashcards"> Create a card deck </Link>
		        </div>
		    </div>
		</div>
			<SignupForm />
			<div>
				<img className="ui fluid image" src="https://images.unsplash.com/photo-1488722796624-0aa6f1bb6399?dpr=1&amp"/>
			</div>
		</div>
		)
	}


}

export default Welcome
