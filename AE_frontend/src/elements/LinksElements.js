import styled from "styled-components"

export const Ul = styled.ul`
    display: ${({ toggleSidebar }) => toggleSidebar ? 'block' : 'none'};
    text-align: center;
    text-transform: capitalize;
    margin-bottom: 4rem;
    font-size: 1.5rem;

    li{
        margin-bottom: 3rem;
    }

    li a{
        color: ${props => props.theme.colors.grey5};
        letter-spacing: 0.2rem;
    }

    @media ${props => props.theme.breakpoints.mediumscreen}{
        margin: auto 0;
        display: flex;
        justify-content: flex-end;

        li{
            margin-bottom: 0rem;
        }
        
        li a{
            text-transform: capitalize;
            color: black;
            font-size: 1.2rem;
            margin-left: 1.5rem;
        }
    }

    @media ${props => props.theme.breakpoints.xlargescreen}{
        li a{
            font-size: 1.5rem;
        }
    }
`
