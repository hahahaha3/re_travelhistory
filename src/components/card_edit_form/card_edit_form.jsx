import React, { useRef } from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({FileInput, card, updateCard, deleteCard}) => {
    const whereRef = useRef();
    const whoRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const dateRef = useRef();
    const messageRef = useRef();

    const {where, who, title, date, message, theme, fileName} = card;

    const onChange = (event) => {
        if(event.currentTarget == null) {
            return;
        }
        event.preventDefault();
        updateCard({
            ...card,
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    const onSubmit = () => {
        deleteCard(card);
    };

    const onFileChange = file => {
        updateCard({
            ...card,
            fileName: file.name,
            fileURL: file.url
        })
    }

    return(
        <form className={styles.form}>
            <input 
                ref={whereRef} 
                type="text" 
                name="where"
                className={styles.input} 
                value={where}
                onChange={onChange} />

            <input 
                ref={whoRef}
                type="text" 
                name="who"
                className={styles.input} 
                value={who}
                onChange={onChange} />

            <select
                ref={themeRef}
                className={styles.select}
                name="theme"
                value={theme}
                onChange={onChange}>
                    <option placeholder='light'>light</option>
                    <option placeholder='dark'>dark</option>
                    <option placeholder='colorful'>colorful</option>
            </select>

            <input
                ref={titleRef}
                type="text"
                name="title"
                className={styles.input}
                value={title}
                onChange={onChange} />

            <input 
                ref={dateRef}
                type="date" 
                className={styles.input}
                name="date" 
                value={date}
                onChange={onChange} />
            
            <textarea 
                ref={messageRef}
                className={styles.textarea}
                name="message"
                value={message}
                maxLength="1000"
                onChange={onChange} />
            
            <div className={styles.fileInput}>
                <FileInput name={fileName} onFileChange={onFileChange} />
            </div>
            <Button name="Delete" onClick={onSubmit} />
        </form>
    );
}

export default CardEditForm;