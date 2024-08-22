import Row from "./Row";
import Nav from "./Nav";
import Banner from "./Banner";
import requests from "./requests";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title={"NETFLIX ORIGINAL"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={"TRENDING"} fetchUrl={requests.fetchTrending} />
      <Row title={"TOP RATED"} fetchUrl={requests.fetchTopRated} />
      <Row title={"ACTION MOVIES"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"COMEDY MOVIES"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"DOUCMENTARIES"} fetchUrl={requests.fetchDocumentaries} />
      <Row title={"HORROR MOVIES"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"ROMANCE MOVIES"} fetchUrl={requests.fetchRomanceMovies} />
    </div>
  );
}

export default App;
