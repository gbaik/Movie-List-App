var MovieList = ({movieList}) => (
  <div>
    {movieList.map(movie =>
      <MovieListEntry movie={movie}/>
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
MovieList.propTypes = {
  movieList: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.MovieList = MovieList;
