var List = React.createClass({
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
      <div>
        <Buttons names={this.props.names} />
        <button onClick={this.shuffle}>Shuffle</button>
      </div>
    );
  }
});

var Buttons = React.createClass({
  render: function() {
    var buttons = this.props.names.map(function(name) {
      return (
        <input type='checkbox' key={name}>
          {name}
        </input>
      );
    });

    return <div>{buttons}</div>
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

React.render(<List names={names} />, document.getElementById('mount-point'));