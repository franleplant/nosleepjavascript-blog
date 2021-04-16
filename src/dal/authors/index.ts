import { useStaticQuery, graphql } from "gatsby";
import {
  IAuthorFragmentFragment,
  IAllAuthorsQueryQuery,
} from "../../../graphql-types";

export { IAuthorFragmentFragment };

export function useGetAuthors(): Array<IAuthorFragmentFragment> {
  const data: IAllAuthorsQueryQuery = useStaticQuery(graphql`
    query AllAuthorsQuery {
      allAuthorYaml {
        nodes {
          bio
          id
          twitter
          github
        }
      }
    }
  `);

  return data.allAuthorYaml.nodes;
}

export function useFranleplant(): IAuthorFragmentFragment | undefined {
  const authors = useGetAuthors();
  return authors.find((author) => author.id === "franleplant");
}

// TODO cannot use this fragmet in the useGetAuthors query
// because gatsby breaks, need to report this as a bug
export const AuthorFragment = graphql`
  fragment AuthorFragment on AuthorYaml {
    bio
    id
    twitter
    github
  }
`;
