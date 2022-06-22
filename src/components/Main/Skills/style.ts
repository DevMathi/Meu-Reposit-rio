import styled from "styled-components";

export const SkillsStyle = styled.div`
  overflow: scroll;
  max-width: 20.6175rem;
  margin-top: 7rem;
  ul{
    display: flex;
    li{
      padding: 1rem;
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

  }

`