


const Keyboard = {
    elements: {
        main: null,
        keysContainer:null,
        keys:[]
    },

    eventHandlers: {
        oninput:null,
        onclose:null
    },

    properties: {
        value:'',
        capSlock:false
    },

    init(){
       //Create main elements
      this.elements.main= document.createElement('div');
      this.elements.keysContainer = document.createElement('div');

       //Setup main elements
       this.elements.main.classList.add("keyboard","gkeyboard__hidden");
       this.elements.keysContainer.classList.add('keyboard__keys');

       //Add to DOM
       this.elements.main.appendChild(this.elements.keysContainer);
       document.body.appendChild(this.elements.main);


    },

    _createKeys(){
       const fragment  = document.createDocumentFragment();
       const keyLayout = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
        "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
        "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
        "space"
       ];

       //Creates HTML for an icon
       const createIconHTML = function(icon_name){
           return `<i class='material-cons'>${icon_name}</i>`
       }

       keyLayout.forEach(function(key){
        const keyElement = document.createElement("button");
        const insertLineBreak = ["backspace","p","enter","?"].indexOf(key)!== -1;

        //Atrribute/classes
        keyElement.setAttribute("type","button");
        keyElement.classList.add("keyboard__key");

        //Switch statement
        

       });
    },

    _triggerEevents(handlerName){
        console.log("Event triggered succesfully");
    },

    _toggleCapsLock(){
        console.log("Caps Lock Toggled")
    },

    open(initialValue,oninput,onclose){

    },

    close(){

    }

};

window.addEventListener("load",function(e){
    Keyboard.init();
});



