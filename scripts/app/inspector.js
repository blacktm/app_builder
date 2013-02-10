APP.Inspector = function () {

  ///////////////
  // dependencies
  var panel = UI.Panel;
  
  /////////////
  // properties
  var inspectorButton = null;
  
  
  //////////
  // methods
  var toggle = function () {
    if (!panel.isOpen() && (panel.currentUser() !== 'inspector')) {
      // panel is closed, not the current user
      this.classList.add('pressed');
      load();
    } else if (!panel.isOpen() && (panel.currentUser() === 'inspector')) {
      // panel is closed, is the current user
      this.classList.add('pressed');
      panel.open();
    } else if (panel.isOpen() && (panel.currentUser() !== 'inspector')) {
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
  
  var load = function () {
    panel.open();
    panel.empty();
    panel.currentUser('inspector');
    panel.setTitle('Inspector');
    panel.add([{
        type: 'text',
        content: 'Select an action in the workflow to view its properties.'
    }]);
  };
  
  var show = function (actionID) {
    if (panel.isOpen() && (panel.currentUser() !== 'inspector')) {
      inspectorButton.click();
    }
    
    panel.empty();
    
    var currentAction = APP.Workflow.getAction(actionID);
    var actionName = APP.Actions.getAction(currentAction.name).display_name;
    
    panel.setTitle(actionName);
    panel.add([
      {
        type: 'text',
        content: currentAction.properties
      }
    ]);
  };
  
  var setButton = function (btn) {
    inspectorButton = btn;
  };
  
  //////////////////
  // init procedures
  
  /////////
  // public
  return {
    toggle: toggle,
    show: show,
    setButton: setButton
  };

}();
