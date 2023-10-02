// Write your code here.
import './index.css'

const NavBar = props => {
  const {currentScore, isScore, isTrue} = props
  return (
    <div className="navbar-card">
      <div className="navbar-img-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="navbar-name">Emoji Game</h1>
      </div>
      {isTrue && (
        <div className="score-container">
          <p className="score">Score: {currentScore}</p>
          <p className="score">Top Score: {isScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
