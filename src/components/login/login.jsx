import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';

const path = process.env.PUBLIC_URL;
const Login = ({authService}) => {
    const navigate = useNavigate();
    const gotoMaker = (userId) => {
        navigate({
            pathname: '/maker',
            state: {id: userId},
        });
    }

    const onLogin = event => {
        authService
            .login(event.currentTarget.textContent)
            .then(data => gotoMaker(data.user.uid));
    };

    useEffect(() => {
        authService.onAuthChange(user => {
            user && gotoMaker(user.uid);
        });
    });

    return(
        <section className={styles.login}>
            <video className={styles.video} src={`${path}/images/visual8.mp4`} autoPlay loop muted />
            <section className={styles.form}>
                <h1 className={styles.h1}>LOGIN</h1>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <button className={styles.button} onClick={onLogin}>Google</button>
                    </li>
                    <li>
                        <button className={styles.button} onClick={onLogin}>Github</button>
                    </li>
                </ul>
            </section>
        </section>
    )
};

export default Login;