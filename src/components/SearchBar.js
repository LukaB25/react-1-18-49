import React, { Component } from 'react'
import names from '../names'

export class SearchBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       names: names
    }
  }

  handleChange = (event) => {
    const inputText = event.target.value.toLowerCase()
    const filteredNames = names.filter(name => {
      return name.toLowerCase().includes(inputText)
    })
    this.setState({
      names: filteredNames
    })
  }

  render() {
    return (
      <div>
        <h1>Name Search</h1>
        <p>Matching names found: {this.state.names.length}</p>
        <form>
            <input
                type="text"
                onChange={(event) => this.handleChange(event)}
                placeholder="search names..." />
        </form>
        <div style={{margin: 'auto'}}>
            {
              this.state.names.map(name => {
                return <p key={name}>{name}</p>
              })
            }
        </div>
      </div>
    )
  }
}

export default SearchBar
