import { CharStatus, IChar } from "../../api/char.entity";
import { formatDate } from "../../helpers/formatDate";
import styles from "./CharCard.module.scss";

interface IProps {
  charData: IChar;
}

export const CharCard = ({ charData }: IProps) => {
  const { name, status, created, type, url } = charData;

  return (
    <a href={url} target="_blank" className={styles.card}>
      <h3 className={styles.name}>
        {name} - {type}
      </h3>

      <footer className={styles.footer}>
        <p>
          <span>Status: </span>
          <span
            className={
              status === CharStatus.ALIVE
                ? styles.alive
                : status === CharStatus.DEAD
                ? styles.dead
                : ""
            }
          >
            <b>{status}</b>
          </span>
        </p>

        <p>{`Created: ${formatDate(created)}`}</p>
      </footer>
    </a>
  );
};
