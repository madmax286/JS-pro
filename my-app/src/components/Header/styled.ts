import styled from "styled-components";

export const StyledHeader = styled.div<{theme: 'light' | 'dark' }>`
    display: flex;
    width: 100%;
    height: 50px;
    /* background-color: dodgerblue; */
    background-color: ${({theme}) => theme === 'dark' ? 'rgb(43, 43, 43)' : 'dodgerblue'};
    color: ${({theme}) => theme === 'dark' ? 'gainsboro' : ''};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    transition: 1s;

    .search-btn {
        border: none;
        position: absolute;
        right: 0; top: 0;
        height: 50px;
        width: 100px;
        flex-grow: 1;
        background-color: ${({theme}) => theme === 'dark' ? 'rgb(43, 43, 43)' : 'rgb(0, 106, 213)'};
        color: gainsboro;
        transition: 1s;
        font-size: 20px;

        &:hover {
            /* background-color: #3b3b3b; */
            border: 1px solid rgb(0, 106, 213);
        }
    }
`