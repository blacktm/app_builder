UI.Header = function () {

  ///////////////
  // dependencies

  /////////////
  // properties
  var hEl = UI.headerEl,
      hcEl = UI.headerContentEl;
  
  //////////
  // methods
  var addTitle = function (title) {
    hcEl.innerHTML = '<li class="title">' + title + '</li>';
  };
  
  var addButton = function (text, listener) {
    var el = document.createElement('li');
    el.innerHTML = text;
    el.classList.add('btn');
    el.addEventListener('click', listener);
    
    hcEl.appendChild(el);
  };
  
  var open = function () {
    hEl.classList.add('open');
  };
  
  var close = function () {
    hEl.classList.remove('open');
  };
  
  //////////////////
  // init procedures

  /////////
  // public
  return {
    addTitle: addTitle,
    addButton: addButton,
    open: open,
    close: close
  };

}();
