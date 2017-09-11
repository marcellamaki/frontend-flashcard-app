import React from 'react'

class SignupForm extends React.Component {

	//need event listener for form submission


	render(){
		return(
			<div>
				<form className="ui form">
					<div className="field">
					    <label>Name</label>
					    <input type="text" name="Name" placeholder="Name" />
					 </div>
					 <div className="field">
					    <label>Email</label>
					    <input type="text" name="email" placeholder="Email" />
					 </div>
					 <div className="field">
					    <label>Password</label>
					    <input type="password" name="password" placeholder="Password" />
					 </div>
					 <div className="field">
					    <label>Confirm Password</label>
					    <input type="password" name="confirm_password" placeholder="Confirm Password" />
					 </div>
					 <button className="ui button" type="submit">Submit</button>
				</form>
			</div>
		)
	}

}

export default SignupForm