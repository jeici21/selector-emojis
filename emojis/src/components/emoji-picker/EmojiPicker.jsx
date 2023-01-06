import { forwardRef, useState } from "react";
import { data as emojiList } from "./Data";//importando los emojis del objeto

export function EmojiPicker(props, inputRef) {
    const [isOpen, setIsOpen] = useState(false);
    const [emojis, setEmojis] = useState(emojiList);
    const handleClickOpen = () => {
        setIsOpen(!isOpen);//abriendo y cerrando la lista de emojis
    }
    const EmojiPickerContainer = () => {
        return (
            <div>
                <input />
                <div>
                    {emojiList.map((emoji) => (
                        <div>{emoji.symbol}</div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div>
            <button onClick={handleClickOpen}>😒</button>
            {isOpen ? <EmojiPickerContainer /> : ""}
        </div>
    );
}

export default forwardRef(EmojiPicker);//exportando referencia