import { useStaticQuery, graphql } from "gatsby";
import {
  IAssetFragmentFragment,
  IAssetsQueryQuery,
} from "../../../graphql-types";

export { IAssetFragmentFragment };

export function useAssets(): Array<IAssetFragmentFragment> {
  const data: IAssetsQueryQuery = useStaticQuery(graphql`
    query AssetsQuery {
      allFile {
        edges {
          node {
            id
            publicURL
            base
            absolutePath
            dir
            relativeDirectory
            relativePath
          }
        }
      }
    }
  `);

  return data.allFile.edges.map((element) => element.node);
}

export const AssetFragment = graphql`
  fragment AssetFragment on File {
    id
    publicURL
    base
    absolutePath
    dir
    relativeDirectory
    relativePath
  }
`;
