var React = require('react');
var PropTypes = require('prop-types');
var api = require('../utils/api');

function SelectLanguage(props) {
  var langauges = ['All', 'Java', 'JavaScript', 'CSS', 'Python', 'Ruby'];
  return (
    <ul className="languages">
      <p>Selected Language: {props.selectedLanguage}</p>
      {langauges.map(function (lang) {
        return (
          <li
            style={lang === props.selectedLanguage ? { color: '#d0021b' } : null}
            onClick={props.onSelect.bind(null, lang)}
            key={lang}>
            {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'All',
      repos: null
    }

    //bind this to Popular
    this.updateLanguage = this.updateLanguage.bind(this);

  }

  componentDidMount() {
    api.fetchPopularRepos(this.state.selectedLanguage)
      .then(function (repos) {
        console.log(repos)
      })
  }

  // event handler
  updateLanguage(lang) {
    this.setState(function () {
      return { selectedLanguage: lang }
    })
  }

  render() {
    // the goal is to map over a list of langauges
    return (
      <div>
        <SelectLanguage
          selectedLanguage={this.state.selectedLanguage}
          onSelect={this.updateLanguage}
        />
      </div>
    )
  }
}

module.exports = Popular;
