// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {win, score, onClickPlayAgain} = props

  const winImgUrl = win
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const status = win ? 'You Won' : 'You Lose'
  const scoreBoard = win ? 'Best Score' : 'Score'

  return (
    <div className="win-card">
      <div className="win-details-container">
        <h1 className="won-name">{status}</h1>
        <p className="para">{scoreBoard}</p>
        <p className="result">{score}/12</p>
        <div>
          <button
            type="button"
            className="play-button"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
      </div>
      <img src={winImgUrl} alt="win or lose" className="won-image" />
    </div>
  )
}

export default WinOrLoseCard
