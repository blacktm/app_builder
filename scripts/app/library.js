APP.Library = function () {

  ///////////////
  // dependencies
  var panel = UI.Panel;
  
  /////////////
  // properties
  var libButton = null;
  
  //////////
  // methods
  var toggle = function () {
    if (!panel.isOpen() && (panel.currentUser() !== 'library')) {
      // panel is closed, not the current user
      this.classList.add('pressed');
      load();
    } else if (!panel.isOpen() && (panel.currentUser() === 'library')) {
      // panel is closed, is the current user
      this.classList.add('pressed');
      panel.open();
    } else if (panel.isOpen() && (panel.currentUser() !== 'library')) {
      // panel is open, not the current user
      UI.Footer.unpress();
      this.classList.add('pressed');
      load();
    } else {
      // close panel
      this.classList.remove('pressed');
      panel.close();
    }
  };
  
  var show = function () {
    if ( (panel.currentUser() !== 'library') ||
         (!panel.isOpen() && (panel.currentUser() === 'library')) ) {
      libButton.click();
    }
  };
  
  var setActive = function () {
    if (!panel.isOpen()) {
      load();
      panel.close();
    } else {
      show();
    }
  };
  
  var load = function () {
    APP.Workflow.unselectAll();
    panel.open();
    panel.empty();
    panel.currentUser('library');
    panel.setTitle('Library');
    
    var actions = APP.Actions.getAll();
    var options = [];
    
    for (var i = 0; i < actions.length; i++) {
      options.push({
        text: actions[i].display_name,
        value: actions[i].name
      });
    }
    
    panel.add([
      // {
      //   type: 'select',
      //   options: [
      //     'Library',
      //     'Payments',
      //     'Forms',
      //     'APIs'
      //   ],
      //   onchange: function() { alert('Changed!') }
      // },
      {
        type: 'select',
        rows: 5,
        options: options,
        onchange: function() {
          var actionName = this.options[this.options.selectedIndex].value;
          var action = APP.Actions.getAction(actionName);
          var html = '<div class="header">' +
                       '<div id="add">+</div>' +
                       '<h1>' + action.display_name + '</h1>' +
                     '</div>' +
                     action.description;
    
          var el = document.getElementById('action-details');
          el.innerHTML = html;
    
          el = document.getElementById('add');
          el.addEventListener('click', function () {
            APP.Workflow.add(action.name);
          });
        }
      },
      {
        id: 'action-details',
        type: 'text',
        content: 'Select an action above.'
      }
    ]);
  };
  
  var setButton = function (btn) {
    libButton = btn;
  };
  
  //////////////////
  // init procedures
  
  /////////
  // public
  return {
    toggle: toggle,
    show: show,
    setButton: setButton,
    setActive: setActive
  };

}();
