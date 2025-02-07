import { ChangeEvent, useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";
import { useDeboubce } from "../../hooks/useDebounce";
import { apiService } from "../../api/api";
import { IChar } from "../../api/char.entity";

interface IProps {
  setData: React.Dispatch<React.SetStateAction<IChar[] | null>>;
  data: IChar[] | null;
}

export const SearchBar = ({ setData, data }: IProps) => {
  const [value, setValue] = useState("");
  const debouncedValue = useDeboubce(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiService.getCharacterByName(debouncedValue);

      if (data.success && Array.isArray(data.result)) {
        setData(data.result);
      }
    };

    if (debouncedValue.length > 3) {
      fetchData();
    }
  }, [debouncedValue]);

  return (
    <div className={styles.searchBox}>
      <input
        className={styles.searchBar}
        type="search"
        placeholder="Search characters..."
        autoFocus={true}
        value={value}
        onChange={(e) => handleChange(e)}
      />
      {data && (
        <p
          className={styles.resultInfo}
        >{`Found characters: ${data.length}`}</p>
      )}
    </div>
  );
};
