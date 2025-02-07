import { SearchBar } from "./components/SearchBar/SearchBar";
import styles from "./App.module.scss";
import { ResultsBlock } from "./components/ResultsBlock/ResultsBlock";
import { useState } from "react";
import { IChar } from "./api/char.entity";

function App() {
  const [data, setData] = useState<IChar[] | null>(null);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <SearchBar data={data} setData={setData} />
      </header>
      <main>
        <ResultsBlock data={data} />
      </main>
    </div>
  );
}

export default App;
