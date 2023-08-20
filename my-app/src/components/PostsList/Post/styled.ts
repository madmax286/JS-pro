import styled from 'styled-components';

const StyledPost = styled.div<{ id: number}>`
    position: relative;
    padding-bottom: 71px;
    border-bottom: 1px solid gainsboro;    

        &:nth-child(n+7) {
            display: flex;
            flex-direction: column;        
        }

        &:nth-child(n+7) .post-description {
            flex-direction: row-reverse;
            justify-content: flex-start;
        }
        
        &:nth-child(n+7) img {
            width: 40%;
            align-self: flex-start;
            margin-left: 5px;
        }
`
const PostDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const TextSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const PostFavorites = styled.div`
    display: flex;
    justify-content: center;
    width: 15%;
    align-items: center;
`
const PostLike = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-between;
`
const PostFooter = styled.div`
    position: absolute;
    bottom: 0px;
    width: 100%;
    margin: 20px 0;
    display: flex;
    justify-content: space-between;

    span {
        font-size: 22px;

        &:hover {
            cursor: pointer;
        }
    }
`

export {StyledPost, PostDescription, TextSection, PostFavorites, PostLike, PostFooter}