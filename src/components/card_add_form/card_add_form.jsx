import React, { useRef, useState } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css';

const CardAddForm = ({ FileInput, onAdd }) => {
    const formRef = useRef();
    const whereRef = useRef();
    const whoRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const dateRef = useRef();
    const messageRef = useRef();
    const [file, setFile] = useState({fileName: null, fileURL: null});

    const onFileChange = file => {
        setFile({
            fileName: file.name,
            fileURL: file.url
        })
    }

    const onSubmit = event => {
        event.preventDefault();
        const card = {
            id: Date.now(),
            where: whereRef.current.value || '',
            who: whoRef.current.value || '',
            theme: themeRef.current.value,
            title: titleRef.current.value || '',
            date: dateRef.current.value || '',
            message: messageRef.current.value || '',
            fileName: file.fileName || '',
            fileURL: file.fileURL || '',
        };
        formRef.current.reset();
        setFile({fileName: null, fileURL: null});
        onAdd(card);
    };

    return(
        <form ref={formRef} className={styles.form}>
            <input 
                ref={whereRef} 
                type="text" 
                name="where"
                className={styles.input} 
                placeholder="Where" />

            <input 
                ref={whoRef}
                type="text" 
                name="who"
                className={styles.input} 
                placeholder="With Whom" />

            <select 
                ref={themeRef} 
                className={styles.select} 
                name="theme" 
                placeholder="theme">
                <option placeholder="light">light</option>
                <option placeholder="dark">dark</option>
                <option placeholder="colorful">colorful</option>
            </select>
            
            <input
                ref={titleRef}
                type="text"
                name="title"
                className={styles.input}
                placeholder="Title" />

            <input 
                ref={dateRef}
                type="date" 
                className={styles.input}
                name="date" />
            
            <textarea 
                ref={messageRef}
                className={styles.textarea}
                name="message"
                maxLength="1000"
                placeholder="Message"></textarea>
            
            <div className={styles.fileInput}>
                <FileInput name={file.fileName} onFileChange={onFileChange}/>
            </div>
                <Button name="Add" onClick={onSubmit} />
        </form>
    )
};
export default CardAddForm;