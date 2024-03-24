const stockfish = require('stockfish');
const ChessUtils = require("../utils/ChessUtils")

const engine = stockfish();

engine.onmessage = function (event) {
  console.log(event.data ? event.data : event);
};

class BizarrioFish {
  getNextMove(moves) {
    const chess = new ChessUtils()
    chess.applyMoves(moves)
    const legalMoves = chess.legalMoves()
    if (legalMoves.length) {
      engine.postMessage(`position fen ${fen}`);
      engine.postMessage('go depth 10');
      return chess.pickRandomMove(legalMoves)
    }
  }

  getReply(chat) {
    return "hi"
  }
}

module.exports = BizarrioFish
