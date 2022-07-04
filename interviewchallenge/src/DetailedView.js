import Swatch from './Swatch.js'
import colors from './colors.json'
function DetailedView(props) {

    const clearButtonStyle ={
        height:'42px',
        width:'175px',
        borderRadius: '10px',
        border: 'thin solid',
        marginTop: '30px',
        fontSize: '20px',
        fontFamily: 'sourceSerifPro',
        color: '#383e3e',
        backgroundColor: 'white'
      } 
    
    const handleClick = () => {
        // setInterval()
        props.setView('canvasGrid')
    }
    const detailSwatches = []
    
    for (let i = 1; i < 6; i += 1) {
        const idx = (props.colorIndex > colors.length - 7) ? colors.length - 7 + i  : props.colorIndex + i
        detailSwatches.push(<Swatch swatchNum={{i}} view={props.view} swatchColorIndex={idx} color={colors[idx]['hex']} setDetailedIndex={props.setDetailedIndex} key={i}/>)
    }

    return (
        <div className="detailedView">

            <div className="detailLargeSwatch" style={{backgroundColor: props.color}}>
                <div className="detailLargeSwatchTitleBar">
                    <div className="detailLargeSwatchTitle">
                        <p>{props.color}</p>
                    </div>
                </div>
            </div>

            <div className="detailSwatchRow">
              {detailSwatches}
            </div>

            <div style={{backgrounColor:'red'}}>
            <button type="button" className="clearButton" style={clearButtonStyle} onClick={handleClick}><strong>Clear</strong></button>
            </div>
        </div>
    );
}

export default DetailedView;