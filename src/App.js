import React from 'react'
import './reset.css'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showEntryType: 'expense'
    }
  }

  toggleShowEntryType = (event) => {
    if(this.state.showEntryType === 'expense') {
      this.setState({ showEntryType: 'income'})
    } else {
      this.setState({ showEntryType: 'expense'})
    }
  }

  render() {
    return (
      <div>
        <nav>
          <div className={this.state.showEntryType==='expense' ? 'link' : null} onClick={this.state.showEntryType==='expense' ? this.toggleShowEntryType : null}>Tulot</div>
          <div className={this.state.showEntryType==='income' ? 'link' : null} onClick={this.state.showEntryType==='income' ? this.toggleShowEntryType : null}>Menot</div>
        </nav>
        
        <h1>{this.state.showEntryType==='expense' ? 'Menot' : 'Tulot'}</h1>
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
