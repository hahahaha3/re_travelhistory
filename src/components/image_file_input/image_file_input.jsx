import React, { useRef, useState } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({imageUploader, onFileChange, name}) => {
    const inputRef = useRef();
    const [loading, setLoading] = useState(false);

    const onButtonClick = (event) => {
        event.preventDefault();
        inputRef.current.click();
    };

    const onChange = async event => {
        setLoading(true);
        const uploaded = await imageUploader.upload(event.target.files[0]);
        setLoading(false);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        });
    }

    return <div className={styles.container}>
        <input 
            ref={inputRef} 
            type="file" 
            name="file"
            className={styles.input}
            accept='image/*'
            onChange={onChange}  />
            {!loading && <button className={`${styles.button} ${name ? styles.pink : styles.grey}`} onClick={onButtonClick}>
                {name || 'No file'}
                </button>}
                {loading && <div className={styles.loading}></div>}
    </div>
}

export default ImageFileInput;