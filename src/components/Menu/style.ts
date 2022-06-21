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
    width:50vw;
    button{
      position: fixed;
      top: 2.5rem;
      right: 1.5rem;
    }
    ul{
      font-size:1.5rem;
      display: flex;
      align-items:center;
      flex-flow: column;
      gap: 1.5rem;
      li{
        border: 1px solid #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        width: 100%;
        transition: all 1s ;
        transform: translateX(0);
        transition: transform 1s;
        a{
          color: var(--purple);
          border: none;
          padding: 0;
        }
        a:active{
          color: none;
        }
      }
      li:hover{
        background-color: var(--purple);
        a{
          color: #fff;
        }
      }
    }
    
  }
  .closed{
    position: relative;
    transform: translateY(-100%) ;
    transition: transform 1.5s ;
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
    width: 50vw;
    button{
      position: fixed;
      top: 2.5rem;
      right: 1.5rem;
    }
    nav{
      ul{
        font-size:1.5rem;
        display: flex;
        align-items:center;
        flex-flow: column;
        gap: 1.5rem;
        li{
          border: 1px solid #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.5rem;
          width: 100%;
          transition: all 1s ;
          transform: translateX(-120%);
          transition: transform 0.5s;
        }
      }
    }
  }
  

`