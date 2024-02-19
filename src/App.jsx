
import { useEffect } from 'react';
import './App.css'
import { useState } from 'react';
import { search } from './services/search.service';
import ResultComponent from './component/result.component';

function App() {

  const [searchResult, setSearchResult] = useState({});
  const [searchText, setSearchText] = useState('');

  const getSearchResult = () => {
    search(searchText).then(res => {
      setSearchResult(res);
    });
  }

  useEffect(() => {
    //getSearchResult();
  }, [])

  return (
    <>
      <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <button onClick={() => getSearchResult()}>Search</button>
      {searchResult.webPages && searchResult.webPages.value.map((item, index) => <ResultComponent key={'index_' + index} item={item} />
      )}
    </>
  )
}

export default App
