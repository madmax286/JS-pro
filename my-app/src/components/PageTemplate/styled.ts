import styled from 'styled-components'

export const StyledPageTemplate = styled.div<{theme: 'light' | 'dark'}>`
    height: calc(100% - 50px);
    /* height: 100%; */
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    background-color: ${({theme}) => theme === 'dark' ? '#3b3b3b' : ''};
    color: ${({theme}) => theme === 'dark' ? 'gainsboro' : ''};
    transition: 1s;

        a {
            color: ${({theme}) => theme === 'dark' ? 'gainsboro' : ''};
        }
        main {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            padding: 20px 50px;
            background-color: ${({theme}) => theme === 'dark' ? '#3b3b3b' : ''};
        }
        footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 50px;
            border-top: 1px solid gainsboro;
            background-color: ${({theme}) => theme === 'dark' ? '#3b3b3b' : ''};
        }
`