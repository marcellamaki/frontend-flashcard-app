import React from 'react'
import SingleDeckContainer from '../SingleDeckContainer'
import {Route} from 'react-router-dom'
import DisplayAllDecks from '../components/DisplayAllDecks'

class AllDecksContainer extends React.Component {

	constructor(props) {
		super(props)

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
		if (this.state.allDecks.length === 0) {
			return <div>You have no decks!</div>
		} else {
			const myCurrentDecks = this.state.allDecks.map(deck => <DisplayAllDecks deck={deck} handleFetchDeckCards={this.props.handleFetchDeckCards} key={deck.id}/>)
			return (
				<div className="ui cards" style={{margin: "auto"}}>
					{myCurrentDecks}
			    </div>

				)
		}
	}

}

export default AllDecksContainer
