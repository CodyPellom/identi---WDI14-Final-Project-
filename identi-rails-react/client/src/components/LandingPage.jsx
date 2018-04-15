import React, { Component } from 'react';
import styled from 'styled-components'

const LandingStyle = styled.div`

#landing-image {
    margin-top: 5vh;
    border: solid 5.25px rgb(1, 73, 188);
    width: 85vw;
    height: 77vh;
  
}
`

class LandingPage extends Component {
    render() {
        return (
            <div>
                <LandingStyle>
                <img id="landing-image" src="https://i.imgur.com/6ZeXURM.gif" alt="landing-image"/>
                </LandingStyle>
            </div>
        );
    }
}

export default LandingPage;