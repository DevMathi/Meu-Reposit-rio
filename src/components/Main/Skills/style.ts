import styled from "styled-components";

export const SkillsStyle = styled.div`
  max-width: 20.6175rem;
  margin-top: 7rem;
  ul{
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
    li{
      display: flex;
      flex-flow: column;
      align-items: center;
      padding: 1rem;
      min-width: 8rem;
      max-width: 8rem;
      svg{
        transition: transform 0.2s linear;
      }
      svg:hover{
        transform: scale(1.2);
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1023px){
    overflow: visible;
    max-width: 24rem;
    margin-top: 2rem;
    ul{
      display: flex;
      flex-flow: wrap;
    }
  }
  @media (min-width: 1023px){
    overflow: visible;
    max-width: 24rem;
    margin-top: 3rem;
    width: 40%;
    justify-content: center;
    align-items: center;
    ul{
      display: flex;
      flex-flow: wrap;
    }
    li{
      gap: 1rem;
    }
    

  }

`