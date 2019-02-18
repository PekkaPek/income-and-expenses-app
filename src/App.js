import React from 'react'
import entryService from './services/entries'
import './reset.css'
import './App.css'
import Navigation from './components/Navigation'
import AddEntryForm from './components/AddEntryForm';
import EntriesTable from './components/EntriesTable';
import ModifyEntryModal from './components/ModifyEntryModal'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showEntryType: 'expense',
      entries: [],
      newEntryDate: '',
      newEntryAmount: '',
      entryToBeModified: {},
      showModifyEntryModal: false
    }
    entryService
      .getAll()
      .then(entries => this.setState({entries}))
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
    entryService
      .create(newEntry)
      .then(createdEntry => {
        this.setState({
          entries: this.state.entries.concat(createdEntry),
          newEntryDate: '',
          newEntryAmount: ''
        })
      })
  }

  toggleShowModifyEntryModal = () => {
    this.setState({showModifyEntryModal: !this.state.showModifyEntryModal})
  }

  populateModifyEntryModal = (entry) => {
    return () => (
      this.setState({
        entryToBeModified: entry
      })
    )
  }

  render() {
    return (
      <div>
        <Navigation showEntryType={this.state.showEntryType} toggleShowEntryType={this.toggleShowEntryType} />
        
        <h1>{this.state.showEntryType==='expense' ? 'Menot' : 'Tulot'}</h1>
        <AddEntryForm newEntryDate={this.state.newEntryDate} newEntryAmount={this.state.newEntryAmount} updateDate={this.updateDate} updateAmount={this.updateAmount} addEntry={this.addEntry} showModifyModal={this.showModifyModal} />
        <EntriesTable entries={this.state.entries} showEntryType={this.state.showEntryType} populateModifyEntryModal={this.populateModifyEntryModal} />
        <ModifyEntryModal entryToBeModified={this.state.entryToBeModified}/>
      </div>
    )
  }
}

export default App
