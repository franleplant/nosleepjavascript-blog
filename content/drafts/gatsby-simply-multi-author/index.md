
//TODO mention that this is the more official or more ergonomic way of doing so https://www.gatsbyjs.org/docs/gatsby-config/#mapping-node-types


this could be anice way of showing that sometimes you can do things the quick and dirty way if tou understand
the underlying techs

## A simple way of supporting mulltiple authors

// blog post template (or any other thing that requires it)

    const authorId = this.props.data.markdownRemark.frontmatter.author
    const author = this.props.data.site.siteMetadata.authors.find(a => a.id === authorId)
    console.log(author)

    // gatsby config
module.exports = {
  pathPrefix: "/nosleepjavascript-blog",
  siteMetadata: {
    title: `NoSleep Javascript programming blog`,
    authors: [
      {id: "nacho", secret: "he likes maite"},
      {id: "franleplant", secret: "he likes burguers"},
    ],

    // blog post template
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        authors {
          id
          secret
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
      }
    }
  }
`
