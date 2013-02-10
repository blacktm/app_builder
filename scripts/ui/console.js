UI.Console = function () {

  ///////////////
  // dependencies
  var cEl = UI.consoleEl,
      ccEl = UI.consoleContentEl,
      olEl = UI.overlayEl;
  
  /////////////
  // properties
  var buffer = [],
      entry = 1,
      max = 512;
      
  //////////
  // methods
  var read = function () {
    return buffer;
  };

  var write = function (msg, status) {
    switch (status) {
      case 'warning':
        msg = '<span class="red">' + msg + '</span>';
        break;
    }

    var d = new Date();
    d = '' + d.toDateString() + ', ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '.' + d.getMilliseconds();
    d = '<span class="time">[' + d + ']</span>' + '\t';
    msg = '<pre>' + d + msg + '</pre>';

    buffer.push(msg);
    entry++;
    if (buffer.length > max) {
      trim();
    }
    ccEl.innerHTML = lastEntry();
  };

  var lastEntry = function () {
    var i = buffer.length - 1;
    return buffer[i];
  };

  var length = function () {
    return buffer.length;
  };

  var trim = function () {
    var bLength = buffer.length;
    buffer = buffer.slice(bLength - max, bLength);
  };

  var toggle = function () {
    if (!cEl.classList.contains('open')) {
      cEl.classList.add('open');
      olEl.classList.add('active');
    } else {
      cEl.classList.remove('open');
      olEl.classList.remove('active');
    }
  
  //   if (open) {
  //     // Close the console
  //     cEl.animate({height: closedHeight}, 500);
  //     ccEl.fadeOut('fast', function () {
  //       ccEl.html(lastEntry());
  //     });
  //     ccEl.fadeIn();
  //     open = false;
  //     olEl.fadeOut(250);
  //     olEl.off('click');
  //   } else {
  //     // Open the console
  //     cEl.animate({height: openedHeight}, 500);
  //     ccEl.fadeOut('fast', function () {
  //       ccEl.html(buffer);
  // 
  //       // Add some space at the bottom
  //       ccEl.append('<br>');
  // 
  //       ccEl.show();
  //       ccEl.fadeTo(0, 0);
  //       cEl.scrollTop(ccEl.height());
  //       ccEl.fadeTo(500, 1);
  //     });
  //     open = true;
  //     olEl.fadeIn(250);
  //     olEl.on('click', toggleConsole);
  //   }
  };

  //////////////////
  // init procedures
  
  // cEl.on('click', toggleConsole);

  /////////
  // public
  return {
    read: read,
    write: write,
    length: length,
    lastEntry: lastEntry,
    toggle: toggle
  };

}();
