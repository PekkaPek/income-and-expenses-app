import React from 'react'
import './reset.css'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showEntryType: 'expense',
      newEntryDate: '',
      newEntryAmount: ''
    }
  }

  toggleShowEntryType = (event) => {
    if(this.state.showEntryType === 'expense') {
      this.setState({ showEntryType: 'income'})
    } else {
      this.setState({ showEntryType: 'expense'})
    }
  }

  updateDate = (event) => {
    console.log('event.targe.value:', event.target.value)
    this.setState({newEntryDate: event.target.value})
  }

  updateAmount = (event) => {
    console.log('event.targe.value:', event.target.value)
    this.setState({newEntryAmount: event.target.value})
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
          <input type="date" onChange={this.updateDate}></input>
          <label>Summa</label>
          <input type="text" onChange={this.updateAmount}></input>
          <br></br>
          <input type="submit" value="+ Lisää"></input>
        </form>
        <table>
          <tbody>
            <tr><th>Päivämäärä</th><th>Summa</th></tr>
            <tr><td>12.12.18</td><td>4,20 €</td></tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
