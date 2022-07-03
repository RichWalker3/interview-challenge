import Swatch from './Swatch.js'

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
    console.log(props, 'hello')

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
                <Swatch view={props.view}/>
                <Swatch view={props.view}/>
                <Swatch view={props.view}/>
                <Swatch view={props.view}/>
                <Swatch view={props.view}/>
            </div>

            <div style={{backgrounColor:'red'}}>
            <button type="button" classname="clearButton" style={clearButtonStyle} onClick={handleClick}><strong>Clear</strong></button>
            </div>
        </div>
    );
}

export default DetailedView;