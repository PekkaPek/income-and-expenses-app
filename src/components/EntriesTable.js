import React from 'react'

const EntriesTable = ( {entries, showEntryType, populateModifyEntryModal, deleteEntry} ) => {
  const entriesToShow = entries.filter(entry => entry.type===showEntryType)
  const addAmount = (sum, entry) => {
    return sum + entry.amount
  }
  return(
    <div>
      <table>
      <tbody>
        <tr><th>Päivämäärä</th><th>Summa</th></tr>
        {entriesToShow.map(entry => <tr key={entry.id}><td>{new Date(entry.date).toLocaleDateString()}</td><td>{entry.amount.toLocaleString()} €</td><td className="link" onClick={deleteEntry(entry)}>Poista</td><td className="link" onClick={populateModifyEntryModal(entry)}>Muokkaa</td></tr>)}
      </tbody>
      </table>
      <div>
        {showEntryType === 'expense' ? 'Menoja' : 'Tuloja'} yhteensä {entriesToShow.reduce(addAmount, 0).toLocaleString()} €
      </div>
      <div>
        {entriesToShow.length} {entriesToShow.length === 1 ? ' tapahtuma' : 'tapahtumaa'}
      </div>
    </div>
  )
}

export default EntriesTable