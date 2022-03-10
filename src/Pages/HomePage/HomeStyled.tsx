import styled from "@emotion/styled"

export const CenteredHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 90vh;
    h2{
    font-size: 12.5em;
    margin: 0;
    color: rgb(60, 57, 57);
    cursor:pointer;
}
`

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