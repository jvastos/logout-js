import styled from 'styled-components';

export const ReposResultWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-bottom: 2vmax;

    @media (max-width: 768px) {
        flex-wrap: wrap-reverse;
    }
`;
