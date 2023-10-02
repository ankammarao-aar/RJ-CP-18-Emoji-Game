import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}
*/

// Write your code here.
class EmojiGame extends Component {
  state = {isScore: 0, isTrue: true, clickEmojisList: []}

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishGameAndSetTopScore = presentScore => {
    const {isScore} = this.state
    let newScore = isScore

    if (presentScore > isScore) {
      newScore = presentScore
    }
    this.setState({isScore: newScore, isTrue: false})
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickEmojisList} = this.state
    const isEmojiPresent = clickEmojisList.includes(id)
    const clickEmojisListLength = clickEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndSetTopScore(clickEmojisListLength)
    } else {
      if (emojisList.length - 1 === clickEmojisListLength) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickEmojisList: [...prevState.clickEmojisList, id],
      }))
    }
  }

  displayEmojis = () => {
    const filteredEmojiList = this.shuffledEmojisList()
    return (
      <ul className="list-container">
        {filteredEmojiList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  resetGame = () => {
    this.setState({clickEmojisList: [], isTrue: true})
  }

  displayWinOrLoss = () => {
    const {emojisList} = this.props
    const {clickEmojisList} = this.state
    const win = emojisList.length === clickEmojisList.length

    return (
      <div className="won-container">
        <WinOrLoseCard
          win={win}
          score={clickEmojisList.length}
          onClickPlayAgain={this.resetGame}
        />
      </div>
    )
  }

  render() {
    const {isScore, isTrue, clickEmojisList} = this.state

    return (
      <div className="bg-container">
        <NavBar
          currentScore={clickEmojisList.length}
          isTrue={isTrue}
          isScore={isScore}
        />

        {isTrue ? this.displayEmojis() : this.displayWinOrLoss()}
      </div>
    )
  }
}

export default EmojiGame
