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

        <NewsletterSubscribe />

        <section>
          <h2>Who is behind NoSleep Javascript</h2>

          <p>
            Hi! My name is <strong>Fran Guijarro</strong>
            (a.k.a{" "}
            <a href="https://github.com/franleplant" alt="franleplant's github">
              franleplant
            </a>
            ), I have a degree in Systems Engineering, I have been programming
            for the last decade a wide variety of solutions with different
            technologies such as Javascript, Typescript, Python, Rust et. al. I
            work professionally as a <strong>Senior Software developer</strong>{" "}
            and a <strong>Tech Lead</strong> focused on Javascript applications,
            both in the Front End with React and in the backend with Node.js. I
            am an aspiring wood worker. I define myself as a respectful
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
            I talk about Software Development, tech culture and random stuff,
            join me in this amazing journey that is life.
          </p>
        </section>

        <section>
          <h2>Vision</h2>

          <p>
            Help others grow professionally and personally, and achieve their
            full potential.
          </p>
        </section>

        <section>
          <h2>Mission</h2>

          <p>
            <ul>
              <li>To provide as much of the content for free as possible.</li>
              <li>
                To give back to the open source and software development
                community.
              </li>
              <li>
                To provide a holistic approach to software development,
                including both technical and soft skills.
              </li>
              <li>
                To provide mentorship programs for those that need more concrete
                guidance.
              </li>
            </ul>
          </p>
        </section>

        <section>
          <h2>Values</h2>

          <p>
            <ul>
              <li>Be open minded and reflective, be a practicing stoic.</li>
              <li>
                Provide as much content and resources for free as possible.
              </li>
              <li>
                Do not trash tools, evaluate them objectively, do not follow the
                herd, do not sustain cargo cult biases.
              </li>
              <li>
                Include soft skills in our work and in our content, be emotional
                intelligent.
              </li>
              <li>Observe your own emotions and empathise with others’.</li>
              <li>Keep learning about a wide variety of subjects.</li>
              <li>
                Keep in contact with beginners to identify where they struggle
                and how to help them.
              </li>
            </ul>
          </p>
        </section>

        <section>
          <h2>Support my work</h2>

          <BuyMeCoffee />
          <Patreon />
        </section>

        <BioContainer>
          {authors.map((author) => (
            <Bio author={author} key={author.id} />
          ))}
        </BioContainer>

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
