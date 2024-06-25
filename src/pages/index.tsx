import React, { useEffect } from 'react';
import Lottie from "react-lottie";
import Animation from './4E3sZ47Efw.json';
import styles from './index.module.css';
import Layout from '@theme/Layout';

type Props = {}

export default function index({ }: Props) {

    const options = {
        loop: true,
        autoplay: true,
        animationData: Animation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Layout>
            <div className={styles.main}>
                <div className={styles.title}>
                    {/* <h1>Lightweight, scalable animations for your websites and apps</h1> */}
                    <h1>
                        Bonjour,<br />
                        <span style={{ color: "#00ddb3" }}>恭喜你！发现了这个网站！</span>
                        <br />今天有没有在互联网<br />上发现什么神奇小玩意？
                    </h1>
                    <p>{window.navigator.userAgent}</p>
                    <button className={styles.button}>Go To Docs</button>
                </div>
                <div className={styles.animation}>
                    <Lottie
                        options={options}
                        height={660}
                        width={660}
                    />
                </div>
            </div>
        </Layout>
    )
}