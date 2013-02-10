APP.Workflow = function () {

  ///////////////
  // dependencies
  var panel = UI.Panel,
      vEl = UI.viewEl;
  
  /////////////
  // properties
  var wfEl = document.getElementById('workflow'),
      wfName = '',
      wfDescription = '',
      wfOptions = {},
      wfActions = [],
      wfActionID = 0;

  //////////
  // methods
  var add = function (actionName) {
    var currentActionID = newActionID();
    
    wfActions.push({
      name: actionName,
      action_id: currentActionID,
      properties: {}
    });
    
    // The Action Element
    var actionEl = document.createElement('div');
    actionEl.classList.add('action');
    actionEl.dataset.action_id = currentActionID;
    actionEl.addEventListener('click', function(e) {
      if (this.classList.contains('selected')) {
        this.classList.remove('selected');
        APP.Library.setActive();
      } else {
        var c = actionEl.parentNode.children;
        for (var i = 0; i < c.length; i++) {
          c[i].classList.remove('selected');
        }
        actionEl.classList.add('selected');
        APP.Inspector.show(this.dataset.action_id);
      }
      e.stopPropagation();
    });
    wfEl.appendChild(actionEl);
    
    // The Header Element
    var headerEl = document.createElement('div');
    headerEl.classList.add('header');
    actionEl.appendChild(headerEl);
    
    // The Button Group Element
    var btnGroupEl = document.createElement('div');
    btnGroupEl.classList.add('btn-group');
    headerEl.appendChild(btnGroupEl);
    
    // The Remove Button Element
    var rmEl = document.createElement('div');
    rmEl.classList.add('btn');
    rmEl.innerHTML = 'x';
    rmEl.addEventListener('click', function (e) {
      remove(actionEl);
      e.stopPropagation();
    });
    btnGroupEl.appendChild(rmEl);
    
    // The Up Button Element
    var upEl = document.createElement('div');
    upEl.classList.add('btn');
    upEl.innerHTML = '&uarr;';
    upEl.addEventListener('click', function (e) {
      moveUp(actionEl);
      e.stopPropagation();
    });
    btnGroupEl.appendChild(upEl);
    
    // The Down Button Element
    var downEl = document.createElement('div');
    downEl.classList.add('btn');
    downEl.innerHTML = '&darr;';
    downEl.addEventListener('click', function (e) {
      moveDown(actionEl);
      e.stopPropagation();
    });
    btnGroupEl.appendChild(downEl);
    
    // The Action Title Element
    var titleEl = document.createElement('div');
    var action = APP.Actions.getAction(actionName);
    titleEl.innerHTML = action.display_name;
    headerEl.appendChild(titleEl);
    
    // Scroll to bottom of workflow
    wfEl.scrollTop = wfEl.scrollHeight;
  };
  
  var newActionID = function () {
    return wfActionID++;
  };
  
  var remove = function (el) {
    el.parentNode.removeChild(el);
    APP.Library.setActive();
  };
  
  var moveUp = function (el) {
    if (!el.previousElementSibling) {
      // The first element in the workflow
      return;
    }
    
    var parent = el.parentNode,
        previous = el.previousElementSibling;
    
    parent.removeChild(el);
    parent.insertBefore(el, previous);
  };
  
  var moveDown = function (el) {
    if (!el.nextElementSibling) {
      // The last element in the workflow
      return;
    }
    
    var parent = el.parentNode,
        next = el.nextElementSibling.nextElementSibling;
    
    parent.removeChild(el);
    parent.insertBefore(el, next);
  };

  var buildApp = function () {
    var app = {
      name: wfName,
      description: wfDescription,
      options: wfOptions,
      actions: wfActions
    };
    
    alert('NOT WORKING (YET)\n--------------------\n' +
          JSON.stringify(app, undefined, 2));
  };
  
  var getAction = function (actionID) {
    for (var i = 0; i < wfActions.length; i++) {
      if (wfActions[i].action_id == actionID) {
        return wfActions[i];
      }
    }
  };
  
  var unselectAll = function () {
    for (var i = 0; i < wfEl.children.length; i++) {
      wfEl.children[i].classList.remove('selected');
    }
  };

  //////////////////
  // init procedures
  vEl.addEventListener('click', function () {
    unselectAll();
    APP.Library.setActive();
  })

  /////////
  // public
  return {
    add: add,
    buildApp: buildApp,
    getAction: getAction,
    unselectAll: unselectAll
  };

}();
