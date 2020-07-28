import {useState} from 'react'
import axios from 'axios'

const SearchBox = props => {
  const [searchVal, setSearchVal] = useState('')
  const [results, setResults] = useState(null)
  return (
    <div style={{margin: 'auto', display: 'flex', alignItems: 'center', flexDirection:'column' }}>
      <form onSubmit={e => {
        e.preventDefault()
        axios.get(`/api/gosearch?name=${searchVal}`)
          .then(e => setResults(e.data))
      }}>
        <input 
          value={searchVal} 
          onChange={e => setSearchVal(e.target.value)} 
        />
      </form>
      <div style={{alignItems: 'center', flexWrap: 'wrap', display: 'flex', justifyContent: 'center'}}>
        {results && results.map((r, i) => (
          <div key={i}>
            <h1>{r.name}</h1>
            <img src={r.image} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchBox
