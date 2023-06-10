import { styled } from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FAFAFA;
    border: 1px solid #FAFAFA;
    border-radius: 20px;
    height: 62px;
    width: 80%;
    margin: 20px 0;
    color: #000;
    font-weight: 700;

    &: hover{
        background-color: #FAFAFA40;
        cursor: pointer;
        color: #FFF;
    }
`