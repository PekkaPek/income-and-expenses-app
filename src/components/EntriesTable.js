import React from 'react'

const EntriesTable = ( {entries, showEntryType, populateModifyEntryModal, deleteEntry} ) => {
  const entriesToShow = entries.filter(entry => entry.type===showEntryType)
  const addAmount = (sum, entry) => {
    return sum + entry.amount
  }
  const createEntryRows = (entryRows, entry) => {
    return(
    entryRows.concat(
      <tr key={entry.id}>
        <td className={entryRows.length!==0 && entryRows[entryRows.length - 1].props.children[0].props.children!==new Date(entry.date).toLocaleDateString() ? 'entries-table--date-cell entries-table--first-entry-of-day' : 'entries-table--date-cell entries-table--same-day-entry'}>{new Date(entry.date).toLocaleDateString()}</td>
        <td className="entries-table--number-cell">{entry.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €</td>
        <td className="link entries-table--action-cell" onClick={deleteEntry(entry)}>Poista</td>
        <td className="link entries-table--action-cell" onClick={populateModifyEntryModal(entry)}>Muokkaa</td>
      </tr>
    ))
  }
  return(
    <div>
      <table className="entries-table--table">
      <tbody>
        <tr className="entries-table--header-row">
          <th className="entries-table--date-cell">Päivämäärä</th>
          <th className="entries-table--number-cell">Summa</th>
        </tr>
        {entriesToShow.reduce(createEntryRows, [])}
      </tbody>
      </table>
      <div className="advice-text">
        <p>
          {showEntryType === 'expense' ? 'Menoja' : 'Tuloja'} yhteensä {entriesToShow.reduce(addAmount, 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €
        </p>
        <p>
          {entriesToShow.length} {entriesToShow.length === 1 ? ' tapahtuma' : 'tapahtumaa'}
        </p>
      </div>
    </div>
  )
}

export default EntriesTable