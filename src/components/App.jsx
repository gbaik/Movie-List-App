class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movieList: [],
      movie: null
    };
  }

  componentDidMount() {
    this.handleMovieTextEntry('Test');
  }

  handleMovieTextEntry(event) {
    this.setState({
      movieList: {'title': event},
      movie: event
      // movieList: exampleMovieData
    });
  }

  render() {
    return (
      <div>
        <h1>{'Movie List'}</h1>
        <Nav onMovieTextEntry={this.handleMovieTextEntry.bind(this)}/>
        <div>
            <MovieList movieList={this.state.movieList}/>
        </div>
      </div>
    );
  }

} 

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
