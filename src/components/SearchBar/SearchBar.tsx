import { ChangeEvent, useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";
import { useDeboubce } from "../../hooks/useDebounce";
import { apiService } from "../../api/api";
import { IChar } from "../../api/char.entity";

export const SearchBar = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDeboubce(value);
  const [data, setData] = useState<IChar[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiService.getCharacterByName(debouncedValue);
      console.log(data);

      if (data.success && Array.isArray(data.result)) {
        setData(data.result);
        console.log(data.result);
      }
    };

    if (debouncedValue.length > 3) {
      fetchData();
    }
  }, [debouncedValue]);

  return (
    <input
      className={styles.searchBar}
      type="search"
      placeholder="Search characters..."
      autoFocus={true}
      value={value}
      onChange={(e) => handleChange(e)}
    />
  );
};
