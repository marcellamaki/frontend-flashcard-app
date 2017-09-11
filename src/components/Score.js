import React from 'react'

class Score extends React.Component {


	render() {
		return(
			 <div>
		        <h3 className="ui header">Your Score is: {this.props.score}</h3>
		     </div>
		)
	}
}

export default Score