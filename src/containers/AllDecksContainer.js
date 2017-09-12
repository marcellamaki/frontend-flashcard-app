import React from 'react'
import SingleDeckContainer from '../SingleDeckContainer'
import {Route} from 'react-router-dom'

class AllDecksContainer extends React.Component {

	constructor() {
		super()

		this.state = {
			allDecks: []
		}
	}

	componentWillMount() {
		fetch('http://localhost:3000/api/v1/decks')
		.then(res => res.json())
		.then(res => this.setState({
			allDecks: res
		}))
	}

	render() {
			console.log(this.state.allDecks)
		return(
			<div>
				 <div className="ui cards" style={{margin: "auto"}}>
            		<Route path='/decks' render={() =>
                <SingleDeckContainer allDecks={this.state.allDecks} />
              }/>
          </div>
			</div>
		)
	}

}

export default AllDecksContainer