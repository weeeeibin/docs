import React, { useEffect } from 'react';
import Lottie, { useLottie } from "lottie-react";
import Animation from './animation_lnh9xxe5.json';
import styles from './index.module.css';
import Layout from '@theme/Layout';

type Props = {}

export default function index({ }: Props) {

    const options = {
        animationData: Animation,
        autoplay: true,
    };

    const Lottie = useLottie(options);
    Lottie.setSpeed(0.8)

    useEffect(() => {
        setTimeout(() => {
            Lottie.pause();
        }, 4800)
    }, [])

    return (
        <Layout>
            <div className={styles.main}>
                <div className={styles.animation}>
                    {Lottie.View}
                </div>
            </div>
        </Layout>
    )
}