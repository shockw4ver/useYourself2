import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  perspective: 800;
  perspective-origin: 50% 50%;
  overflow: hidden;
`

export const Cube = styled.div`
  position: relative;
  margin: auto;
  transform: rotateX(0) rotateY(0) rotateZ(0);
  transform-origin: center center -50px;
  transform-style: preserve-3d;
  transition: transform 300ms ease;
`

const CubeFace = styled.div`
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  height: 100px;
  width: 100px;
  background-color: ${props => props.fill || '#000'};
  box-sizing: border-box;
  border: 1px solid #dfdfdf;
  overflow: hidden;
  transition: all 300ms ease-out;

  &#face1 {
    border-color: transparent;
  }

  /* 左面 */
  &#face2 {
    transform-origin: left;
    transform: rotateY(90deg);
  }

  /* 对面 */
  &#face3 {
    transform: translateZ(-100px);
    border: none;

    .faceChild {
      height: 100%;
      width: 100%;
      transform-origin: center center center;
      transform: rotateX(180deg);
    }
  }

  /* 右面 */
  &#face4 {
    transform-origin: right;
    transform: rotateY(-90deg);
  }

  /* 上面 */
  &#face5 {
    transform-origin: top;
    transform: rotateX(-90deg);
  }

  /* 下面 */
  &#face6 {
    transform-origin: bottom;
    transform: rotateX(90deg);
  }
`

const cubeFaces = ['face1', 'face2', 'face3', 'face4', 'face5', 'face6']

export const Flip = ({
  height = 100,
  width = 100,
  delay = 0,
  fillMap,
  contentMap
}) => (
  <Wrapper>
    <Cube
      style={{ height, width, transitionDelay: delay + 'ms' }}
    >
      {cubeFaces.map((item, index) => (
        <CubeFace key={item} id={item} fill={fillMap[index + 1]} style={{ height, width }}>
          {contentMap[index + 1] && (
            <div className="faceChild">{ contentMap[index + 1] }</div>
          )}
        </CubeFace>
      ))}
    </Cube>
  </Wrapper>
)