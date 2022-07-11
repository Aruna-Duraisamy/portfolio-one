import './Intro.scss';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
const Intro = () => {
  return (
    <div id='intro' className='intro'>
      <div className="left">
        <div className="imageContainer">
         <img src="assets/aruna.jpg" alt="profile" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>
           Hi There, I'm
          </h2>
          <h1>Aruna Duraisamy</h1>
          <h3>Web Developer</h3>
          <a href="#about">
          <KeyboardDoubleArrowDownIcon className='icon' />
          </a>
        </div>
       
      </div>
    </div>
  )
}

export default Intro