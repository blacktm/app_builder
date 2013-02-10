APP.Actions = function () {

  ///////////////
  // dependencies
  
  /////////////
  // properties
  var actions = [
    {
      name: '2d_fluid_simulation',
      display_name: '2D Fluid Simulation',
      description: 'Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      properties: {}
    },
    {
      name: 'bloom',
      display_name: 'Bloom',
      description: 'Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
      properties: {}
    },
    {
      name: 'city_lights',
      display_name: 'City Lights',
      description: 'Donec sed odio dui. Maecenas sed diam eget risus varius blandit sit amet non magna. Maecenas faucibus mollis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit.',
      properties: {}
    },
    {
      name: 'color_map',
      display_name: 'Color Map',
      description: 'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Maecenas faucibus mollis interdum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      properties: {}
    },
    {
      name: 'composite',
      display_name: 'Composite',
      description: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis.',
      properties: {}
    },
    {
      name: 'counter',
      display_name: 'Counter',
      description: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod.',
      properties: {}
    },
    {
      name: 'cube',
      display_name: 'Cube',
      description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui.',
      properties: {}
    }
  ];
  
  //////////
  // methods
  var getAll = function () {
    return actions;
  };
  
  var getAction = function (actionName) {
    for (var i = 0; i < actions.length; i++) {
      if (actions[i].name == actionName) {
        return actions[i];
      }
    }
  };
  
  //////////////////
  // init procedures
  
  /////////
  // public
  return {
    getAll: getAll,
    getAction: getAction
  };

}();
