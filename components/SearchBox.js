import {useState} from 'react'
import axios from 'axios'

const SearchBox = props => {
  const [searchVal, setSearchVal] = useState('')
  const [result, setResult] = useState(null)
  return (
    <div style={{margin: 'auto', display: 'flex', alignItems: 'center', flexDirection:'column' }}>
      <form onSubmit={e => {
        e.preventDefault()
        axios.get('/api/search')
          .then(e => setResult(e.data))
      }}>
        <input 
          value={searchVal} 
          onChange={e => setSearchVal(e.target.value)} 
        />
      </form>
      <div style={{maxWidth: 300, alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
        {result && (
          <div>
            <h1>{result.name}</h1>
            <img src={result.image} />
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchBox
