import React from 'react'

class SignupForm extends React.Component {

	//need event listener for form submission
	constructor() {
		super()

		this.state = {
			name: '',
			email: '',
			password: ''
		}

	}

	handleChange = (event) => {
		const target = event.target.dataset.name
		const value = event.target.value

		this.setState({
			[target]: value
		})
	}


	handleSubmit = (event) => {
		event.preventDefault()

		const data = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password_confirmation: this.state.password_confirmation
		}

		fetch('http://localhost:3000/api/v1/users', {
			method: 'POST',
			body: JSON.stringify({data}),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(res => res.json())
		.then(res => console.log(res))
	}


	render(){
		return(
			<div>
				<form className="ui form" onSubmit={this.handleSubmit}>
					<div className="field">
					    <label>Name</label>
					    <input type="text" data-name="name" placeholder="Name" onChange={this.handleChange}/>
					 </div>
					 <div className="field">
					    <label>Email</label>
					    <input type="text" data-name="email" placeholder="Email" onChange={this.handleChange}/>
					 </div>
					 <div className="field">
					    <label>Password</label>
					    <input type="password" data-name="password" placeholder="Password" onChange={this.handleChange}/>
					 </div>
					 <div className="field">
					    <label>Confirm Password</label>
					    <input type="password" data-name="password_confirmation" placeholder="Confirm Password" onChange={this.handleChange}/>
					 </div>
					 <button className="ui button" name="submit">Submit</button>
				</form>
			</div>
		)
	}

}

export default SignupForm
