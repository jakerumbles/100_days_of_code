import React, { Component } from 'react'
import Card from './Card';
import './Deck.css'
import axios from 'axios';

const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";

class DeckOfCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: null,
      drawn: []
    };
    console.log('inside constructor');
    this.getCard = this.getCard.bind(this);
  }

  async componentDidMount() {
    console.log('inside componentDid Mount');
    const deck = await axios.get(`${API_BASE_URL}/new/shuffle`);
    this.setState({ deck: deck.data });

  }

  async getCard() {
    try {
      let id = this.state.deck.deck_id;
      let cardUrl = `${API_BASE_URL}/${id}/draw`
      let cardRes = await axios.get(cardUrl);
      if(!cardRes.data.success) {
        throw new Error("No cards remaining!");
      }

      let card = cardRes.data.cards[0];
      this.setState(st => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`
          }
        ]
      }));
    } catch(err) {
      alert(err);
    }
  }

  render() {
    console.log('inside render');
    const cards = this.state.drawn.map(c => (
      <Card key={c.id} name={c.name} image={c.image} />
    ));
    return (
      <div>
        <h1>Card Dealer</h1>
        <button onClick={this.getCard}>GIMME A CARD!</button>
        <div className="Deck-cardarea">
          {cards}
        </div>
      </div>
    )
  }
}

export default DeckOfCards;