APP = function () {

  ///////////////
  // dependencies

  /////////////
  // properties
  
  //////////
  // methods
  var init = function () {
    UI.Console.write("App Builder started successfully!");
    
    UI.Header.addTitle('App Builder');
    
    // UI.Header.addButton('Close', UI.Panel.close);
    // UI.Header.addButton('Open', UI.Panel.open);
    UI.Header.addButton('Build', APP.Workflow.buildApp);
    
    var libBtn = UI.Footer.addButton('Library', APP.Library.toggle);
    APP.Library.setButton(libBtn);
    var inBtn = UI.Footer.addButton('Inspector', APP.Inspector.toggle);
    APP.Inspector.setButton(inBtn);
    UI.Footer.addButtonLeft('Console', UI.Console.toggle);

    setTimeout(function () {
      libBtn.click();
    }, 500);
    
  };

  //////////////////
  // init procedures
  
  /////////
  // public
  return {
    init: init
  };

}();
