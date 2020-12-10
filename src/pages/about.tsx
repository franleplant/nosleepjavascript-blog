import React from "react";
import { graphql } from "gatsby";
import styled from "@emotion/styled";

import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Bio from "../components/About/Bio";
import { rhythm } from "../utils/typography";
import NewsletterSubscribe from "../components/NewsletterSubscribe";

import { IAboutPageQuery } from "../../graphql-types";
import BuyMeCoffee from "../components/BuyMeCoffee";
import Patreon from "../components/Patreon";

export interface IProps {
  location: any;
  data: IAboutPageQuery;
}

export default function AboutPage(props: IProps) {
  const { allAuthorYaml, site } = props.data;
  const authors = allAuthorYaml.nodes.filter(
    (author) => author.id === "franleplant"
  );

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
            NoSleep Javascript
            <br />
            <small>Don’t let programming keep you awake at night</small>
          </h1>
        </header>

        <h2>Who is behind NoSleep Javascript</h2>

        <p>
          Hi! My name is **Fran Guijarro** (a.k.a **franleplant**), I have a
          degree in Systems Engineering, I have been programming for the last
          decade a wide variety of solutions with different technologies such as
          Javascript, Typescript, Python, Rust et. al. I work professionally as
          a Senior Software developer and a Tech Lead focused on Javascript
          applications, both in the Front End with React and in the backend with
          Node.js. I am an aspiring wood worker. I define myself as a respectful
          contrarian, a tinkerer, a craftsman and as a healthy obsessed with
          figuring the world out.
        </p>

        <p>
          I have a passion for learning, figure stuff (like life) out and for
          the past couple of years I have developed a passion for teaching and
          helping others grow professionally in this weird environment that is
          Software Development.
        </p>

        <p>
          I talk about Software Development, tech culture and random stuff, join
          me in this amazing journey that is life.
        </p>

        <h2>Vision</h2>

        <p>
          Help others grow professionally and personally, and achieve their full
          potential.
        </p>

        <h2>Mission</h2>

        <p>
          To provide as much of the content for free as possible. To give back
          to the open source and software development community. To provide a
          holistic approach to software development, including both technical
          and soft skills. To provide mentorship programs for those that need
          more concrete guidance.
        </p>

        <h2>Values</h2>

        <p>
          Be open minded and reflective, be a practicing stoic. Provide as much
          content and resources for free as possible. Do not trash tools,
          evaluate them objectively, do not follow the herd, do not sustain
          cargo cult biases. Include soft skills in our work and in our content,
          be emotional intelligent. Observe your own emotions and empathise with
          others’. Keep learning about a wide variety of subjects. Keep in
          contact with beginners to identify where they struggle and how to help
          them.
        </p>

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
  );
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
`;

const BioContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
