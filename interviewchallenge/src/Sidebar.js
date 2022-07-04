import colors from './colors.json'

function Sidebar(props) {
  
  const randomButtonStyle = {
    height: '42px',
    width: '175px',
    borderRadius: '10px',
    border: 'thin solid',
    marginTop: '30px',
    fontSize: '17px',
    fontFamily: 'sourceSerifPro',
    color: '#383e3e',
  }

  const sideBarListStyle = {
    paddingTop: '15px',
    paddingLeft: '20px',
    textAlign: 'left',
  }

  const sbListItemStyle = { fontSize: '20px' }

  const handleRandomClick = () => {
    const randomIndex = Math.floor(Math.random() * colors.length)
    props.setDetailedIndex(randomIndex)
    props.setView('canvasDetailed')
  }

  return (
    <div className="sideBar">
      <div className='randomButtonWrapper'>
        <button type="button" 
          className="randomButton" 
          style={randomButtonStyle} 
          onClick={() => handleRandomClick()}
        >
          <strong>Random Color</strong>
        </button>
      </div>
      <div className="sideBarList" style={sideBarListStyle}>
        <a href="#Red" className='sbText' style={sbListItemStyle}>Red</a>
        <a href="#Orange" className='sbText' style={sbListItemStyle}>Orange</a>
        <a href="#Yellow" className='sbText' style={sbListItemStyle}>Yellow</a>
        <a href="#Green" className='sbText' style={sbListItemStyle}>Green</a>
        <a href="#Blue" className='sbText' style={sbListItemStyle}>Blue</a>
        <a href="#Purple" className='sbText' style={sbListItemStyle}>Purple</a>
        <a href="#Brown" className='sbText' style={sbListItemStyle}>Brown</a>
        <a href="#Gray" className='sbText' style={sbListItemStyle}>Gray</a>
      </div>
    </div>
  );
}

export default Sidebar;