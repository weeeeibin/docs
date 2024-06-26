import React, { useEffect, useMemo, useState } from 'react';
import Lottie from "react-lottie";
import Animation from './4E3sZ47Efw.json';
import MobileAnimation from './animation_lnh9xxe5.json';
import styles from './index.module.css';

type Props = {}

export default function MyHome({ }: Props) {

    const [isPaused, setIsPaused] = useState(false);

    const isMobile = useMemo(() => {
        const ua = window.navigator.userAgent.toLowerCase();
        return /mobile|android|iphone|ipod|phone/i.test(ua);
    }, [])

    const options = {
        loop: true,
        autoplay: true,
        animationData: isMobile ? MobileAnimation : Animation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    useEffect(() => {
        if (isMobile) {
            setTimeout(() => {
                setIsPaused(true)
            }, 3200)
        }
    }, [isMobile])

    if (isMobile) {
        return (
            <>
                <div className={styles.mobile_main}>
                    <Lottie
                        options={options}
                        height="25vw"
                        width="85%"
                        isPaused={isPaused}
                    />
                </div>
            </>
        )
    }

    return (
        <>
            <div className={styles.main}>
                <div className={styles.title}>
                    {/* <h1>Lightweight, scalable animations for your websites and apps</h1> */}
                    <h1>
                        Bonjour,<br />
                        <span style={{ color: "#00ddb3" }}>恭喜你！发现了这个网站！</span>
                        <br />今天有没有在互联网<br />上发现什么神奇小玩意？
                    </h1>
                    <p>{window.navigator.userAgent}</p>
                    <button className={styles.button}>
                        <a href="/markdown/react">View Docs</a>
                    </button>
                </div>
                <div className={styles.animation}>
                    <Lottie
                        options={options}
                        height={600}
                        width={600}
                    />
                </div>
            </div>
        </>
    )
}