import styled from 'styled-components'

export const StyledSearch = styled.div`
    /* margin-left: 50px; */
    /* margin-right: 10%; */
    height: 50px;
    width: 400px;
    position: absolute;
    top: 0;
    left: 50px;
    z-index: 10;

    input {
        height: 50px;
        margin: 0;
        padding-left: 20px;
        background-color:dodgerblue;
        box-sizing: border-box;

        &::placeholder {
            color: white;
        }
    }
`
export const StyledSearchResults = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 50px;
`
export const StyledResult = styled.div`
    display: flex;
    margin-top: 20px;
    padding-bottom: 40px;
    border-bottom: 1px solid gainsboro;
    position: relative;

    img {
        width: 20%;
    }
`
export const StyledResultText = styled.div`
    display: flex;
    flex-direction: column;

    h3 {
        margin: 0 20px 10px;
        font-weight: 500;
    }
    h3:first-child {
        color: darkgray;
    }
`
export const StyledResultFooter = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0; right: 0;
    padding-bottom: 10px;

    span:hover {
        cursor: pointer;
    }
`