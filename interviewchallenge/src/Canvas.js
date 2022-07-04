import './Canvas.css';
import Swatch from './Swatch.js'
import DetailedView from './DetailedView'
import { useState } from 'react';
import colors from './colors.json'

function Canvas(props) {
  //canvasGrid
  //canvasDetailed
  const [colorIndex, setColorIndex] = useState(0)
  const [page, setPage] = useState(1)
  let displayComponents;
  const swatches = []
  const pages = []
  const detailComponent = <DetailedView color={colors[props.detailedIndex].hex} colorIndex={props.detailedIndex} setView={props.setView} view={props.view} setDetailedIndex={props.setDetailedIndex} />

  const handlePageClick = (pageNum) => {
    const newcolorIndex = (pageNum - 1) * 12
    setColorIndex(newcolorIndex)
    setPage(pageNum)
  }

  if (props.view === 'canvasGrid') {
    //Swatches
    let loopStart = (page <= 3) ? 0 : -3
    for (let i = colorIndex; i < colorIndex + 12; i += 1) {
      
      swatches.push(<Swatch color={colors[i].hex} swatchColorIndex={i} setView={props.setView} view={props.view} setDetailedIndex={props.setDetailedIndex} key={i}/>)
    }
    displayComponents = swatches
    const lastPage = Math.ceil(colors.length/12)
    //Pagination
    if (page <= 3) {
      for (let i = 1; i < 9; i += 1) {
        const pageJSX = (i === page) ? <div key={i}><p><u>{i}</u></p></div> : <div onClick={() => handlePageClick(i)} key={i}><p>{i}</p></div>
        pages.push(pageJSX)
      }
    } else if (page >= (lastPage-4)){
      for (let i = lastPage-8; i < lastPage; i += 1) {
        const pageJSX = (i === page) ? <div key={i}><p><u>{i}</u></p></div> : <div onClick={() => handlePageClick(i)} key={i}><p>{i}</p></div>
        pages.push(pageJSX)
      }
    }else {
      for (let i = -3; i < 5; i += 1) {
        const pageJSX = (i === 0) ? <div key={i}><p><u>{page}</u></p></div> : <div onClick={() => handlePageClick(page + i)} key={i}><p>{page + i}</p></div>
        pages.push(pageJSX)
      }
    }
  } else displayComponents = detailComponent


  return (
    <div className={props.view}>
      {displayComponents}
      <div className='pageNums'>
        {pages}
      </div>
    </div>
  );
}

export default Canvas;