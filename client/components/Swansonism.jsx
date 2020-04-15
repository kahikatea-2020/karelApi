import React from 'react'
import request from 'superagent'

//CLIENT
// const apiURL = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'

//SERVER
const apiURL = 'http://localhost:3000/swanson'


class Swansonism extends React.Component {
  state = {
    quote: '',
   }

   componentDidMount(){
    request.get(apiURL)
    .then(res => {
      this.setState({
      quote: res.body
      })
      })
   }

  render () {
    return(
      <>
        <h2>Ron's Thought of the Day - </h2>
        <h3>"{this.state.quote}"</h3>
        <p>- Ron Swanson</p>
      </>
    )
  }
}

export default Swansonism
