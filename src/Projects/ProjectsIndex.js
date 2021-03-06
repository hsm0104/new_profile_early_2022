import React, { useEffect, useRef } from 'react'
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux';

import styled from "styled-components";

import {CaretRightOutlined} from "@ant-design/icons"

import kioskImg from "../images/kiosk_pic.png";
import tasioImg from "../images/tasio.png";
import monitoringImg from "../images/monitoring.png"

const StyledTitleBox = styled.div`
    text-align: left;
    font-size: 2rem;
    margin-bottom: 40px;
    >p::after{
        display: inline-block;
        content: "";
        height: 1px;
        background-color: rgba(255, 255, 255, 0.3);
        margin-left: 1rem;
    }
`;

const StyledColor = styled.span`
    color: #59e5c7;
`;

const StyledContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
`
const StyledOverlayExplanation = styled.div`
  height: 100%;
  padding: 25px; 
  background-color: #112240;
  position: absolute; 
  left:0;
  bottom: -100%;
  white-space: pre-wrap;
  transition: bottom 0.5s;
`;

const StyledDesContainer = styled.div`
  width: 300px;
  height: 40vh;
  margin: 10px;
  flex-shrink: 0;
  flex-grow: 0;
  overflow: hidden;
  position: relative;
  background-image: url(${kioskImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  border: 1px solid rgba(29, 70, 82, 1);
  &:hover >.content-box{
      background-color: rgba(29, 70, 82, 0.8);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 15px;
      box-sizing: border-box;
  }
  &:hover ${StyledOverlayExplanation}{
    bottom:0;
  }
  ${({id}) => id === 'tasio' && `
    background-image: url(${tasioImg});
  `}

${({id}) => id === 'monitor' && `
    background-image: url(${monitoringImg});
  `}
`;

const StyledButton = styled.button`
    background-color: transparent;
    height: 40px;
    line-height: 40px;
    border: 1px solid #fff;
    padding: 0 15px;
    border-radius: 4px;
    &:hover{
        border-color: #59e5c7;
    }
    > .link-style{
        color: #fff;
        &:hover{
            color: #59e5c7;
        }
    }
`;


const GoToButton = ({kioskAddress}) => {
  return(
    <StyledButton>
    <Link
    className='link-style'
    to="#"
    onClick={(e) => {
      window.location.href = kioskAddress;
      e.preventDefault();
    }}
    >
        ????????????
    </Link>
    </StyledButton>
  )
}

const ProjectsIndex = () => {
  const sectionRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: "SAVEOFFSETTOP", payload: {id: 2, top: sectionRef.current.offsetTop}})
  }, [sectionRef.current])
  return (
  <>
      <StyledTitleBox ref={sectionRef}>
        <p><StyledColor>03.</StyledColor>Projects</p>
      </StyledTitleBox>
      <StyledContainer>
        <StyledDesContainer id='monitor'>
          <div className='content-box'>
          <div >
            <StyledOverlayExplanation>
              ????????? ??????, ????????? ?????? ??? ?????? ?????? ????????? ??????????????? ??? ??? ?????? ?????? ?????? React Material ????????? ??????????????? ???????????? ????????????.{"\n"}{"\n"}
              <CaretRightOutlined />React, Redux, Leaflet, Material UI, Styled Component {"\n"}{"\n"}
              <GoToButton kioskAddress="https://saemihong940104.notion.site/conversion-of-Monitoring-System-74a06cbed4994c499108eb518a25675f"/>
            </StyledOverlayExplanation>
          </div>
          </div>
        </StyledDesContainer>
        <StyledDesContainer>
          <div className='content-box'>
          <div >
            <StyledOverlayExplanation>
              QR????????? ?????? ??? ??? ????????? ?????? ????????? ???????????? ?????? ?????? ?????? ??? React Material ????????? ??????????????? ??????????????????. {"\n"}{"\n"}
              ????????? : 1080*1920{"\n"}{"\n"}
              <CaretRightOutlined />React, Redux, React Query, Leaflet, Material UI, Styled Component {"\n"}{"\n"}
              <GoToButton kioskAddress="https://saemihong940104.notion.site/conversion-of-Kiosk-d3bc6f54cbbf46b282ab678da0322219/"/>
            </StyledOverlayExplanation>
          </div>
          </div>
        </StyledDesContainer>
        <StyledDesContainer id='tasio'>
          <div className='content-box'>
          <div >
            <StyledOverlayExplanation>
            Vue.js??? Vuetify??? ???????????? ??? ??? ????????? ?????? ?????? ?????? ????????????. {"\n"}{"\n"}
              <CaretRightOutlined />Vue, Vuetify {"\n"}{"\n"}
              <GoToButton kioskAddress="https://saemihong940104.notion.site/d1de934c100c4d5c9441e2e3f36c3be6"/>
            </StyledOverlayExplanation>
          </div>
          </div>
        </StyledDesContainer>
        </StyledContainer>
  </>
  )
}

export default ProjectsIndex