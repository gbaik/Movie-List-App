class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.movie = exampleMovieData[0];
    this.movieList = exampleMovieData;
  }

  render() {
    return (
      <div>
        <h1>{'Movie List'}</h1>
        <div>
            <MovieList movieList={this.movieList} />
        </div>
      </div>
    );
  }

} 

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
