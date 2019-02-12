import React from 'react'
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
      entries: [
        {
        id: 1,
        type: 'expense',
        date: '2019-01-04',
        amount: '2,40'},
        {
        id: 2,
        type: 'expense',
        date: '2019-01-05',
        amount: '1'},
        {
        id: 3,
        type: 'income',
        date: '2019-01-07',
        amount: '50'}
      ],
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
    this.setState({newEntryAmount: event.target.value + '€'})
  }

  render() {
    return (
      <div>
        <Navigation showEntryType={this.state.showEntryType} toggleShowEntryType={this.toggleShowEntryType} />
        
        <h1>{this.state.showEntryType==='expense' ? 'Menot' : 'Tulot'}</h1>
        <AddEntryForm newEntryDate={this.state.newEntryDate} newEntryAmount={this.state.newEntryAmount} updateDate={this.updateDate} updateAmount={this.updateAmount} />
        <EntriesTable entries={this.state.entries} showEntryType={this.state.showEntryType} />
      </div>
    )
  }
}

export default App
