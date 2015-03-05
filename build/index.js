var List = React.createClass({displayName: "List",
  getInitialState: function() {
    return {
      names: []
    };
  },

  shuffle: function() {
    console.log(this);
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement(Buttons, {names: this.props.names}), 
        React.createElement("button", {onClick: this.shuffle}, "Shuffle")
      )
    );
  }
});

var Buttons = React.createClass({displayName: "Buttons",
  render: function() {
    var buttons = this.props.names.map(function(name) {
      return (
        React.createElement("input", {type: "checkbox", key: name}, 
          name
        )
      );
    });

    return React.createElement("div", null, buttons)
  }
});

var names = [
  'Dustin',
  'Jesse',
  'Brad',
  'Jon',
  'Joe',
  'Alex',
  'Nate'
];

React.render(React.createElement(List, {names: names}), document.getElementById('mount-point'));