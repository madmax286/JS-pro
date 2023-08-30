import styled from 'styled-components';

const StyledPost = styled.div<{ id: number, posts: {id: number}[]}>`
    position: relative;
    padding-bottom: 71px;
    border-bottom: 1px solid gainsboro;
    grid-area: ${({id, posts}) => {
        for (let i = 0; i < posts.length; i++) {                    
            if (id === posts[i].id) {
                return '1 / 1 / 3 / 2'
            }
            if (id === posts[i+1].id) {
                return '3 / 1 / 5 / 2'
            }
            if (id === posts[i+2].id) {
                return '5 / 1 / 7 / 2'
            }
            if (id === posts[i+3].id) {
                return '1 / 2 / 3 / 3'
            }
            if (id === posts[i+4].id) {
                return '3 / 2 / 5 / 3'
            }
            if (id === posts[i+5].id) {
                return '5 / 2 / 7 / 3'
            } else {
                return ''
            }
        }
    }};        
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
const SyledPostDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
        cursor: pointer;
        background-color: gainsboro;
    }
`
const SyledTextSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const SyledPostFavorites = styled.div`
    display: flex;
    justify-content: center;
    width: 15%;
    align-items: center;
`
const SyledPostLike = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-between;
`
const SyledPostFooter = styled.div`
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

export {StyledPost, SyledPostDescription, SyledTextSection, SyledPostFavorites, SyledPostLike, SyledPostFooter}