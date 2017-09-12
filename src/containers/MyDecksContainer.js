import React from 'react';
import { Route, Link } from 'react-router-dom';
import CardForm from '../components/CardForm';
import DeckForm from '../components/DeckForm'

class MyDecksContainer extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/users', {
      headers : {
        method: "GET",
        'Content-Type': 'application/json'
       }
    })
      .then(res => res.json())
      .then(res => console.log(res))
  }


  render() {
    return(

      <CardForm />
  
    )
  }
}

export default MyDecksContainer;
