import { createGlobalStyle } from "styled-components";
import { devices } from "styles/theme";


export const GlobalStyle = createGlobalStyle`
        * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }

        body {
            background-color: ${(props) => props.theme.BodyColor};
            color: ${(props) => props.theme.TextColor};
            transition: 0.5s; 
        }

        img {
            max-width: 100%;
            height: auto;
        }

        html {
            font-size: 10px;
            scroll-behavior: smooth;
        }

        a {
            text-decoration: none;
        }

        ul,li {
            list-style: none;
            color: ${(props) => props.theme.TitleColor};

            &:hover {
                color: ${(props) => props.theme.MikadoYellow};
            }
        }

        h1 {
            font-size: 3rem;

            @media ${devices.tablet}{
                font-size: 4rem;
            }

            @media ${devices.laptopS}{
                font-size: 4.5rem;
            }
        }

        h2 {
            font-size: 1.9rem;

            @media ${devices.tablet}{
                font-size: 2rem;
            }

            @media ${devices.laptop}{
                font-size: 2.5rem;
            }
        }

        p {
            font-size: 1.2rem;
            
            @media ${devices.tablet}{
                font-size: 1.4rem;
            }
            
            @media ${devices.laptop}{
                font-size: 1.6rem;
            }
        }
`