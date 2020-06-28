import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout"
import {
  PostList,
  PostItem
} from '../components/PostList'
import {
  Flip
} from '../components/Flip'
import {
  FlipTagWrapper,
  TagList,
  TagListItem
} from '../components/Tag'
import IconJavaScript from '../assets/javascript.svg'

export default function Home({ data }) {
  
  return (
    <Layout>
      <PostList>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PostItem key={node.id} fill={node.frontmatter.fill}>
            <PostItem.Date>
              {node.frontmatter.date}
            </PostItem.Date>

            <PostItem.Title>
              {node.frontmatter.title}
            </PostItem.Title>

            <PostItem.Excerpt>{node.excerpt}</PostItem.Excerpt>

            <TagList>
              {(node.frontmatter.tags || []).map((item, index) => (
                <TagListItem>
                  <Flip
                    height={index === 0 ? 100 : 50}
                    width={index === 0 ? 100 : 50}
                    delay={300 + 200 * index}
                    fillMap={{
                      1: node.frontmatter.fill,
                      2: node.frontmatter.fill,
                      3: '#fff',
                      4: node.frontmatter.fill,
                      5: node.frontmatter.fill,
                      6: node.frontmatter.fill
                    }}
                    contentMap={{
                      3: (
                        <FlipTagWrapper>
                          <img src={IconJavaScript} alt="javascript" />
                        </FlipTagWrapper>
                      )
                    }}
                  />
                </TagListItem>
              ))}
            </TagList>
          </PostItem>
        ))}
      </PostList>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            fill
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`