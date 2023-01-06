import { forwardRef, useState } from "react";
import { data as emojiList } from "./Data";//importando los emojis del objeto
import EmojiButton from "./EmojiButton";
import EmojiSearch from "./EmojiSearch";

export function EmojiPicker(props, inputRef) {
    const [isOpen, setIsOpen] = useState(false);
    const [emojis, setEmojis] = useState([...emojiList]);
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
    /*     const EmojiPickerContainer = () => {
    
            return (
                <div>
                    <EmojiSearch onSearch={handleSearch} />
                    <div>
                        {emojis.map((emoji) => (
                            <div key={emoji.symbol}>{emoji.symbol}</div>
                        ))}
                    </div>
                </div>
            );
        } */
    const handleOnClickEmoji = () => {
        
    }

    return (
        <div>
            <button onClick={handleClickOpen}>😒</button>
            {isOpen ? (
                <div>
                    <EmojiSearch onSearch={handleSearch} />
                    <div>
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