import colors from './colors.json'

function Swatch(props) {
  const containerClass = (props.view === 'canvasDetailed') ? 'detailGridItem' : 'gridItem'
  const titleBarClass = (props.view === 'canvasDetailed') ? 'detailSwatchTitleBar' : 'gridSwatchTitleBar'
  const titleClass = (props.view === 'canvasDetailed') ? 'detailSwatchTitle' : 'gridSwatchTitle'
  // console.log(props.swatchColorIndex, props.swatchNum)
  // const swatchColorStyle = (props.view === 'canvasDetailed') ? {backgroundColor: colors[props.index + props.swatchNum]['hex']} : {backgroundColor: props.color}
  // const hex = (props.view === 'canvasDetailed') ? colors[props.swatchColorIndex + props.swatchNum]['hex'] : props.color

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