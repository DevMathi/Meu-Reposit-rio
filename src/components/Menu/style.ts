import styled, { createGlobalStyle } from "styled-components";

export const MenuStyle = createGlobalStyle`
  .open{
    transform: translateY(0);
    transition: transform 1s ;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-color-black);
    position: fixed;
    z-index: 100;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    button{
      position: fixed;
      top: 2.5rem;
      right: 1.5rem;
    }
    ul{
      color: white;
      font-size:1.5rem;
      display: flex;
      align-items:center;
      flex-flow: column;
      gap: 1.5rem;
      li{
        transition: opacity 20s;
        opacity: 2;
      }
      li:hover{
        color: var(--purple);
      }
    }
  }
  .closed{
    position: relative;
    transform: translateY(-100%) translateX(-100%);
    transition: transform 1s ;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--background-color-black);
    position: fixed;
    z-index: 100;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    div{
      display: none;
    }
    li{
      opacity: 0;
    }
  }

`