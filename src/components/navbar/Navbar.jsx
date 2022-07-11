import './Navbar.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div id='navbar' className={`navbar ${menuOpen?  'active': ''}`}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Aruna</a>
          <div className="socialIconsContainer">
            <LinkedInIcon className='icon' />
          </div>
          <div className="socialIconsContainer">
            <GitHubIcon className='icon' />
          </div>
          <div className="socialIconsContainer">
            <PhoneAndroidIcon className="icon-with-text" />
            <span>+44 7459957809</span>
          </div>
          <div className="socialIconsContainer">
            <EmailIcon className="icon-with-text"/>
            <span>aruna.durai.official@gmail.com</span>
          </div>
          <div className="socialIconsContainer">
            <LocationOnIcon className="icon-with-text"/>
            <span>Norwich, UK.</span>
          </div>
        </div>
        <div className="right" onClick={() => setMenuOpen(!menuOpen)}>
          <MenuIcon id='menu' className='icon' />

          <CloseIcon id='close' className='icon' />
        </div>
      </div>
    </div>
  )
}

export default Navbar