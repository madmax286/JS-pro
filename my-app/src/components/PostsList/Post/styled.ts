import styled from 'styled-components';

const StyledPost = styled.div<{ id: number, posts: {id: number}[], theme: 'light' | 'dark' }>`
    position: relative;
    padding-bottom: 71px;
    border-bottom: 1px solid gainsboro;
    grid-area: ${({id, posts}) => {
        const index = posts.findIndex(post => post.id === id);
        if (index !== -1 && index < 6) {
            const row = Math.floor(index / 2) * 2 + 1; // Calculate the row position
            
            return `${row} / ${index % 2 + 1} / ${row + 2} / ${index % 2 + 2}`;
        }

        return ''; // Default grid area
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
        &:nth-child(n+7) h3 {
            font-size: 1.4vw;
        }
        &:hover {
            cursor: pointer;
            background-color: ${({theme}) => theme === 'dark' ? 'rgb(43, 43, 43)' : 'gainsboro'};
    }
`
const SyledPostDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const SyledTextSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const SyledPostFavorites = styled.div`
    display: flex;
    justify-content: center;
    width: 25%;
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
        &:active {
            transform: scale(1.2);
        }
    }
`

export {StyledPost, SyledPostDescription, SyledTextSection, SyledPostFavorites, SyledPostLike, SyledPostFooter}