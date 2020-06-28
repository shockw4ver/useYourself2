import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'

export default function({
  data: {
    markdownRemark
  }
}) {
  return (
    <Layout>
      <div>
        <h1>{ markdownRemark.frontmatter.title }</h1>
        <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
      </div>
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