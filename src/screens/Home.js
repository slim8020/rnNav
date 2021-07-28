import React from 'react';
import {Button} from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    align-times: center;
`;

const StyledText = styled.Text`
    font-size: 30px;
    margin-bottom: 10px;
`;

const Home = () => {
    return(
        <Contaner>
            <StyledText>Home</StyledText>
            <Button title="go to the list screen"/>
        </Contaner>
    );
};

export default Home;