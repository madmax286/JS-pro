import styled from 'styled-components'

export const StyledModal = styled.div`
    position: fixed;
    left: 50%; 
    top: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    background-color: gainsboro;
    padding: 20px;

    div {
        width: 100%;
        height: 100%;
    }
`
// export const StyledModalWrapper = styled.div`
//     width: 70vw;
//     height: 70vh;
//     left: 50%; 
//     top: 50%;
//     background-color: gainsboro;
//     position: fixed;
//     transform: translate(-50%, -50%);
//     z-index: 10;
// `
