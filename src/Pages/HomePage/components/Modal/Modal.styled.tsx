import styled from "@emotion/styled";

export const Portal = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background-color: rgba(0,0,0, .9);
    z-index: 100;
    img{
        cursor:pointer;
    }
`