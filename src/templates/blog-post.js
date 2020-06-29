import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'
import '../assets/md-themes/academic/academic.scss'

export default function({
  data: {
    markdownRemark
  }
}) {
  return (
    <Layout>
      <div className="ac">
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