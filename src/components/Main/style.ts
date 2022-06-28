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
    .container-about{
      padding: 5rem 1rem;
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
    @media(min-width:1023px){
      padding-top: 3rem
      
    }
  }
  @media(min-width:1023px) and (max-width: 1400px){
      flex-flow: column;
      max-width: 60rem;
      padding: 0;
      margin: 0 auto;
  }
  @media(min-width: 1400px){
    flex-flow: column;
    max-width: 80rem;
    padding: 0;
    margin: 0 auto;

  }
  .container-about{
    display: flex;
    flex-flow: column;
    align-items: center;
  }
  .image-container{
    display: flex;
    align-items: center;
    flex-flow: column;
    .text-about-container{
      display: flex;
      align-items:center;
      flex-flow: column;
      gap: 4rem;
      padding: 2rem 1rem;  
      @media (min-width: 1023px){
        background: black;
        box-shadow: purple 53px -61px 0px -10px;
      }
    }
    @media(min-width:1023px){
      display: flex;
      flex-flow: row;
      padding: 6rem 1rem;
      justify-content: space-around;
      div{
        display: flex;
        justify-content: center;
        width: 50%;
      }
      .text-about-container{
        gap: 2rem;
        padding: 2rem;
        flex-flow: column;
        align-items: center;
      }
    }
  }
  .skills{
    width: 100%;
    @media (min-width: 1023px){
      margin: 15rem 0rem;
    }
  }
  .skills-container{
    margin-top: 10rem ;
    margin-bottom: 5rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    @media(min-width: 1023px){
      padding: 0;
      box-shadow: -60px 53px 0px -11px purple;
      border-radius: 0;
      background-color: black;
      margin-bottom: 20rem;
    }
    @media (min-width: 1400px){
      padding: 3rem 0rem;
    }
    .skills-title{
      display: flex;
      align-items: center;
      flex-flow: column;
      gap: 2rem;
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
    @media (min-width: 768px) and (max-width: 1023px){
      margin: 4rem 0rem;
    }
    @media(min-width:1023px){
      display: flex;
      flex-flow: row-reverse;
      justify-content: space-around;
      .skills-title{
        width: 38%;
        &::after{
          display: none;
        }
        &::before{
          display: none;
        }
      }
    }
  }
  .projects-section{
    display: flex;
    flex-flow: column;
    align-items: center;
    @media (max-width: 1400px){
      padding: 1rem 0rem;
    }
    padding: 3rem 0rem;
    border-radius: 2rem;
    @media (min-width: 1023px){
      box-shadow: 53px -61px 0px -10px purple;
      border-radius: 0;
      background-color: black;
    }
    .projects-title{
      display: flex;
      flex-flow: column;
      align-items: center;
      gap: 2rem;
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
    @media(min-width:1023px){
      width: 100%;
      display: flex;
      flex-flow: row;
      justify-content: space-around;
      .projects-title{
        width: 38%;
        &::before{
          display: none;
        }
        &::after{
          display: none;
        }
      }
    }
  }
  .contact{
    margin-top: 10rem;
    h1{
      font-size: 1.5rem;
    }
    .contact-email{
      padding: 2rem 0rem;
    }
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
        a{
          transition: all 0.3s linear;
        }
        a:hover{
          transform: scale(1.2);
        }
      }
      
    }
    @media(min-width:1023px){
      .contact-title{
        &::after{
          display: none;
        }
        &::before{
          display: none;
        }
      }
    }
  }
`