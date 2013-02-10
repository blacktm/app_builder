UI.Footer = function () {

  ///////////////
  // dependencies

  /////////////
  // properties
  var fcEl = UI.footerContentEl;

  //////////
  // methods
  var addButton = function (text, listener) {
    var el = document.createElement('li');
    el.innerHTML = text;
    el.classList.add('btn');
    el.addEventListener('click', listener);
    
    fcEl.appendChild(el);
    return el;
  };
  
  var unpress = function () {
    for (var i = 0; i < fcEl.children.length; i++) {
      fcEl.children[i].classList.remove('pressed');
    }
  };
  
  var addButtonLeft = function (text, listener) {
    var el = addButton(text, listener);
    el.classList.add('left');
  };
  
  //////////////////
  // init procedures

  /////////
  // public
  return {
    addButton: addButton,
    unpress: unpress,
    addButtonLeft: addButtonLeft
  };

}();
