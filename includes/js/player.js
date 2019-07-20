
class Player{
    constructor(name, image, location){
        this.name = name;
        this.image = image;
        this.location = location;
        this.domElements = {
            container: null,
            name: null
        }
    }
    getLocation(){
        return this.location;
    }
    getPlayerDomContainer(){
        return this.domElements.container;
    }
    move( targetDom, newLocation){
        targetDom.append( this.domElements.container);
        this.location = newLocation;
    }
    render(){
        this.domElements.container = $("<div>")
            .addClass('player')
            .css('background-image', 'url('+this.image+')');
        this.domElements.name = $("<div>").addClass('name').text(this.name);
        this.domElements.container.append( this.domElements.name );
        return this.domElements.container;
    }
}