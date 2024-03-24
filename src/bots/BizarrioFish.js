const { Engine } = require("stockfish.js");
const ChessUtils = require("../utils/ChessUtils");

class BizarrioFish {
  constructor() {
    this.engine = new Engine();
    this.engine.init();
  }

  async getNextMove(moves) {
    const chess = new ChessUtils();
    chess.applyMoves(moves);
    const fen = chess.getFen();

    return new Promise((resolve) => {
      this.engine.onmessage = (event) => {
        const match = event.match(/^bestmove\s+(\S+)/);
        if (match) {
          const bestMove = match[1];
          resolve(bestMove);
        }
      };

      this.engine.postMessage(`position fen ${fen}`);
      this.engine.postMessage("go depth 20"); // You can adjust the depth as needed
    });
  }

  getReply(chat) {
    return chat;
  }

  destroy() {
    this.engine.quit();
  }
}

module.exports = BizarrioFish;
