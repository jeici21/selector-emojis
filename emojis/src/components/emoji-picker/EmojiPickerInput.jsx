import { useRef } from "react";
import EmojiPicker from "./EmojiPicker";

export default function EmojiPickerInput() {
    const refInput = useRef(null);//obteniendo referencia del input para usarlo como objeto javascript

    return <div className="container">
        <h1>Selector de emojis</h1>
        <input className="emoji-input" ref={refInput} />
        <EmojiPicker ref={refInput} />
    </div>
}