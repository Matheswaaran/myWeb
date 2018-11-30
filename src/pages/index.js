import React from "react"
import '../css/Layout.css';
import IntroHeader from "../components/IntroHeader";
import AboutMe from "../components/AboutMe";
import Layout from "../components/Layout";

const App = () => (
    <Layout>
        <IntroHeader/>
        <AboutMe/>
    </Layout>
);

export default App;