import BrowserOnly from "@docusaurus/BrowserOnly";
import React from "react";
import Layout from "@theme/Layout";

export default function index() {
    return (
        <Layout>
            <BrowserOnly>
                {() => {
                    const MyHome = require('../MyHome').default;
                    return <MyHome />;
                }}
            </BrowserOnly>
        </Layout>
    )
}