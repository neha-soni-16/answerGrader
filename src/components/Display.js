import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';


function Display(props) {
  const data = props.data;
  const [currentItems, setCurrentItems] = useState({});
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  

  
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    // setCurrentItems(data.slice(itemOffset, endOffset));
    setCurrentItems(Object.fromEntries(Object.entries(data).slice(itemOffset, endOffset)));
    setPageCount(Math.ceil(Object.keys(data).length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);
  

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Object.keys(data).length;
    setItemOffset(newOffset);
  };

  const handleGrade = (event) => {
    const source = event.target.innerText;
    let flag;
    let g = 0;
    const types = document.getElementsByClassName(event.target.parentElement.classList[0]);
    for(let t = 0; t <types.length; t++)
    {
      let temp = props.grades;
      const c = types[t].children;
      let cls;
      for(let i = 0; i < c.length; i++)
      {
        if(c[i].classList.contains('selectGrade'))
        {
          c[i].classList.remove('selectGrade');
          temp[types[t].id][props.ques] = 0;
          flag = c[i].innerText;
        }
        if(c[i].innerText === source)
        {
          cls = c[i];
          g = i + 1;
        }
      }
      if(flag !== source) {
        cls.classList.add('selectGrade');
        temp[types[t].id][props.ques] = g;
      }
      props.setGrades(temp);
    }
  }

  

  return (
    <div className='Display'>
      <div className='mainContainer'>
        {Object.keys(currentItems).map(key => {
            return (
              <div className='cardContainer' key={key}>
                <div className='card'>
                  <img src={currentItems[key]} alt='hello'/>
                  <div className={'cardContent'}>
                    <div className="cardId">{key}</div>
                    <div id={key} className={'grade'}>
                      
                      <button className={"btn" + ' ' + `${props.grades[key][props.ques] == 0 ? '' : props.grades[key][props.ques] == 1 ? 'selectGrade' : ''}`} onClick={handleGrade}>1</button>
                      <button className={"btn" + ' ' + `${props.grades[key][props.ques] == 0 ? '' : props.grades[key][props.ques] == 2 ? 'selectGrade' : ''}`} onClick={handleGrade}>2</button>
                      <button className={"btn" + ' ' + `${props.grades[key][props.ques] == 0 ? '' : props.grades[key][props.ques] == 3 ? 'selectGrade' : ''}`} onClick={handleGrade}>3</button>
                      <button className={"btn" + ' ' + `${props.grades[key][props.ques] == 0 ? '' : props.grades[key][props.ques] == 4 ? 'selectGrade' : ''}`} onClick={handleGrade}>4</button>
                      <button className={"btn" + ' ' + `${props.grades[key][props.ques] == 0 ? '' : props.grades[key][props.ques] == 5 ? 'selectGrade' : ''}`} onClick={handleGrade}>5</button>
                      
                      
                      
                    </div>
                  </div>
                </div>
                
              </div>
            )
          })}
      </div>
      
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName='page-num'
        previousLinkClassName='page-num'
        nextLinkClassName='page-num'
        activeLinkClassName='active'
      />
    </div>
    
  )
}

export default Display;

