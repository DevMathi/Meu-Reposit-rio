import styled from "styled-components";

export const MainStyle = styled.main`
  padding: 8rem 1.5625rem;
  display: flex;
  align-items: center;
  flex-flow: column;
  h1{
      font-size: 2.5rem;
      color: var(--purple);
  }
  .about-me{
    display: flex;
    align-items: center;
    flex-flow: column;
    gap: 1rem;
    div{
      padding: 1rem;
    }
    img{
      width: 12rem;
      height: 12rem;
      border-radius: 6rem;
      border: 1px solid var(--purple);
      padding: 0.5rem;
    }
    p{
      font-size: 1.25rem;
      color: white;
      line-height: 1.7;
      text-align: center;
    }
    span{
      font-size: 2.5rem;
      color: var(--purple);
    }
  }
  .skills-container{
    margin: 10rem 0rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    .skills-title{
      display: flex;
      align-items: center;
      flex-flow: column;
      &::before{
          content: "";
          display: inline;
          background-color: #fff;
          width: 70vw;
          height: 1px;
          margin: 1rem 0;
        }
      &::after{
          content: "";
          margin: 1rem 0;
          display: inline;
          background-color: #fff;
          width: 70vw;
          height: 1px;
        }
    }
  }
  .projects-section{
    display: flex;
    flex-flow: column;
    align-items: center;
    .projects-title{
      display: flex;
      flex-flow: column;
      align-items: center;
      &::before{
        content: "";
        display: inline;
        background-color: #fff;
        width: 70vw;
        height: 1px;
        margin: 1rem 0;
      }
      &::after{
        content: "";
        margin: 1rem 0;
        display: inline;
        background-color: #fff;
        width: 70vw;
        height: 1px;
      }
    }
  }
  .contact{
    margin-top: 10rem;
    .contact-title{
      display: flex;
      align-items: center;
      flex-flow: column;
      &::before{
        content: "";
        display: inline;
        background-color: #fff;
        width: 70vw;
        height: 1px;
        margin: 1rem 0;
      }
      &::after{
        content: "";
        margin: 1rem 0;
        display: inline;
        background-color: #fff;
        width: 70vw;
        height: 1px;
      }
    }
    .contact-icons{
      display: flex;
      align-items: center;
      flex-flow:column;
      padding: 1rem;
      div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        margin: 1rem 0rem;
      }
      
    }
  }
`