import { IChar } from "../../api/char.entity";
import { CharCard } from "../CharCard/CharCard";
import styles from "./ResultsBlock.module.scss";

interface IProps {
  data: IChar[] | null;
}

export const ResultsBlock = ({ data }: IProps) => {
  if (!data) {
    return;
  }
  if (!data.length) {
    return <p>No results match :(</p>;
  }

  return (
    <div className={styles.container}>
      {data.map((char) => (
        <CharCard key={char.id} charData={char} />
      ))}
    </div>
  );
};
