import FuzzySearch from 'react-fuzzy';
import React, { useEffect, useState } from 'react';
import { fetchIndexedFileData } from '../data/fetch';

const FileSearch = () => {
  const [indexedFileData, setIndexedFileData] = useState([])

  useEffect(() => {
    if (!indexedFileData.length) {
      fetchIndexedFileData()
        .then(data => { console.log(data); setIndexedFileData(data) })
    }
  }, [indexedFileData])

  return (
    <FuzzySearch
      list={indexedFileData}
      keys={['name', 'contentType', 'size']}
      width={'80%'}
      onSelect={() => {}}
      resultsTemplate={(props, state) => {
        return (
          <table>
            <tr>
              <th>Name</th>
              <th>Size</th>
              <th>Type</th>
              <th>Full Path</th>
            </tr>
            {state.results.map(val => (
              <tr>
                <td>{val.name}</td>
                <td>{val.size}</td>
                <td>{val.contentType}</td>
                <td>{val.path}</td>
              </tr>
            ))}
          </table>
        )
      }}
    />
  )
}

export { FileSearch }; 
