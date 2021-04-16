import { useStaticQuery, graphql } from "gatsby";
import { ISiteSiteMetadata } from "../../../graphql-types";

export function useSiteMetadata(): ISiteSiteMetadata {
  const data = useStaticQuery(
    graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  return data.site.siteMetadata;
}
