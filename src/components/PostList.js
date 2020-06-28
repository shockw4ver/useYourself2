import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Cube } from './Flip'

export const PostItem = styled.section`
  display: inline-block;
  height: 100%;
  width: 300px;
  background-color: ${props => props.fill || '#666'};
  color: #fff;
  padding: 50px 40px;
  box-sizing: border-box;

  &:hover {
    ${Cube} {
      transform: rotateX(-180deg);

      #face1 {
        border-color: #dfdfdf;
      }
    }
  }
`

PostItem.Date = styled.span`
  display: inline-block;
  color: rgba(255,255,255,.6);
  font-size: 16px;
  margin-bottom: 15px;
`

PostItem.Title = styled.h2`
  color: #fff;
  font-size: 28px;
  margin-bottom: 20px;
`

PostItem.Excerpt = styled.p`
  color: rgba(255,255,255,.8);
  font-size: 18px;
`

export const PostList = ({ children }) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
      `}
    >
      {children}
    </div>
  )
}