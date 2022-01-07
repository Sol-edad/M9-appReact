import React from 'react';
import TopBar from './TopBar';
import Footer from './Footer';
import ContentRowTop from './ContentRowTop';

class ContentWrapper extends React.Component {
    render() { 
        return <div>
            <div id="content">

                <TopBar/>

                <ContentRowTop/>

                <Footer/>

			</div>
        </div>;
    }
}

export default ContentWrapper;