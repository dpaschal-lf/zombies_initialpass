

class ZombiesGame{
    constructor(){
        this.handleMove = this.handleMove.bind( this );
        this.players = [];
        this.currentPlayer = 0;
        this.pathStones = [];
        this.currentStone = 0;
        this.attachClickHandlers();
    }
    attachClickHandlers(){
        $("#buttonHolder > *").click( this.handleMove )
    }
    handleMove( event ){
        var direction = parseInt($(event.target).attr('data-direction'));
        var currentPlayer = this.players[ this.currentPlayer ];
        var currentLocation = currentPlayer.getLocation();
        var nextLocation = currentLocation += direction;
        if(nextLocation >= this.pathStones.length){
            nextLocation = 0;
        } else if(nextLocation < 0){
            nextLocation = this.pathStones.length - 1;
        }
        currentPlayer.move( this.pathStones[nextLocation], nextLocation)
    }
    makeGameBoard( stoneCount ){
        var degreesBetweenStones = 360 / stoneCount;
        for(var degrees = 0; degrees < 360; degrees+=degreesBetweenStones){
            var holder = $("<div>")
                .addClass('stoneHolder')
                .css( 'transform','rotateZ('+degrees+'deg)');
            var stone = $("<div>").addClass('stone');
            this.pathStones.push(stone);
            holder.append(stone);
            $("#gameArea").append(holder);
        }
    }
    addPlayer( name, image ){
        var player = new Player(name, image, this.currentStone);
        this.players.push( player );
        var playerDom = player.render();
        this.pathStones[this.currentStone].append(playerDom);
        this.currentStone++;
    }

}