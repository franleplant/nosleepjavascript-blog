import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Bio from "../components/About/Bio"
import { rhythm } from "../utils/typography"
import NewsletterSubscribe from "../components/NewsletterSubscribe"

import { IAboutPageQuery } from "../../graphql-types"
import BuyMeCoffee from "../components/BuyMeCoffee"
import Patreon from "../components/Patreon"

export interface IProps {
  location: any
  data: IAboutPageQuery
}

export default function AboutPage(props: IProps) {
  const { allAuthorYaml, site } = props.data
  const authors = allAuthorYaml.nodes.filter(
    (author) => author.id === "franleplant"
  )

  return (
    <Layout location={props.location} title={site.siteMetadata.title}>
      <SEO title="About" />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: rhythm(1),
            }}
          >
            About
          </h1>
        </header>

        <section>
          I am a passionate software developer with years of experience in the
          industry who loves creating products and services and helping other
          developers grow their careers. Become a Patreon to have mentoring
          sessions with me. Subscribe to receive exclusive content right into
          your inbox.
        </section>

        <section>
          <BuyMeCoffee />
          <Patreon />
        </section>

        {/*
        <section>
          <p>
            We are two Software Developers with degrees in Engineering that love
            to talk about programming, tech culture and other random stuff.
          </p>

          <p>
            We have been working in the industry for more than 7 years, and have
            experience with a range of programming languages, programming
            techniques and philosophies. We are passionate about reflecting on
            these and more subjects and hopefully, in the process, we can help
            others improve and move their careers forward.
          </p>
        </section>
          */}

        <BioContainer>
          {authors.map((author) => (
            <Bio author={author} key={author.id} />
          ))}
        </BioContainer>

        <NewsletterSubscribe />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer></footer>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
      }
    }
    allAuthorYaml {
      nodes {
        bio
        id
        twitter
        github
        profilepicture {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`

const BioContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
