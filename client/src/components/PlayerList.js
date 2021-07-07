import React from 'react';
import axios from 'axios';

export default class PlayerList extends React.Component {
  state = {
    players: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/players`)
      .then(response => {
        const players = response.data;
        this.setState({players});
        console.log(players)
      })
      .catch(error => {
          console.log("Did not recieve players: ", error)
      })
  }

  render() {
    return (
      <ul>
        { this.state.players.map(players => <li>{players.name} <br/>{players.country}</li>)}
      </ul>
    )
  }
}