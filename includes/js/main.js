

var game = null;
$(document).ready( startGame );

function startGame(){
    game = new ZombiesGame();
    game.makeGameBoard(20);
    game.addPlayer('kim','https://images.vexels.com/media/users/3/132606/isolated/preview/83574b6857f6ef68bbd367acffff9fcc-walking-human-icon-by-vexels.png');
}