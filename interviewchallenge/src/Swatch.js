function Swatch(props) {
  const containerClass = (props.view === 'canvasDetailed') ? 'detailGridItem' : 'gridItem'
  const titleBarClass = (props.view === 'canvasDetailed') ? 'detailSwatchTitleBar' : 'gridSwatchTitleBar'
  const titleClass = (props.view === 'canvasDetailed') ? 'detailSwatchTitle' : 'gridSwatchTitle'

  const handleClick = (index) => { 
    props.setDetailedIndex(index)
    props.setView('canvasDetailed')
  }

  return (
    <div className={containerClass} onClick={()=>handleClick(props.swatchColorIndex)} style={{backgroundColor: props.color}}>
      <div className={titleBarClass}>
        <div className={titleClass}>
          <p>{props.color}</p>
        </div>
      </div>
    </div>
  );
}

export default Swatch;