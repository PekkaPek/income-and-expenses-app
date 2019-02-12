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
        <EntriesTable />
      </div>
    )
  }
}

export default App
