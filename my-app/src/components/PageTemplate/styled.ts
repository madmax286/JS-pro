import styled from 'styled-components'

export const StyledPageTemplate = styled.div<{theme: 'light' | 'dark'}>`
    /* height: 100%; */
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme === 'dark' ? '#3b3b3b' : ''};
    color: ${({theme}) => theme === 'dark' ? 'gainsboro' : ''};

    a {
        color: ${({theme}) => theme === 'dark' ? 'gainsboro' : ''};
    }
`