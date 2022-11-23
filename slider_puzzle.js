// here's some useful terminology to understand the code:
// a piece is any one of the 9 (actually 8) divs, each serving as one piece of the puzzle image
// one of the 9 divs is not a piece. we call it the "sprite". it's the empty div to which adjacent
// pieces can move. To see where the pieces and the sprite are, look at the html code.
// in this js code, the pieces and the sprite are just elements we get from the DOM.

// let's get all the pieces
// the variables a1 through c2 represent the 8 pieces
// the statements below are very similar to saying document.getElementById()
let a1 = document.querySelector("#a1")
let a2 = document.querySelector("#a2")
let a3 = document.querySelector("#a3")
let b1 = document.querySelector("#b1")
let b2 = document.querySelector("#b2")
let b3 = document.querySelector("#b3")
let c1 = document.querySelector("#c1")
let c2 = document.querySelector("#c2")
// and let's get the sprite
let sprite = document.querySelector("#sprite")

// let's bind (attach) callback functions with each non-sprite piece
// the callback function is executed when the pieces are clicked.
a1.addEventListener("click", () => {switchPiece(a1)});
a2.addEventListener("click", () => {switchPiece(a2)});
a3.addEventListener("click", () => {switchPiece(a3)});
b1.addEventListener("click", () => {switchPiece(b1)});
b2.addEventListener("click", () => {switchPiece(b2)});
b3.addEventListener("click", () => {switchPiece(b3)});
c1.addEventListener("click", () => {switchPiece(c1)});
c2.addEventListener("click", () => {switchPiece(c2)});




// this is the callback function that is executed whenever a piece is clicked.
// it takes the piece that is clicked (as an argument) and switches it's place with the sprite
function switchPiece(piece) {
    // we check if the piece is adjacent to the sprite. otherwise, we don't want to move it
    // you might need to know what these offset things are. google them. or take it for granted that the if statement does what it says it does.
    if(Math.abs(piece.offsetLeft - sprite.offsetLeft) +  Math.abs(piece.offsetTop - sprite.offsetTop) == 100){
        // get the current position of the sprite (as destination for the piece that's clicked)
        let destLeft = sprite.offsetLeft;
        let destTop = sprite.offsetTop;
        // now move the sprite to the position of the piece. the sprite has z-index of -1 so it gets covered by the piece (temporarily)
        sprite.style.left = piece.offsetLeft + "px";
        sprite.style.top = piece.offsetTop + "px";
        // now move the piece to the saved (previous) position of the sprite
        // this is supposed to be done with animation. if someone knows how to do
        // it, make the piece slide (taking some time) to the new position instead of just jumping to the new position
        piece.style.left = destLeft + "px";
        piece.style.top = destTop + "px";
    }
}
