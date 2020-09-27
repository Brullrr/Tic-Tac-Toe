import React, { Fragment, Component} from 'react';
import PlayerInfoModule from '../Modules/PlayerInfoModule/PlayerInfoModule'
import Scoreboard from '../Scoreboard/Scoreboard'
import Gameboard from '../Gameboard/Gameboard'
import WinnerModule from '../Modules/WinnerModule/WinnerModule'




class TicTacToe extends Component { 

    state = {
        playerOneScore: 0,
        playerTwoScore: 0,
        playerOneName: 'Player One',
        playerTwoName: 'Player Two',
        playerOneColor: 'red',
        playerTwoColor: 'blue',
        ticTacToeBoard: ['','','','','','','','',''],
        editing: true,
        turn: true,
        winner: 'hey',
        winnerScreen: false,
        gameFinish: 0
    };

    

    changePlayerOneHandler = (input) => {
        if(input.length < 1){
            input = 'Player One';
        }
            this.setState( () => {
                return {
                    playerOneName: input
                }
            })
        
    }
    changePlayerTwoHandler = (input) => {
        if(input.length < 1){
            input = 'Player Two';
        }
            this.setState( () => {
                return {
                    playerTwoName: input
                }
            })
    }

    updateWinnerHandler = () => {
        console.log(this.state.playerTwoColor)
        this.setState( (prevState) => {
            return {
                gameFinish: prevState.gameFinish + 1
            }
        })

            if( this.state.ticTacToeBoard[0] === 'X' && this.state.ticTacToeBoard[1] === 'X' && this.state.ticTacToeBoard[2] === 'X')
             { this.setState( (prevState) => { return {winner: prevState.playerOneName, winnerScreen: true, playerOneScore: prevState.playerOneScore + 1, gameFinish: 0}}) }
             if( this.state.ticTacToeBoard[3] === 'X' && this.state.ticTacToeBoard[4] === 'X' && this.state.ticTacToeBoard[5] === 'X')
              { this.setState( (prevState) => { return {winner: prevState.playerOneName, winnerScreen: true, playerOneScore: prevState.playerOneScore + 1, gameFinish: 0}}) }
             if( this.state.ticTacToeBoard[6] === 'X' && this.state.ticTacToeBoard[7] === 'X' && this.state.ticTacToeBoard[8] === 'X')
              { this.setState( (prevState) => { return {winner: prevState.playerOneName, winnerScreen: true, playerOneScore: prevState.playerOneScore + 1, gameFinish: 0}}) }
             if( this.state.ticTacToeBoard[0] === 'X' && this.state.ticTacToeBoard[3] === 'X' && this.state.ticTacToeBoard[6] === 'X')
              { this.setState( (prevState) => { return {winner: prevState.playerOneName, winnerScreen: true, playerOneScore: prevState.playerOneScore + 1, gameFinish: 0}}) }
             if( this.state.ticTacToeBoard[1] === 'X' && this.state.ticTacToeBoard[4] === 'X' && this.state.ticTacToeBoard[7] === 'X')
              { this.setState( (prevState) => { return {winner: prevState.playerOneName, winnerScreen: true, playerOneScore: prevState.playerOneScore + 1, gameFinish: 0}}) }
             if( this.state.ticTacToeBoard[2] === 'X' && this.state.ticTacToeBoard[5] === 'X' && this.state.ticTacToeBoard[8] === 'X')
              { this.setState( (prevState) => { return {winner: prevState.playerOneName, winnerScreen: true, playerOneScore: prevState.playerOneScore + 1, gameFinish: 0}}) }
             if( this.state.ticTacToeBoard[0] === 'X' && this.state.ticTacToeBoard[4] === 'X' && this.state.ticTacToeBoard[8] === 'X')
              { this.setState( (prevState) => { return {winner: prevState.playerOneName, winnerScreen: true, playerOneScore: prevState.playerOneScore + 1, gameFinish: 0}}) }
             if( this.state.ticTacToeBoard[2] === 'X' && this.state.ticTacToeBoard[4] === 'X' && this.state.ticTacToeBoard[6] === 'X')
              { this.setState( (prevState) => { return {winner: prevState.playerOneName, winnerScreen: true, playerOneScore: prevState.playerOneScore + 1, gameFinish: 0}}) }
             

             if( this.state.ticTacToeBoard[0] === 'O' && this.state.ticTacToeBoard[1] === 'O' && this.state.ticTacToeBoard[2] === 'O')
              { this.setState( (prevState) => { return {winner: prevState.playerTwoName, winnerScreen: true, playerTwoScore: prevState.playerTwoScore + 1, gameFinish: 0}}) }
             if( this.state.ticTacToeBoard[3] === 'O' && this.state.ticTacToeBoard[4] === 'O' && this.state.ticTacToeBoard[5] === 'O')
              { this.setState( (prevState) => { return {winner: prevState.playerTwoName, winnerScreen: true, playerTwoScore: prevState.playerTwoScore + 1, gameFinish: 0}}) }
             if( this.state.ticTacToeBoard[6] === 'O' && this.state.ticTacToeBoard[7] === 'O' && this.state.ticTacToeBoard[8] === 'O')
              { this.setState( (prevState) => { return {winner: prevState.playerTwoName, winnerScreen: true, playerTwoScore: prevState.playerTwoScore + 1, gameFinish: 0}}) }
             if( this.state.ticTacToeBoard[0] === 'O' && this.state.ticTacToeBoard[3] === 'O' && this.state.ticTacToeBoard[6] === 'O')
              { this.setState( (prevState) => { return {winner: prevState.playerTwoName, winnerScreen: true, playerTwoScore: prevState.playerTwoScore + 1, gameFinish: 0}}) }
             if( this.state.ticTacToeBoard[1] === 'O' && this.state.ticTacToeBoard[4] === 'O' && this.state.ticTacToeBoard[7] === 'O')
              { this.setState( (prevState) => { return {winner: prevState.playerTwoName, winnerScreen: true, playerTwoScore: prevState.playerTwoScore + 1, gameFinish: 0}}) }
             if( this.state.ticTacToeBoard[2] === 'O' && this.state.ticTacToeBoard[5] === 'O' && this.state.ticTacToeBoard[8] === 'O')
              { this.setState( (prevState) => { return {winner: prevState.playerTwoName, winnerScreen: true, playerTwoScore: prevState.playerTwoScore + 1, gameFinish: 0}}) }
             if( this.state.ticTacToeBoard[0] === 'O' && this.state.ticTacToeBoard[4] === 'O' && this.state.ticTacToeBoard[8] === 'O')
              { this.setState( (prevState) => { return {winner: prevState.playerTwoName, winnerScreen: true, playerTwoScore: prevState.playerTwoScore + 1, gameFinish: 0}}) }
             if( this.state.ticTacToeBoard[2] === 'O' && this.state.ticTacToeBoard[4] === 'O' && this.state.ticTacToeBoard[6] === 'O')
              { this.setState( (prevState) => { return {winner: prevState.playerTwoName, winnerScreen: true, playerTwoScore: prevState.playerTwoScore + 1, gameFinish: 0}}) }

              
            
            if(this.state.gameFinish === 9) {
                 this.setState( () => { return {winner: "DRAW", winnerScreen: true, gameFinish: 0}}) 
            }
    }

    playButtonHandler = (playerOneInput, playerTwoInput, playerOneColor, playerTwoColor) => {
        if(playerOneColor === playerTwoColor) {
            switch (playerOneColor) {
                case 'red': 
                    playerTwoColor = 'orange'
                break;
                case 'orange': 
                    playerTwoColor = 'yellow'
                break;
                case 'yellow': 
                    playerTwoColor = 'green'
                break;
                case 'green': 
                    playerTwoColor = 'blue'
                break;
                case 'blue': 
                    playerTwoColor = 'purple'
                break;
                case 'purple': 
                    playerTwoColor = 'red'
                break;
                default:
                    playerTwoColor = 'black'
            }
        }

        this.changePlayerOneHandler(playerOneInput)
        this.changePlayerTwoHandler(playerTwoInput)
        this.setState( () => {
            return {
                playerOneColor: playerOneColor,
                playerTwoColor: playerTwoColor,
                editing: false
            }
        } )
    }

    claimTileHandler = (tileNumber) => {
        if(this.state.ticTacToeBoard[tileNumber].length > 0) {
            return null
        } else {
            if(this.state.turn) {
                this.setState( () => {
                    let ticTacToeBoard = [...this.state.ticTacToeBoard] 
                    ticTacToeBoard[tileNumber] = 'X' 
                    return {
                        ticTacToeBoard: ticTacToeBoard,
                        turn: false 
                    }
                })
            } else {
                this.setState( () => {
                    let ticTacToeBoard = [...this.state.ticTacToeBoard] 
                    ticTacToeBoard[tileNumber] = 'O' 
                    return {
                        ticTacToeBoard: ticTacToeBoard,
                        turn: true
                    }
                })
            }
        }  
        setTimeout(this.updateWinnerHandler, 1)
    }
    playAgainHandler = () => {
        this.setState(() => {
            return {
                winnerScreen: false,
                ticTacToeBoard: ['','','','','','','','','']
            }
        })
    }


    render () {
        let playerInfoModule = <PlayerInfoModule 
        playButton = {this.playButtonHandler}
        changePlayerOne={this.changePlayerOneHandler}/>; 
        if(!this.state.editing){
            playerInfoModule = null
        }
        
        let winningColor = '';
        if(this.state.winner === this.state.playerOneName){
            winningColor = this.state.playerOneColor
        } else if (this.state.winner === this.state.playerTwoName) {
            winningColor =this.state.playerTwoColor
        } else {
            winningColor = 'grey'
        }
        let wins = ' wins!'

        let winnerModule = <WinnerModule 
        winner={this.state.winner} 
        wins={this.state.winner === 'DRAW' ? null : wins}
        playAgainClicked={this.playAgainHandler} 
        winningColor={winningColor}/>

        if(!this.state.winnerScreen) {
            winnerModule = null
        }


        let tileOne, tileTwo, tileThree, tileFour, tileFive, tileSix, tileSeven, tileEight, tileNine

        if(this.state.ticTacToeBoard[0] === 'X') {
            tileOne = this.state.playerOneColor
        } else if (this.state.ticTacToeBoard[0] === 'O') {
            tileOne = this.state.playerTwoColor
        } else {
            tileOne = 'white'
        }
        if(this.state.ticTacToeBoard[1] === 'X') {
            tileTwo = this.state.playerOneColor
        } else if (this.state.ticTacToeBoard[1] === 'O') {
            tileTwo = this.state.playerTwoColor
        } else {
            tileTwo = 'white'
        }
        if(this.state.ticTacToeBoard[2] === 'X') {
            tileThree = this.state.playerOneColor
        } else if (this.state.ticTacToeBoard[2] === 'O') {
            tileThree = this.state.playerTwoColor
        } else {
            tileThree = 'white'
        }
        if(this.state.ticTacToeBoard[3] === 'X') {
            tileFour = this.state.playerOneColor
        } else if (this.state.ticTacToeBoard[3] === 'O') {
            tileFour = this.state.playerTwoColor
        } else {
            tileFour = 'white'
        }
        if(this.state.ticTacToeBoard[4] === 'X') {
            tileFive = this.state.playerOneColor
        } else if (this.state.ticTacToeBoard[4] === 'O') {
            tileFive = this.state.playerTwoColor
        } else {
            tileFive = 'white'
        }
        if(this.state.ticTacToeBoard[5] === 'X') {
            tileSix = this.state.playerOneColor
        } else if (this.state.ticTacToeBoard[5] === 'O') {
            tileSix = this.state.playerTwoColor
        } else {
            tileSix = 'white'
        }
        if(this.state.ticTacToeBoard[6] === 'X') {
            tileSeven = this.state.playerOneColor
        } else if (this.state.ticTacToeBoard[6] === 'O') {
            tileSeven = this.state.playerTwoColor
        } else {
            tileSeven = 'white'
        }
        if(this.state.ticTacToeBoard[7] === 'X') {
            tileEight = this.state.playerOneColor
        } else if (this.state.ticTacToeBoard[7] === 'O') {
            tileEight = this.state.playerTwoColor
        } else {
            tileEight = 'white'
        }
        if(this.state.ticTacToeBoard[8] === 'X') {
            tileNine = this.state.playerOneColor
        } else if (this.state.ticTacToeBoard[8] === 'O') {
            tileNine = this.state.playerTwoColor
        } else {
            tileNine = 'white'
        }


        return (
            <Fragment>
                { playerInfoModule }
                { winnerModule }
                
                <Scoreboard 
                playerOneColor={this.state.playerOneColor}
                playerTwoColor={this.state.playerTwoColor}
                playerOneScore={this.state.playerOneScore} 
                playerTwoScore={this.state.playerTwoScore}
                playerOneName={this.state.playerOneName}
                playerTwoName={this.state.playerTwoName}
                turn={this.state.turn}
                whoseTurn={this.state.turn ? this.state.playerOneName : this.state.playerTwoName}/>

                <Gameboard 
                clicked={this.claimTileHandler}
                claimTile={this.state.ticTacToeBoard}
                tileOne={tileOne}
                tileTwo={tileTwo}
                tileThree={tileThree}
                tileFour={tileFour}
                tileFive={tileFive}
                tileSix={tileSix}
                tileSeven={tileSeven}
                tileEight={tileEight}
                tileNine={tileNine}
                />   
                
            </Fragment>
            
        )
    }


}

export default TicTacToe