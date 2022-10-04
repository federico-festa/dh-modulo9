import React from 'react';
import '../assets/css/app.css';
import TopBar from '../components/TopBar.js';
import ContentRowTop from '../components/ContentRowTop.js';
import Footer from '../components/Footer.js';

function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                <ContentRowTop />
                <Footer />
            </div>
        </div>
    );
}

export default ContentWrapper;
