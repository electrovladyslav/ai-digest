import './Header.css'
import placeholderAvatar from '../assets/placeholder-avatar.svg'

function Header() {
  return (
    <header className="header">
      <div className="header-background"></div>
      
      <div className="header-content">
        <div className="avatar-section">
          <div className="avatar-wrapper">
            <img 
              src={placeholderAvatar} 
              alt="Vlad Yermolin" 
              className="avatar"
            />
          </div>
          <span className="role-badge">FE community Lead</span>
        </div>
        
        <div className="name-banner">
          <span className="name-text">Vlad Yermolin recommends:</span>
        </div>
        
        <div className="branding">
          <span className="rocket-icon">🚀</span>
          <span className="branding-text">AI Highlights</span>
        </div>
      </div>
    </header>
  )
}

export default Header

