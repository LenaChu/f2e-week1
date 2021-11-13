import "./App.css";
import PageContent from "./components/PageContent";
import "./stylesheets/styles.scss";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <div className="App">
      <SearchBox />
      <h1>Hello!</h1>
      <PageContent />
    </div>
  );
}

export default App;
