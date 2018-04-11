import React, { Component } from 'react';
import styled from 'styled-components'

const LandingStyle = styled.div`
#landing-image {
    border: solid 5.25px rgb(135, 255, 201);
    width: 99.8vw;
    height: 92.6vh;
}
`

class LandingPage extends Component {
    render() {
        return (
            <div>
                <LandingStyle>
                <img id="landing-image" src="https://i.imgur.com/dCSzkJB.gif" alt="landing-image"/>
                </LandingStyle>
            </div>
        );
    }
}

export default LandingPage;