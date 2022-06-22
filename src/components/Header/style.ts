import { List } from "phosphor-react";
import styled from "styled-components";

export const HeaderStyle = styled.header`
  padding: 1rem 1.5rem;
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
    ul{
      display: flex;
      justify-content: space-around;
      align-items: center;
      li{
        padding: 1rem;
      }
      a{
        color: #fff;
        transition: color 1s;
      }
      a:hover{
        color: #b785e2;
        filter: brightness(1.2);
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