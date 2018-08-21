var React = require('react');
var PropTypes = require('prop-types');

class Loading extends React.Component {
  render() {
    return (
      <p>
        {this.state.text}
      </p>
    )
  }
}

module.exports = Loading;