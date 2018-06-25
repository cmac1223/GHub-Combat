var React = require('react');

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All'
    }

    //bind this to Popular
    this.updateLanguage = this.updateLanguage.bind(this);

  }

  // event handler
  updateLanguage(lang) {
    this.setState(function () {
      return { selectedLanguage: lang }
    })
  }

  render() {
    // the goal is to map over a list of langauges
    var langauges = ['All', 'Java', 'JavaScript', 'CSS', 'Python', 'Ruby'];
    return (
      <ul className="languages">
        <p>Selected Language: {this.state.selectedLanguage}</p>
        {langauges.map(function (lang) {
          return (
            <li
              style={lang === this.state.selectedLanguage ? { color: '#d0021b' } : null}
              onClick={this.updateLanguage.bind(null, lang)}
              key={lang}>
              {lang}
            </li>
          )
        }, this)}
      </ul>
    )
  }
}

module.exports = Popular;