var Search = ({onMovieTextEntry}) => (
  <div>
    <input type="text" onChange={(e) => onMovieTextEntry(e.target.value)}/>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
