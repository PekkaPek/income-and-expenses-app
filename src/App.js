import React from 'react'
import axios from 'axios'
import './reset.css'
import './App.css'
import Navigation from './components/Navigation'
import AddEntryForm from './components/AddEntryForm';
import EntriesTable from './components/EntriesTable';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showEntryType: 'expense',
      entries: [],
      nextId: 5,
      newEntryDate: '',
      newEntryAmount: ''
    }
    axios.get('http://localhost:3001/entries')
    .then(response => {
      console.log('response.data:', response.data)
      this.setState( {entries: response.data} )
    })
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

  addEntry = (event) => {
    event.preventDefault()
    const newEntry = {
      type: this.state.showEntryType,
      date: this.state.newEntryDate,
      amount: this.state.newEntryAmount
    }
    axios.post('http://localhost:3001/entries', newEntry)
      .then(response => {
        this.setState({
          entries: this.state.entries.concat(response.data),
          date: '',
          amount: ''
        })
      })
  }

  render() {
    return (
      <div>
        <Navigation showEntryType={this.state.showEntryType} toggleShowEntryType={this.toggleShowEntryType} />
        
        <h1>{this.state.showEntryType==='expense' ? 'Menot' : 'Tulot'}</h1>
        <AddEntryForm newEntryDate={this.state.newEntryDate} newEntryAmount={this.state.newEntryAmount} updateDate={this.updateDate} updateAmount={this.updateAmount} addEntry={this.addEntry} />
        <EntriesTable entries={this.state.entries} showEntryType={this.state.showEntryType} />
      </div>
    )
  }
}

export default App
