import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import SingleDeckContainer from './SingleDeckContainer'
import Welcome from './components/Welcome'
import CreateDeck from './containers/CreateDeck'
import SignupForm from './components/SignupForm'
import AllDecksContainer from './containers/AllDecksContainer'

ReactDOM.render(
	<Router>
		<div>
			<App />



			<Route exact path="/" component={Welcome}/>
			<Route path="/flashcards" component={SingleDeckContainer}/>
      		<Route path="/decks/new" component={CreateDeck}/>
      		<Route path="/signup" component={SignupForm} />
      		
		</div>
	</Router>,
	document.getElementById('root')
	);


// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
