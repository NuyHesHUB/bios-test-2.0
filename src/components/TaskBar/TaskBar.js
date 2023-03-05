import React from 'react';
import styled from 'styled-components'

const StyledTaskBar = styled.div`
    background-color: rgb(195, 199, 203);
    position: fixed;
    width: 100vw;
    bottom: 0;
    padding: 3px;
    height:  30px;
    box-shadow: 0 0 0 2px rgba(255, 255, 255);
`;

const TaskBar = () => {
    return (
        <StyledTaskBar>
            fdsa
        </StyledTaskBar>
    );
};

export default TaskBar;