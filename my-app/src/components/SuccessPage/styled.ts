import styled from 'styled-components'

export const StyledForm = styled.form<{theme: 'light' | 'dark'}>`
    max-width: 500px;
    margin: 50px auto 0;
    background-color: ${({theme}) => theme === 'dark' ? '#3b3b3b' : ''};
    color: ${({theme}) => theme === 'dark' ? 'white' : ''};
`
