var React = require('react');

class Popular extends React.Component {
  render() {
    // the goal is to map over a list of langauges
    var langauges = ['All', 'Java', 'JavaScript', 'CSS', 'Python', 'Ruby'];
    return (
      <ul>
        {langauges.map(function (lang) {
          return (
            <li key={lang}>
              {lang}
            </li>
          )
        })}
      </ul>
    )
  }
}

module.exports = Popular;