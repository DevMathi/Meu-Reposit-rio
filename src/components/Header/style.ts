import { List } from "phosphor-react";
import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: transparent;
  padding: 2rem 1.5rem;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-family: "Poppins", sans-serif;
  letter-spacing: 2px;
  a{
    font-size: 1.5rem;
    border-radius: 5rem;
    padding: 1rem;
    border: 2px solid var(--purple);
    color: #fff;
    text-decoration: none;
  }
  a:hover{
    background-color: var(--purple);
  }
  a:visited{
    color: #fff;
  }

`
export const ListStyle = styled(List)`
  color: var(--purple);

`