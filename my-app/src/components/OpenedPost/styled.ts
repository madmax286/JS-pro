import styled from 'styled-components'

export const StyledOpenedPost = styled.div<{theme: 'light' | 'dark'}>`
    background-color: ${({theme}) => theme === 'dark' ? '#3b3b3b' : ''};
    color: ${({theme}) => theme === 'dark' ? 'gainsboro' : ''};

    a {
        color: ${({theme}) => theme === 'dark' ? 'gainsboro' : ''};
        align-self: flex-start;
    }

`
