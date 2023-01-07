import { forwardRef, useState, useRef, useEffect } from "react";
import { data as emojiList } from "./Data";//importando los emojis del objeto
import EmojiButton from "./EmojiButton";
import EmojiSearch from "./EmojiSearch";
import styles from "./EmojiPicker.module.scss";

export function EmojiPicker(props, inputRef) {
    const [isOpen, setIsOpen] = useState(false);
    const [emojis, setEmojis] = useState([...emojiList]);
    const containerRef = useRef(null);
    useEffect(() => {
        window.addEventListener('click', e => {
            if (!containerRef.current.contains(e.target)) {
                setIsOpen(false);
                setEmojis(emojiList);
            }
        });
    }, []);//cerrando la lista de emojis al dar clic fuera de él
    const handleClickOpen = () => {
        setIsOpen(!isOpen);//abriendo y cerrando la lista de emojis
    }
    const handleSearch = (e) => {
        const q = e.target.value;
        if (!!q) {//si q no está vacío
            const search = emojiList.filter((emoji) => {
                return (
                    emoji.name.toLowerCase().includes(q) ||
                    emoji.keywords.toLowerCase().includes(q)
                );
            });//si la búsqueda coincide con el nombre o keyword de un emoji
            setEmojis(search);
        } else {
            setEmojis(emojiList);
        }
    }

    const handleOnClickEmoji = (emoji) => {
        const cursorPos = inputRef.current.selectionStart;
        const text = inputRef.current.value;
        const prev = text.slice(0, cursorPos);
        const next = text.slice(cursorPos);
        inputRef.current.value = prev + emoji.symbol + next;
        inputRef.current.selectionStart = cursorPos + emoji.symbol.length;
        inputRef.current.selectionEnd = cursorPos + emoji.symbol.length;
        inputRef.current.focus();
    }//insertando emoji al dar click y ubicando el cursor a continuación

    return (
        <div ref={containerRef} className={styles.inputContainer}>
            <button onClick={handleClickOpen} className={styles.emojiPickerButton}>😊</button>
            {isOpen ? (
                <div className={styles.emojiPickerContainer}>
                    <EmojiSearch onSearch={handleSearch} />
                    <div className={styles.emojiList}>
                        {emojis.map((emoji) => (
                            <EmojiButton key={emoji.symbol} emoji={emoji} onClick={handleOnClickEmoji} />
                        ))}
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default forwardRef(EmojiPicker);//exportando referencia