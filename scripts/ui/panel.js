UI.Panel = function () {

  ///////////////
  // dependencies
  var pEl = UI.panelEl,
      ptEl = UI.panelTitleEl,
      pcEl = UI.panelContentEl,
      vEl = UI.viewEl;

  /////////////
  // properties
  var opened = false,
      inUseBy = '';
      
  //////////
  // methods
  var open = function () {
    if (!opened) {
      toggle();
    }
  };
  
  var close = function () {
    if (opened) {
      toggle();
    }
  };
  
  var toggle = function () {
    if (opened) {
      // close panel
      UI.Header.close();
      pEl.classList.remove('open');
      vEl.classList.remove('open');
      opened = false;
    } else {
      // open panel
      UI.Header.open();
      pEl.classList.add('open');
      vEl.classList.add('open');
      opened = true;
    }
  };
  
  var isOpen = function () {
    return opened;
  };
  
  var currentUser = function (user) {
    if (user) {
      inUseBy = user;
    }
    
    return inUseBy;
  };
  
  var add = function (objects) {
    for (var i = 0; i < objects.length; i++) {
      
      switch (objects[i].type) {
        case 'select':
          select(objects[i]);
          break;
        case 'text':
          text(objects[i]);
          break;
      }
    }
  };
  
  var select = function (obj) {
    var sEl = document.createElement('select');
    
    if (obj.id) { sEl.id = obj.id }
    
    if (obj.rows) {
      sEl.size = obj.rows;
    } else {
      sEl.name = 'select';
    }
    
    for (var i = 0; i < obj.options.length; i++) {
      var oEl = document.createElement('option');
      oEl.value = obj.options[i].value;
      oEl.innerHTML = obj.options[i].text;
      sEl.appendChild(oEl);
    }
    
    sEl.addEventListener('change', obj.onchange);
    
    pcEl.appendChild(sEl);
  };
  
  // var select = function (obj) {
  //   var html = '<select ';
  //   
  //   if (obj.rows) {
  //     html += 'size="' + obj.rows + '">';
  //   } else {
  //     html += 'name="select">';
  //   }
  //   
  //   for (var i = 0; i < obj.options.length; i++) {
  //     html += '<option>' + obj.options[i] + '</option>'
  //   }
  //   html += '</select>';
  //   
  //   write(html);
  // };
  
  var text = function (obj) {
    var el = document.createElement('div');
    
    if (obj.id) { el.id = obj.id }
    
    el.classList.add('text');
    el.innerHTML = obj.content;
    pcEl.appendChild(el);
  };
  
  var empty = function () {
    ptEl.innerHTML = '';
    pcEl.innerHTML = '';
  };
  
  var setTitle = function (title) {
    ptEl.innerHTML = '<span>' + title + '</span>';
  };

  //////////////////
  // init procedures
  
  /////////
  // public
  return {
    open: open,
    close: close,
    isOpen: isOpen,
    add: add,
    currentUser: currentUser,
    empty: empty,
    setTitle: setTitle
  };

}();
