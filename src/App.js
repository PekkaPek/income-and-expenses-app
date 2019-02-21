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
      entryToBeModified: {
        date: '',
        amount: ''
      },
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
    this.setState({newEntryDate: event.target.value})
  }

  updateAmount = (event) => {
    this.setState({newEntryAmount: event.target.value})
  }

  updateEntryToBeModifiedDate = (event) => {
    const modifiedEntry = {...this.state.entryToBeModified, date: event.target.value}
    this.setState({entryToBeModified: modifiedEntry})
  }

  updateEntryToBeModifiedAmount = (event) => {
    const modifiedEntry = {...this.state.entryToBeModified, amount: event.target.value}
    this.setState({entryToBeModified: modifiedEntry})
  }

  addEntry = (event) => {
    event.preventDefault()
    const newEntry = {
      type: this.state.showEntryType,
      date: this.state.newEntryDate,
      amount: Number(this.state.newEntryAmount.replace(',','.'))
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

  populateModifyEntryModal = (entry) => {
    return () => {
      const entryCopy = {...entry}
      this.setState({
        entryToBeModified: entryCopy,
        showModifyEntryModal: true
      })
    }
  }

  updateEntry = (entry) => {
    return () => {
      const amountNumber = Number(entry.amount.replace(',', '.'))
      const entryWithAmountNumber = {...entry, amount: amountNumber}
      entryService
        .update(entryWithAmountNumber)
        .then(updatedEntry => {
          this.setState({
            entries: this.state.entries.map(entry => entry.id !== updatedEntry.id ? entry : updatedEntry),
            showModifyEntryModal: false
          })
        })
      }
  }

  deleteEntry = (entryToDelete) => {
    return () => {
      entryService
        .deleteOne(entryToDelete)
        .then(deletedEntry => {
          console.log('deletedEntry:', deletedEntry)
          this.setState({
            entries: this.state.entries.filter(entry => entry.id !== entryToDelete.id)
          })
        })
    }
  }

  render() {
    return (
      <div>
        <Navigation showEntryType={this.state.showEntryType} toggleShowEntryType={this.toggleShowEntryType} />
        <h1>{this.state.showEntryType==='expense' ? 'Menot' : 'Tulot'}</h1>
        <AddEntryForm newEntryDate={this.state.newEntryDate} newEntryAmount={this.state.newEntryAmount} updateDate={this.updateDate} updateAmount={this.updateAmount} addEntry={this.addEntry} showModifyModal={this.showModifyModal} />
        <EntriesTable entries={this.state.entries} showEntryType={this.state.showEntryType} populateModifyEntryModal={this.populateModifyEntryModal} deleteEntry={this.deleteEntry}/>
        <ModifyEntryModal showModifyEntryModal={this.state.showModifyEntryModal} entryToBeModified={this.state.entryToBeModified} updateEntry={this.updateEntry}updateEntryToBeModifiedDate={this.updateEntryToBeModifiedDate} updateEntryToBeModifiedAmount={this.updateEntryToBeModifiedAmount}/>
      </div>
    )
  }
}

export default App
