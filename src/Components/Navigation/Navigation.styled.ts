import styled from '@emotion/styled';

export const NavigationDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 14px;
    border-bottom:1px solid rgba(194, 194, 194,0.2);
    box-shadow:0px 0 10px rgba(194, 194, 194,0.4);
    
`
export const Logo = styled.div`
    display:flex;
    margin-left:50px;
    img{
        width:64px;
    }

        text-decoration:none;

`


export const Navbar = styled.nav`
    display:flex;
    margin-left:50px;
        &>a{
        color: rgb(128, 122, 122);
        padding: 25px 20px;
        text-decoration: none;
        font-size: 1.5em;
            &:hover{
                background-color: rgba(238, 237, 237, 0.548);
    }
    }
`

export const FakeElem = styled.div`
    background:transparent;
    padding:20px;
`
