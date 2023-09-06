import styled from 'styled-components'

export const StyledModal = styled.div<{theme: 'light' | 'dark' }>`
    position: fixed;
    left: 50%; 
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    background-color: ${({theme}) => theme === 'light' ? 'gainsboro' : 'rgb(43, 43, 43)'};
    padding: 40px;

    div {
        width: 70%;
        height: 100%;
        margin: auto;

        img {
            width: 100%;
        }
    }
`