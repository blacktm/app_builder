UI = function () {

  ///////////////
  // dependencies

  /////////////
  // properties
  
  // Element IDs
  var consoleEl = document.getElementById('ui-console'),
      consoleContentEl = document.getElementById('ui-console-content'),
      panelEl = document.getElementById('ui-panel'),
      panelTitleEl = document.getElementById('ui-panel-title'),
      panelContentEl = document.getElementById('ui-panel-content'),
      overlayEl = document.getElementById('ui-overlay'),
      headerEl = document.getElementById('ui-header'),
      headerContentEl = document.getElementById('ui-header-content'),
      footerContentEl = document.getElementById('ui-footer-content'),
      viewEl = document.getElementById('ui-view');
  
  //////////
  // methods
  var cs = function () {
    return UI.Console;
  };
  
  var runTests = function () {};

  //////////////////
  // init procedures

  /////////
  // public
  return {
    // properties
    consoleEl: consoleEl,
    consoleContentEl: consoleContentEl,
    panelEl: panelEl,
    panelTitleEl: panelTitleEl,
    panelContentEl: panelContentEl,
    overlayEl: overlayEl,
    headerEl: headerEl,
    headerContentEl: headerContentEl,
    footerContentEl: footerContentEl,
    viewEl: viewEl,
    
    // methods
    cs: cs,
    runTests: runTests
  };

}();
