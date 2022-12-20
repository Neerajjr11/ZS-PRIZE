import React, { useState } from 'react'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import SecondPage from '../components/SecondPage'
import Chatbot from '../components/Chatbot'
import ThirdPage from '../components/ThirdPage'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <div>
            <div style={{ background: " #929EB3" }}>
                <Navbar />
                <Main />
            </div>
            <Chatbot />
            <SecondPage />
            <ThirdPage />
            <Footer />
            {/* <Menu open={isOpen} setIsOpen={setIsOpen} /> */}

        </div>
    )
}

export default Home
