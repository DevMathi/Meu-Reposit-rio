import { List } from "phosphor-react";
import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-family: "Poppins", sans-serif;
  letter-spacing: 2px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  box-shadow: rgb(0 0 0 / 30%) 0px 10px 30px -10px;
  backdrop-filter: blur(10px);
  height: 88px;
  .link-curriculo{
    font-size: 1.5rem;
    border-radius: 5rem;
    padding: 1rem;
    border: 2px solid var(--purple);
    color: #fff;
    text-decoration: none;
  }
  .link-curriculo:hover{
    background-color: var(--purple);
  }
  .menu-desk{
    width: 42%;
    height: 100%;
    nav{
      height: 100%;
    }
    ul{
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li{
        display: flex;
        align-items: center;
        height: 100%;
        padding: 1rem;
        &:hover{
          border-bottom: 1px solid var(--purple);
        }
      }
      a{
        color: #fff;
      }
    }
  }
  @media(min-width:1023px){
    position: sticky;
    top: 0;
  }

`
export const ListStyle = styled(List)`
  color: var(--purple);

`