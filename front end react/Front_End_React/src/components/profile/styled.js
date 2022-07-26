import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    align-items:flex-start;
`;
export const WrapperInfoUsers = styled.div`
    display: flex;
    align-items:flex-start;
    flex-direction: column;
    justify-content: space-between;
    height: 12.5rem;
    margin-left:0.625rem;
    h1{
        font-size: 2rem;
        font-weight: bold;
    }
    h3{
        font-size: 1.125rem;
        font-weight: bold;
    }

    h4{
        font-size: 1rem;
        font-weight: bold;
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items:center;
    div{
        margin: 0.5rem;
        text-align: center;
    }
    
`;
export const WrapperUserName = styled.div`
    display: flex;
    align-items:center;
    margin-top: 0.5rem;
    h3{
        margin-right: 0.5rem;
    }
    a{
        text-decoration: none;
        color: turquoise;
        font-weight: 700;
        font-size: 1.125rem;
    }
`;
export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 12.5rem;
    margin: 0.625rem;
`;
