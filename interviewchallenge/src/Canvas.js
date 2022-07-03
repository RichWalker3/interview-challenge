import './Canvas.css';
import Swatch from './Swatch.js'
import DetailedView from './DetailedView'
import { useState } from 'react';
import colors from './colors.json'

function Canvas() {
  //canvasGrid
  //canvasDetailed
  const [view, setView] = useState('canvasGrid')
  const [colorIndex, setColorIndex] = useState(0)
  const [page, setPage] = useState(1)
  const [detailedIndex, setDetailedIndex] = useState(0)
  let displayComponents;
  const swatches = []
  const pages = []
  const detailComponent = <DetailedView color={colors[detailedIndex].hexcode} colorIndex={detailedIndex} setView={setView} view={view} />

  const handlePageClick = (pageNum) => {
    console.log(pageNum, 'PAGENUM')
    const newcolorIndex = (pageNum - 1) * 12
    setColorIndex(newcolorIndex)
    setPage(pageNum)
  }

  if (view === 'canvasGrid') {
    //Swatches
    let loopStart = (page <= 3) ? 0 : -3
    for (let i = colorIndex; i < colorIndex + 12; i += 1) {
      
      swatches.push(<Swatch color={colors[i].hexcode} swatchColorIndex={i} setView={setView} view={view} setDetailedIndex={setDetailedIndex}/>)
    }
    displayComponents = swatches
    console.log(swatches)
    const lastPage = Math.ceil(colors.length/12)
    //Pagination
    if (page <= 3) {
      for (let i = 1; i < 9; i += 1) {
        const pageJSX = (i === page) ? <div><p><u>{i}</u></p></div> : <div onClick={() => handlePageClick(i)}><p>{i}</p></div>
        pages.push(pageJSX)
      }
    } else if (page >= (lastPage-4)){
      for (let i = lastPage-8; i < lastPage; i += 1) {
        const pageJSX = (i === page) ? <div><p><u>{i}</u></p></div> : <div onClick={() => handlePageClick(i)}><p>{i}</p></div>
        pages.push(pageJSX)
      }
    }else {
      for (let i = -3; i < 5; i += 1) {
        const pageJSX = (i === 0) ? <div><p><u>{page}</u></p></div> : <div onClick={() => handlePageClick(page + i)}><p>{page + i}</p></div>
        pages.push(pageJSX)
      }
    }
  } else displayComponents = detailComponent


  return (
    <div className={view}>
      {displayComponents}
      <div className='pageNums'>
        {pages}
      </div>
    </div>
  );
}

export default Canvas;