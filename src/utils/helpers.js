const sortByDate = (entry1, entry2) => {
  const entry1Date = new Date(entry1.date)
  const entry2Date = new Date(entry2.date)
  return entry1Date - entry2Date
}

export default {sortByDate}