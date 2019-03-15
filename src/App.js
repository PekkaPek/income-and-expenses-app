import React from 'react'
import entryService from './services/entries'
import './reset.css'
import './App.css'
import Navigation from './components/Navigation'
import AddEntryForm from './components/AddEntryForm';
import MonthSelector from './components/MonthSelector'
import IncomeExpenseSummary from './components/IncomeExpenseSummary'
import EntriesTable from './components/EntriesTable';
import ModifyEntryModal from './components/ModifyEntryModal'
import helpers from './utils/helpers'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showEntryType: 'expense',
      viewPeriod: new Date(),
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

  getPreviousMonth = () => {
    const newViewPeriod = new Date(this.state.viewPeriod)
    newViewPeriod.setDate(28)
    newViewPeriod.setMonth(newViewPeriod.getMonth() - 1)
    entryService
      .getAll(newViewPeriod.getFullYear(), newViewPeriod.getMonth())
      .then(entries => this.setState({
        entries,
        viewPeriod: newViewPeriod
      }))
  }

  getNextMonth = () => {
    const newViewPeriod = new Date(this.state.viewPeriod)
    newViewPeriod.setDate(28)
    newViewPeriod.setMonth(newViewPeriod.getMonth() + 1)
    entryService
      .getAll(newViewPeriod.getFullYear(), newViewPeriod.getMonth())
      .then(entries => this.setState({
        entries,
        viewPeriod: newViewPeriod
      }))
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
        let entries = this.state.entries
        if (new Date(createdEntry.date).getMonth() === this.state.viewPeriod.getMonth()) {
          entries = this.state.entries.concat(createdEntry).sort(helpers.sortByDate)
        }
        this.setState({
          entries,
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
      let amountNumber = 0;
      if (typeof entry.amount === "string") {
        amountNumber = Number(entry.amount.replace(',', '.'))
      } else {
        amountNumber = entry.amount
      }
      const entryWithAmountNumber = {...entry, amount: amountNumber}
      entryService
        .update(entryWithAmountNumber)
        .then(updatedEntry => {
          let entries = this.state.entries
          if (new Date(updatedEntry.date).getMonth() === this.state.viewPeriod.getMonth()) {
            entries = entries.map(entry => entry.id !== updatedEntry.id ? entry : updatedEntry).sort(helpers.sortByDate)
          } else {
            entries = entries.filter(entry => entry.id !== updatedEntry.id)
          }
          this.setState({
            entries,
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
            entries: this.state.entries.filter(entry => entry.id !== deletedEntry.id)
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
        <MonthSelector viewPeriod={this.state.viewPeriod} getPreviousMonth={this.getPreviousMonth} getNextMonth={this.getNextMonth}/>
        <IncomeExpenseSummary entries={this.state.entries}/>
        <EntriesTable entries={this.state.entries} showEntryType={this.state.showEntryType} populateModifyEntryModal={this.populateModifyEntryModal} deleteEntry={this.deleteEntry}/>
        <ModifyEntryModal showModifyEntryModal={this.state.showModifyEntryModal} entryToBeModified={this.state.entryToBeModified} updateEntry={this.updateEntry}updateEntryToBeModifiedDate={this.updateEntryToBeModifiedDate} updateEntryToBeModifiedAmount={this.updateEntryToBeModifiedAmount}/>
      </div>
    )
  }
}

export default App
