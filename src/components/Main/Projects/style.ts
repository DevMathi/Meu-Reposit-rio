
import styled from "styled-components";
import { Swiper } from 'swiper/react'

export const ProjectsStyle = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 21.6175rem;
  max-height: 25rem;
  margin-top: 1rem;

`
export const CarouselStyle = styled(Swiper)`
  .slide{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 0rem 1rem;
    div{
      img{
        width: 100%;
        display: block;
        border-radius: 1rem 1rem 0rem 0rem;
      }
      .project-description{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-flow: column;
        background-color: var(--background-color-black);
        padding: 1rem 0rem;
        border-radius: 0rem 0rem 1rem 1rem;
        letter-spacing: 1px;
        h1{
            font-size: 1.5rem;
        }
        .tecs{
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          margin: 1rem 0rem;
          p{
            color: #fff;
          }
        }
        .links{
          display: flex;
          justify-content: space-around;
          width: 100%;
          align-items: center;
        }
      }
    }
    
  }
`

