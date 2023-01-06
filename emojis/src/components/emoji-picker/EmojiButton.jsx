import styles from './EmojiPicker.module.scss'

export default function EmojiButton({ emoji, onClick }) {
    const handleClick = () => {
        onClick(emoji);
    }//exportando botón para cada emoji

    return <button className={styles.emojiButton} onClick={handleClick}>{emoji.symbol}</button>
}