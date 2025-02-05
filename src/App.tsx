import { SearchBar } from "./components/SearchBar/SearchBar";
import styles from "./App.module.scss";

function App() {
  return (
    <header className={styles.header}>
      <SearchBar />
    </header>
  );
}

export default App;
