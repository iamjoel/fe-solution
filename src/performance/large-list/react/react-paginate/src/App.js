import { useState, useCallback } from 'react'
import ReactPaginate from 'react-paginate'
import './App.css';

function App() {
  const pageCount = 10
  const [pageAt, setPageAt] = useState(1)
  const handlePageClick = useCallback(({ selected }) => {
    setPageAt(selected + 1)
  }, [])

  return (
    <div className="App">
      <div>第 {pageAt} 页</div>
      <ReactPaginate
        previousLabel={'上一页'}
        nextLabel={'下一页'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        subContainerClassName={'item'}
        activeClassName={'active'}
      />
    </div>
  );
}

export default App;
