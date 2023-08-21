import styled from 'styled-components'

export const StyledPageTemplate = styled.div<{theme: 'light' | 'dark'}>`
    height: calc(100vh - 50px);
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme === 'dark' ? '#3b3b3b' : ''};
    color: ${({theme}) => theme === 'dark' ? 'white' : ''};    
`