function Swatch(props) {
  let containerClass = (props.view === 'canvasDetailed') ? 'detailGridItem' : 'gridItem'
  let titleBarClass = (props.view === 'canvasDetailed') ? 'detailSwatchTitleBar' : 'gridSwatchTitleBar'
  let titleClass = (props.view === 'canvasDetailed') ? 'detailSwatchTitle' : 'gridSwatchTitle'

  const handleClick = () => {
    if (props.view === 'canvasDetailed') props.setView('canvasGrid')
    else props.setView('canvasDetailed')
  }

  return (
    <div className={containerClass} onClick={handleClick}>
      <div className={titleBarClass}>
        <div className={titleClass}>
          <p>#cffff1</p>
        </div>
      </div>
    </div>
  );
}

export default Swatch;