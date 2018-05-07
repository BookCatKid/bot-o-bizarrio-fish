const PlayOff = require("./PlayOff");

/**
 * Play 
 */
class Tournament {

  constructor(players, maxMoves) {
    this.players = players;
    this.maxMoves = maxMoves;
    this.scores = players.map(p => 0);
  }

  playRound() {
    this.players.forEach(a => this.players.forEach(b => {
      if (a !== b) {
        const playOff = new PlayOff(a, b);
        playOff.play(this.maxMoves);
        this.scores[this.players.indexOf(a)] += playOff.score(a);
        this.scores[this.players.indexOf(b)] += playOff.score(b);
      }
    }));
  }

  getScores() {
    return this.scores;
  }
}

module.exports = Tournament;