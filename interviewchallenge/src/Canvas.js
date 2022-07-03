import './Canvas.css';
import Swatch from './Swatch.js'
import DetailedView from './DetailedView'
import { useState } from 'react';

function Canvas() {
  //canvasGrid
  //canvasDetailed
  const [view, setView] = useState('canvasGrid')
  let displayComponents;
  const swatches = []
  const detailComponent = <DetailedView setView={setView} view={view}/>



  if (view === 'canvasGrid') {
    for (let i = 0; i < 12; i += 1) {
      swatches.push(<div><Swatch  setView={setView} view={view}/></div>)
    }
    displayComponents = swatches
  } else displayComponents = detailComponent

  return (
    <div className={view}>
      {displayComponents}
    </div>
  );
}

export default Canvas;