import { useState } from "react";
import styles from "./EmojiPicker.module.scss"

export default function EmojiSearch({ onSearch }) {
    const [value, setValue] = useState("");
    const handleChange = (e) => {
        setValue(e.target.value);
        onSearch(e);
    }
    return <input className={styles.search} type="text" onChange={handleChange} value={value} />;
}