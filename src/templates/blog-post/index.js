import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../layout'
import {
  Wrapper,
  Heading
} from './widgets'

export default function({
  data: {
    markdownRemark
  }
}) {
  return (
    <Layout>
      <Wrapper className="modest_markdown_theme">
        <Heading>{ markdownRemark.frontmatter.title }</Heading>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`