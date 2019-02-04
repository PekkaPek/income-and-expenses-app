import React from 'react'
import './reset.css'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entryType: 'expense'
    }
  }
  render() {
    return (
      <div>
        <nav>
          <div className={this.state.entryType==='expense' ? 'link' : null}>Tulot</div>
          <div className={this.state.entryType==='income' ? 'link' : null}>Menot</div>
        </nav>

        <h1>{this.state.entryType==='expense' ? 'Menot' : 'Tulot'}</h1>
        <form className="form--add-entry">
          <label>Päivämäärä</label>
          <input type="date"></input>
          <label>Summa</label>
          <input type="text"></input>
          <br></br>
          <input type="submit" value="+ Lisää"></input>
        </form>
      </div>
    )
  }
}

export default App;
