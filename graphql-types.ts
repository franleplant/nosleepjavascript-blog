export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type IAuthorYaml = INode & {
  id: Scalars['ID'];
  parent: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
  bio: Maybe<Scalars['String']>;
  profilepicture: Maybe<IFile>;
  twitter: Maybe<Scalars['String']>;
  github: Maybe<Scalars['String']>;
};

export type IAuthorYamlConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IAuthorYamlEdge>;
  nodes: Array<IAuthorYaml>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<IAuthorYamlGroupConnection>;
};


export type IAuthorYamlConnectionDistinctArgs = {
  field: IAuthorYamlFieldsEnum;
};


export type IAuthorYamlConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: IAuthorYamlFieldsEnum;
};

export type IAuthorYamlEdge = {
  next: Maybe<IAuthorYaml>;
  node: IAuthorYaml;
  previous: Maybe<IAuthorYaml>;
};

export type IAuthorYamlFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'bio' |
  'profilepicture___sourceInstanceName' |
  'profilepicture___absolutePath' |
  'profilepicture___relativePath' |
  'profilepicture___extension' |
  'profilepicture___size' |
  'profilepicture___prettySize' |
  'profilepicture___modifiedTime' |
  'profilepicture___accessTime' |
  'profilepicture___changeTime' |
  'profilepicture___birthTime' |
  'profilepicture___root' |
  'profilepicture___dir' |
  'profilepicture___base' |
  'profilepicture___ext' |
  'profilepicture___name' |
  'profilepicture___relativeDirectory' |
  'profilepicture___dev' |
  'profilepicture___mode' |
  'profilepicture___nlink' |
  'profilepicture___uid' |
  'profilepicture___gid' |
  'profilepicture___rdev' |
  'profilepicture___ino' |
  'profilepicture___atimeMs' |
  'profilepicture___mtimeMs' |
  'profilepicture___ctimeMs' |
  'profilepicture___atime' |
  'profilepicture___mtime' |
  'profilepicture___ctime' |
  'profilepicture___birthtime' |
  'profilepicture___birthtimeMs' |
  'profilepicture___blksize' |
  'profilepicture___blocks' |
  'profilepicture___publicURL' |
  'profilepicture___childrenMarkdownRemark' |
  'profilepicture___childrenMarkdownRemark___id' |
  'profilepicture___childrenMarkdownRemark___frontmatter___title' |
  'profilepicture___childrenMarkdownRemark___frontmatter___date' |
  'profilepicture___childrenMarkdownRemark___frontmatter___description' |
  'profilepicture___childrenMarkdownRemark___frontmatter___tags' |
  'profilepicture___childrenMarkdownRemark___frontmatter___seoFooter' |
  'profilepicture___childrenMarkdownRemark___frontmatter___todo' |
  'profilepicture___childrenMarkdownRemark___excerpt' |
  'profilepicture___childrenMarkdownRemark___rawMarkdownBody' |
  'profilepicture___childrenMarkdownRemark___fileAbsolutePath' |
  'profilepicture___childrenMarkdownRemark___fields___slug' |
  'profilepicture___childrenMarkdownRemark___html' |
  'profilepicture___childrenMarkdownRemark___htmlAst' |
  'profilepicture___childrenMarkdownRemark___excerptAst' |
  'profilepicture___childrenMarkdownRemark___headings' |
  'profilepicture___childrenMarkdownRemark___headings___id' |
  'profilepicture___childrenMarkdownRemark___headings___value' |
  'profilepicture___childrenMarkdownRemark___headings___depth' |
  'profilepicture___childrenMarkdownRemark___timeToRead' |
  'profilepicture___childrenMarkdownRemark___tableOfContents' |
  'profilepicture___childrenMarkdownRemark___wordCount___paragraphs' |
  'profilepicture___childrenMarkdownRemark___wordCount___sentences' |
  'profilepicture___childrenMarkdownRemark___wordCount___words' |
  'profilepicture___childrenMarkdownRemark___parent___id' |
  'profilepicture___childrenMarkdownRemark___parent___children' |
  'profilepicture___childrenMarkdownRemark___children' |
  'profilepicture___childrenMarkdownRemark___children___id' |
  'profilepicture___childrenMarkdownRemark___children___children' |
  'profilepicture___childrenMarkdownRemark___internal___content' |
  'profilepicture___childrenMarkdownRemark___internal___contentDigest' |
  'profilepicture___childrenMarkdownRemark___internal___description' |
  'profilepicture___childrenMarkdownRemark___internal___fieldOwners' |
  'profilepicture___childrenMarkdownRemark___internal___ignoreType' |
  'profilepicture___childrenMarkdownRemark___internal___mediaType' |
  'profilepicture___childrenMarkdownRemark___internal___owner' |
  'profilepicture___childrenMarkdownRemark___internal___type' |
  'profilepicture___childMarkdownRemark___id' |
  'profilepicture___childMarkdownRemark___frontmatter___title' |
  'profilepicture___childMarkdownRemark___frontmatter___date' |
  'profilepicture___childMarkdownRemark___frontmatter___description' |
  'profilepicture___childMarkdownRemark___frontmatter___tags' |
  'profilepicture___childMarkdownRemark___frontmatter___seoFooter' |
  'profilepicture___childMarkdownRemark___frontmatter___todo' |
  'profilepicture___childMarkdownRemark___excerpt' |
  'profilepicture___childMarkdownRemark___rawMarkdownBody' |
  'profilepicture___childMarkdownRemark___fileAbsolutePath' |
  'profilepicture___childMarkdownRemark___fields___slug' |
  'profilepicture___childMarkdownRemark___html' |
  'profilepicture___childMarkdownRemark___htmlAst' |
  'profilepicture___childMarkdownRemark___excerptAst' |
  'profilepicture___childMarkdownRemark___headings' |
  'profilepicture___childMarkdownRemark___headings___id' |
  'profilepicture___childMarkdownRemark___headings___value' |
  'profilepicture___childMarkdownRemark___headings___depth' |
  'profilepicture___childMarkdownRemark___timeToRead' |
  'profilepicture___childMarkdownRemark___tableOfContents' |
  'profilepicture___childMarkdownRemark___wordCount___paragraphs' |
  'profilepicture___childMarkdownRemark___wordCount___sentences' |
  'profilepicture___childMarkdownRemark___wordCount___words' |
  'profilepicture___childMarkdownRemark___parent___id' |
  'profilepicture___childMarkdownRemark___parent___children' |
  'profilepicture___childMarkdownRemark___children' |
  'profilepicture___childMarkdownRemark___children___id' |
  'profilepicture___childMarkdownRemark___children___children' |
  'profilepicture___childMarkdownRemark___internal___content' |
  'profilepicture___childMarkdownRemark___internal___contentDigest' |
  'profilepicture___childMarkdownRemark___internal___description' |
  'profilepicture___childMarkdownRemark___internal___fieldOwners' |
  'profilepicture___childMarkdownRemark___internal___ignoreType' |
  'profilepicture___childMarkdownRemark___internal___mediaType' |
  'profilepicture___childMarkdownRemark___internal___owner' |
  'profilepicture___childMarkdownRemark___internal___type' |
  'profilepicture___childrenImageSharp' |
  'profilepicture___childrenImageSharp___fixed___base64' |
  'profilepicture___childrenImageSharp___fixed___tracedSVG' |
  'profilepicture___childrenImageSharp___fixed___aspectRatio' |
  'profilepicture___childrenImageSharp___fixed___width' |
  'profilepicture___childrenImageSharp___fixed___height' |
  'profilepicture___childrenImageSharp___fixed___src' |
  'profilepicture___childrenImageSharp___fixed___srcSet' |
  'profilepicture___childrenImageSharp___fixed___srcWebp' |
  'profilepicture___childrenImageSharp___fixed___srcSetWebp' |
  'profilepicture___childrenImageSharp___fixed___originalName' |
  'profilepicture___childrenImageSharp___resolutions___base64' |
  'profilepicture___childrenImageSharp___resolutions___tracedSVG' |
  'profilepicture___childrenImageSharp___resolutions___aspectRatio' |
  'profilepicture___childrenImageSharp___resolutions___width' |
  'profilepicture___childrenImageSharp___resolutions___height' |
  'profilepicture___childrenImageSharp___resolutions___src' |
  'profilepicture___childrenImageSharp___resolutions___srcSet' |
  'profilepicture___childrenImageSharp___resolutions___srcWebp' |
  'profilepicture___childrenImageSharp___resolutions___srcSetWebp' |
  'profilepicture___childrenImageSharp___resolutions___originalName' |
  'profilepicture___childrenImageSharp___fluid___base64' |
  'profilepicture___childrenImageSharp___fluid___tracedSVG' |
  'profilepicture___childrenImageSharp___fluid___aspectRatio' |
  'profilepicture___childrenImageSharp___fluid___src' |
  'profilepicture___childrenImageSharp___fluid___srcSet' |
  'profilepicture___childrenImageSharp___fluid___srcWebp' |
  'profilepicture___childrenImageSharp___fluid___srcSetWebp' |
  'profilepicture___childrenImageSharp___fluid___sizes' |
  'profilepicture___childrenImageSharp___fluid___originalImg' |
  'profilepicture___childrenImageSharp___fluid___originalName' |
  'profilepicture___childrenImageSharp___fluid___presentationWidth' |
  'profilepicture___childrenImageSharp___fluid___presentationHeight' |
  'profilepicture___childrenImageSharp___sizes___base64' |
  'profilepicture___childrenImageSharp___sizes___tracedSVG' |
  'profilepicture___childrenImageSharp___sizes___aspectRatio' |
  'profilepicture___childrenImageSharp___sizes___src' |
  'profilepicture___childrenImageSharp___sizes___srcSet' |
  'profilepicture___childrenImageSharp___sizes___srcWebp' |
  'profilepicture___childrenImageSharp___sizes___srcSetWebp' |
  'profilepicture___childrenImageSharp___sizes___sizes' |
  'profilepicture___childrenImageSharp___sizes___originalImg' |
  'profilepicture___childrenImageSharp___sizes___originalName' |
  'profilepicture___childrenImageSharp___sizes___presentationWidth' |
  'profilepicture___childrenImageSharp___sizes___presentationHeight' |
  'profilepicture___childrenImageSharp___gatsbyImageData' |
  'profilepicture___childrenImageSharp___original___width' |
  'profilepicture___childrenImageSharp___original___height' |
  'profilepicture___childrenImageSharp___original___src' |
  'profilepicture___childrenImageSharp___resize___src' |
  'profilepicture___childrenImageSharp___resize___tracedSVG' |
  'profilepicture___childrenImageSharp___resize___width' |
  'profilepicture___childrenImageSharp___resize___height' |
  'profilepicture___childrenImageSharp___resize___aspectRatio' |
  'profilepicture___childrenImageSharp___resize___originalName' |
  'profilepicture___childrenImageSharp___id' |
  'profilepicture___childrenImageSharp___parent___id' |
  'profilepicture___childrenImageSharp___parent___children' |
  'profilepicture___childrenImageSharp___children' |
  'profilepicture___childrenImageSharp___children___id' |
  'profilepicture___childrenImageSharp___children___children' |
  'profilepicture___childrenImageSharp___internal___content' |
  'profilepicture___childrenImageSharp___internal___contentDigest' |
  'profilepicture___childrenImageSharp___internal___description' |
  'profilepicture___childrenImageSharp___internal___fieldOwners' |
  'profilepicture___childrenImageSharp___internal___ignoreType' |
  'profilepicture___childrenImageSharp___internal___mediaType' |
  'profilepicture___childrenImageSharp___internal___owner' |
  'profilepicture___childrenImageSharp___internal___type' |
  'profilepicture___childImageSharp___fixed___base64' |
  'profilepicture___childImageSharp___fixed___tracedSVG' |
  'profilepicture___childImageSharp___fixed___aspectRatio' |
  'profilepicture___childImageSharp___fixed___width' |
  'profilepicture___childImageSharp___fixed___height' |
  'profilepicture___childImageSharp___fixed___src' |
  'profilepicture___childImageSharp___fixed___srcSet' |
  'profilepicture___childImageSharp___fixed___srcWebp' |
  'profilepicture___childImageSharp___fixed___srcSetWebp' |
  'profilepicture___childImageSharp___fixed___originalName' |
  'profilepicture___childImageSharp___resolutions___base64' |
  'profilepicture___childImageSharp___resolutions___tracedSVG' |
  'profilepicture___childImageSharp___resolutions___aspectRatio' |
  'profilepicture___childImageSharp___resolutions___width' |
  'profilepicture___childImageSharp___resolutions___height' |
  'profilepicture___childImageSharp___resolutions___src' |
  'profilepicture___childImageSharp___resolutions___srcSet' |
  'profilepicture___childImageSharp___resolutions___srcWebp' |
  'profilepicture___childImageSharp___resolutions___srcSetWebp' |
  'profilepicture___childImageSharp___resolutions___originalName' |
  'profilepicture___childImageSharp___fluid___base64' |
  'profilepicture___childImageSharp___fluid___tracedSVG' |
  'profilepicture___childImageSharp___fluid___aspectRatio' |
  'profilepicture___childImageSharp___fluid___src' |
  'profilepicture___childImageSharp___fluid___srcSet' |
  'profilepicture___childImageSharp___fluid___srcWebp' |
  'profilepicture___childImageSharp___fluid___srcSetWebp' |
  'profilepicture___childImageSharp___fluid___sizes' |
  'profilepicture___childImageSharp___fluid___originalImg' |
  'profilepicture___childImageSharp___fluid___originalName' |
  'profilepicture___childImageSharp___fluid___presentationWidth' |
  'profilepicture___childImageSharp___fluid___presentationHeight' |
  'profilepicture___childImageSharp___sizes___base64' |
  'profilepicture___childImageSharp___sizes___tracedSVG' |
  'profilepicture___childImageSharp___sizes___aspectRatio' |
  'profilepicture___childImageSharp___sizes___src' |
  'profilepicture___childImageSharp___sizes___srcSet' |
  'profilepicture___childImageSharp___sizes___srcWebp' |
  'profilepicture___childImageSharp___sizes___srcSetWebp' |
  'profilepicture___childImageSharp___sizes___sizes' |
  'profilepicture___childImageSharp___sizes___originalImg' |
  'profilepicture___childImageSharp___sizes___originalName' |
  'profilepicture___childImageSharp___sizes___presentationWidth' |
  'profilepicture___childImageSharp___sizes___presentationHeight' |
  'profilepicture___childImageSharp___gatsbyImageData' |
  'profilepicture___childImageSharp___original___width' |
  'profilepicture___childImageSharp___original___height' |
  'profilepicture___childImageSharp___original___src' |
  'profilepicture___childImageSharp___resize___src' |
  'profilepicture___childImageSharp___resize___tracedSVG' |
  'profilepicture___childImageSharp___resize___width' |
  'profilepicture___childImageSharp___resize___height' |
  'profilepicture___childImageSharp___resize___aspectRatio' |
  'profilepicture___childImageSharp___resize___originalName' |
  'profilepicture___childImageSharp___id' |
  'profilepicture___childImageSharp___parent___id' |
  'profilepicture___childImageSharp___parent___children' |
  'profilepicture___childImageSharp___children' |
  'profilepicture___childImageSharp___children___id' |
  'profilepicture___childImageSharp___children___children' |
  'profilepicture___childImageSharp___internal___content' |
  'profilepicture___childImageSharp___internal___contentDigest' |
  'profilepicture___childImageSharp___internal___description' |
  'profilepicture___childImageSharp___internal___fieldOwners' |
  'profilepicture___childImageSharp___internal___ignoreType' |
  'profilepicture___childImageSharp___internal___mediaType' |
  'profilepicture___childImageSharp___internal___owner' |
  'profilepicture___childImageSharp___internal___type' |
  'profilepicture___childrenAuthorYaml' |
  'profilepicture___childrenAuthorYaml___id' |
  'profilepicture___childrenAuthorYaml___parent___id' |
  'profilepicture___childrenAuthorYaml___parent___children' |
  'profilepicture___childrenAuthorYaml___children' |
  'profilepicture___childrenAuthorYaml___children___id' |
  'profilepicture___childrenAuthorYaml___children___children' |
  'profilepicture___childrenAuthorYaml___internal___content' |
  'profilepicture___childrenAuthorYaml___internal___contentDigest' |
  'profilepicture___childrenAuthorYaml___internal___description' |
  'profilepicture___childrenAuthorYaml___internal___fieldOwners' |
  'profilepicture___childrenAuthorYaml___internal___ignoreType' |
  'profilepicture___childrenAuthorYaml___internal___mediaType' |
  'profilepicture___childrenAuthorYaml___internal___owner' |
  'profilepicture___childrenAuthorYaml___internal___type' |
  'profilepicture___childrenAuthorYaml___bio' |
  'profilepicture___childrenAuthorYaml___profilepicture___sourceInstanceName' |
  'profilepicture___childrenAuthorYaml___profilepicture___absolutePath' |
  'profilepicture___childrenAuthorYaml___profilepicture___relativePath' |
  'profilepicture___childrenAuthorYaml___profilepicture___extension' |
  'profilepicture___childrenAuthorYaml___profilepicture___size' |
  'profilepicture___childrenAuthorYaml___profilepicture___prettySize' |
  'profilepicture___childrenAuthorYaml___profilepicture___modifiedTime' |
  'profilepicture___childrenAuthorYaml___profilepicture___accessTime' |
  'profilepicture___childrenAuthorYaml___profilepicture___changeTime' |
  'profilepicture___childrenAuthorYaml___profilepicture___birthTime' |
  'profilepicture___childrenAuthorYaml___profilepicture___root' |
  'profilepicture___childrenAuthorYaml___profilepicture___dir' |
  'profilepicture___childrenAuthorYaml___profilepicture___base' |
  'profilepicture___childrenAuthorYaml___profilepicture___ext' |
  'profilepicture___childrenAuthorYaml___profilepicture___name' |
  'profilepicture___childrenAuthorYaml___profilepicture___relativeDirectory' |
  'profilepicture___childrenAuthorYaml___profilepicture___dev' |
  'profilepicture___childrenAuthorYaml___profilepicture___mode' |
  'profilepicture___childrenAuthorYaml___profilepicture___nlink' |
  'profilepicture___childrenAuthorYaml___profilepicture___uid' |
  'profilepicture___childrenAuthorYaml___profilepicture___gid' |
  'profilepicture___childrenAuthorYaml___profilepicture___rdev' |
  'profilepicture___childrenAuthorYaml___profilepicture___ino' |
  'profilepicture___childrenAuthorYaml___profilepicture___atimeMs' |
  'profilepicture___childrenAuthorYaml___profilepicture___mtimeMs' |
  'profilepicture___childrenAuthorYaml___profilepicture___ctimeMs' |
  'profilepicture___childrenAuthorYaml___profilepicture___atime' |
  'profilepicture___childrenAuthorYaml___profilepicture___mtime' |
  'profilepicture___childrenAuthorYaml___profilepicture___ctime' |
  'profilepicture___childrenAuthorYaml___profilepicture___birthtime' |
  'profilepicture___childrenAuthorYaml___profilepicture___birthtimeMs' |
  'profilepicture___childrenAuthorYaml___profilepicture___blksize' |
  'profilepicture___childrenAuthorYaml___profilepicture___blocks' |
  'profilepicture___childrenAuthorYaml___profilepicture___publicURL' |
  'profilepicture___childrenAuthorYaml___profilepicture___childrenMarkdownRemark' |
  'profilepicture___childrenAuthorYaml___profilepicture___childrenImageSharp' |
  'profilepicture___childrenAuthorYaml___profilepicture___childrenAuthorYaml' |
  'profilepicture___childrenAuthorYaml___profilepicture___id' |
  'profilepicture___childrenAuthorYaml___profilepicture___children' |
  'profilepicture___childrenAuthorYaml___twitter' |
  'profilepicture___childrenAuthorYaml___github' |
  'profilepicture___childAuthorYaml___id' |
  'profilepicture___childAuthorYaml___parent___id' |
  'profilepicture___childAuthorYaml___parent___children' |
  'profilepicture___childAuthorYaml___children' |
  'profilepicture___childAuthorYaml___children___id' |
  'profilepicture___childAuthorYaml___children___children' |
  'profilepicture___childAuthorYaml___internal___content' |
  'profilepicture___childAuthorYaml___internal___contentDigest' |
  'profilepicture___childAuthorYaml___internal___description' |
  'profilepicture___childAuthorYaml___internal___fieldOwners' |
  'profilepicture___childAuthorYaml___internal___ignoreType' |
  'profilepicture___childAuthorYaml___internal___mediaType' |
  'profilepicture___childAuthorYaml___internal___owner' |
  'profilepicture___childAuthorYaml___internal___type' |
  'profilepicture___childAuthorYaml___bio' |
  'profilepicture___childAuthorYaml___profilepicture___sourceInstanceName' |
  'profilepicture___childAuthorYaml___profilepicture___absolutePath' |
  'profilepicture___childAuthorYaml___profilepicture___relativePath' |
  'profilepicture___childAuthorYaml___profilepicture___extension' |
  'profilepicture___childAuthorYaml___profilepicture___size' |
  'profilepicture___childAuthorYaml___profilepicture___prettySize' |
  'profilepicture___childAuthorYaml___profilepicture___modifiedTime' |
  'profilepicture___childAuthorYaml___profilepicture___accessTime' |
  'profilepicture___childAuthorYaml___profilepicture___changeTime' |
  'profilepicture___childAuthorYaml___profilepicture___birthTime' |
  'profilepicture___childAuthorYaml___profilepicture___root' |
  'profilepicture___childAuthorYaml___profilepicture___dir' |
  'profilepicture___childAuthorYaml___profilepicture___base' |
  'profilepicture___childAuthorYaml___profilepicture___ext' |
  'profilepicture___childAuthorYaml___profilepicture___name' |
  'profilepicture___childAuthorYaml___profilepicture___relativeDirectory' |
  'profilepicture___childAuthorYaml___profilepicture___dev' |
  'profilepicture___childAuthorYaml___profilepicture___mode' |
  'profilepicture___childAuthorYaml___profilepicture___nlink' |
  'profilepicture___childAuthorYaml___profilepicture___uid' |
  'profilepicture___childAuthorYaml___profilepicture___gid' |
  'profilepicture___childAuthorYaml___profilepicture___rdev' |
  'profilepicture___childAuthorYaml___profilepicture___ino' |
  'profilepicture___childAuthorYaml___profilepicture___atimeMs' |
  'profilepicture___childAuthorYaml___profilepicture___mtimeMs' |
  'profilepicture___childAuthorYaml___profilepicture___ctimeMs' |
  'profilepicture___childAuthorYaml___profilepicture___atime' |
  'profilepicture___childAuthorYaml___profilepicture___mtime' |
  'profilepicture___childAuthorYaml___profilepicture___ctime' |
  'profilepicture___childAuthorYaml___profilepicture___birthtime' |
  'profilepicture___childAuthorYaml___profilepicture___birthtimeMs' |
  'profilepicture___childAuthorYaml___profilepicture___blksize' |
  'profilepicture___childAuthorYaml___profilepicture___blocks' |
  'profilepicture___childAuthorYaml___profilepicture___publicURL' |
  'profilepicture___childAuthorYaml___profilepicture___childrenMarkdownRemark' |
  'profilepicture___childAuthorYaml___profilepicture___childrenImageSharp' |
  'profilepicture___childAuthorYaml___profilepicture___childrenAuthorYaml' |
  'profilepicture___childAuthorYaml___profilepicture___id' |
  'profilepicture___childAuthorYaml___profilepicture___children' |
  'profilepicture___childAuthorYaml___twitter' |
  'profilepicture___childAuthorYaml___github' |
  'profilepicture___id' |
  'profilepicture___parent___id' |
  'profilepicture___parent___parent___id' |
  'profilepicture___parent___parent___children' |
  'profilepicture___parent___children' |
  'profilepicture___parent___children___id' |
  'profilepicture___parent___children___children' |
  'profilepicture___parent___internal___content' |
  'profilepicture___parent___internal___contentDigest' |
  'profilepicture___parent___internal___description' |
  'profilepicture___parent___internal___fieldOwners' |
  'profilepicture___parent___internal___ignoreType' |
  'profilepicture___parent___internal___mediaType' |
  'profilepicture___parent___internal___owner' |
  'profilepicture___parent___internal___type' |
  'profilepicture___children' |
  'profilepicture___children___id' |
  'profilepicture___children___parent___id' |
  'profilepicture___children___parent___children' |
  'profilepicture___children___children' |
  'profilepicture___children___children___id' |
  'profilepicture___children___children___children' |
  'profilepicture___children___internal___content' |
  'profilepicture___children___internal___contentDigest' |
  'profilepicture___children___internal___description' |
  'profilepicture___children___internal___fieldOwners' |
  'profilepicture___children___internal___ignoreType' |
  'profilepicture___children___internal___mediaType' |
  'profilepicture___children___internal___owner' |
  'profilepicture___children___internal___type' |
  'profilepicture___internal___content' |
  'profilepicture___internal___contentDigest' |
  'profilepicture___internal___description' |
  'profilepicture___internal___fieldOwners' |
  'profilepicture___internal___ignoreType' |
  'profilepicture___internal___mediaType' |
  'profilepicture___internal___owner' |
  'profilepicture___internal___type' |
  'twitter' |
  'github';

export type IAuthorYamlFilterInput = {
  id: Maybe<IStringQueryOperatorInput>;
  parent: Maybe<INodeFilterInput>;
  children: Maybe<INodeFilterListInput>;
  internal: Maybe<IInternalFilterInput>;
  bio: Maybe<IStringQueryOperatorInput>;
  profilepicture: Maybe<IFileFilterInput>;
  twitter: Maybe<IStringQueryOperatorInput>;
  github: Maybe<IStringQueryOperatorInput>;
};

export type IAuthorYamlFilterListInput = {
  elemMatch: Maybe<IAuthorYamlFilterInput>;
};

export type IAuthorYamlGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IAuthorYamlEdge>;
  nodes: Array<IAuthorYaml>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type IAuthorYamlSortInput = {
  fields: Maybe<Array<Maybe<IAuthorYamlFieldsEnum>>>;
  order: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type IAvifOptions = {
  quality: Maybe<Scalars['Int']>;
  lossless: Maybe<Scalars['Boolean']>;
  speed: Maybe<Scalars['Int']>;
};

export type IBlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat: Maybe<IImageFormat>;
};

export type IBooleanQueryOperatorInput = {
  eq: Maybe<Scalars['Boolean']>;
  ne: Maybe<Scalars['Boolean']>;
  in: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type IDateQueryOperatorInput = {
  eq: Maybe<Scalars['Date']>;
  ne: Maybe<Scalars['Date']>;
  gt: Maybe<Scalars['Date']>;
  gte: Maybe<Scalars['Date']>;
  lt: Maybe<Scalars['Date']>;
  lte: Maybe<Scalars['Date']>;
  in: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type IDirectory = INode & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
};


export type IDirectoryModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type IDirectoryAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type IDirectoryChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type IDirectoryBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type IDirectoryAtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type IDirectoryMtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type IDirectoryCtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type IDirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IDirectoryEdge>;
  nodes: Array<IDirectory>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<IDirectoryGroupConnection>;
};


export type IDirectoryConnectionDistinctArgs = {
  field: IDirectoryFieldsEnum;
};


export type IDirectoryConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: IDirectoryFieldsEnum;
};

export type IDirectoryEdge = {
  next: Maybe<IDirectory>;
  node: IDirectory;
  previous: Maybe<IDirectory>;
};

export type IDirectoryFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type IDirectoryFilterInput = {
  sourceInstanceName: Maybe<IStringQueryOperatorInput>;
  absolutePath: Maybe<IStringQueryOperatorInput>;
  relativePath: Maybe<IStringQueryOperatorInput>;
  extension: Maybe<IStringQueryOperatorInput>;
  size: Maybe<IIntQueryOperatorInput>;
  prettySize: Maybe<IStringQueryOperatorInput>;
  modifiedTime: Maybe<IDateQueryOperatorInput>;
  accessTime: Maybe<IDateQueryOperatorInput>;
  changeTime: Maybe<IDateQueryOperatorInput>;
  birthTime: Maybe<IDateQueryOperatorInput>;
  root: Maybe<IStringQueryOperatorInput>;
  dir: Maybe<IStringQueryOperatorInput>;
  base: Maybe<IStringQueryOperatorInput>;
  ext: Maybe<IStringQueryOperatorInput>;
  name: Maybe<IStringQueryOperatorInput>;
  relativeDirectory: Maybe<IStringQueryOperatorInput>;
  dev: Maybe<IIntQueryOperatorInput>;
  mode: Maybe<IIntQueryOperatorInput>;
  nlink: Maybe<IIntQueryOperatorInput>;
  uid: Maybe<IIntQueryOperatorInput>;
  gid: Maybe<IIntQueryOperatorInput>;
  rdev: Maybe<IIntQueryOperatorInput>;
  ino: Maybe<IFloatQueryOperatorInput>;
  atimeMs: Maybe<IFloatQueryOperatorInput>;
  mtimeMs: Maybe<IFloatQueryOperatorInput>;
  ctimeMs: Maybe<IFloatQueryOperatorInput>;
  atime: Maybe<IDateQueryOperatorInput>;
  mtime: Maybe<IDateQueryOperatorInput>;
  ctime: Maybe<IDateQueryOperatorInput>;
  birthtime: Maybe<IDateQueryOperatorInput>;
  birthtimeMs: Maybe<IFloatQueryOperatorInput>;
  blksize: Maybe<IIntQueryOperatorInput>;
  blocks: Maybe<IIntQueryOperatorInput>;
  id: Maybe<IStringQueryOperatorInput>;
  parent: Maybe<INodeFilterInput>;
  children: Maybe<INodeFilterListInput>;
  internal: Maybe<IInternalFilterInput>;
};

export type IDirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IDirectoryEdge>;
  nodes: Array<IDirectory>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type IDirectorySortInput = {
  fields: Maybe<Array<Maybe<IDirectoryFieldsEnum>>>;
  order: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type IDuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity: Maybe<Scalars['Int']>;
};

export type IFile = INode & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs: Maybe<Scalars['Float']>;
  blksize: Maybe<Scalars['Int']>;
  blocks: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark: Maybe<Array<Maybe<IMarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark: Maybe<IMarkdownRemark>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp: Maybe<Array<Maybe<IImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp: Maybe<IImageSharp>;
  /** Returns all children nodes filtered by type AuthorYaml */
  childrenAuthorYaml: Maybe<Array<Maybe<IAuthorYaml>>>;
  /** Returns the first child node of type AuthorYaml or null if there are no children of given type on this node */
  childAuthorYaml: Maybe<IAuthorYaml>;
  id: Scalars['ID'];
  parent: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
};


export type IFileModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type IFileAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type IFileChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type IFileBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type IFileAtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type IFileMtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type IFileCtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type IFileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IFileEdge>;
  nodes: Array<IFile>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<IFileGroupConnection>;
};


export type IFileConnectionDistinctArgs = {
  field: IFileFieldsEnum;
};


export type IFileConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: IFileFieldsEnum;
};

export type IFileEdge = {
  next: Maybe<IFile>;
  node: IFile;
  previous: Maybe<IFile>;
};

export type IFileFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'publicURL' |
  'childrenMarkdownRemark' |
  'childrenMarkdownRemark___id' |
  'childrenMarkdownRemark___frontmatter___title' |
  'childrenMarkdownRemark___frontmatter___date' |
  'childrenMarkdownRemark___frontmatter___author___id' |
  'childrenMarkdownRemark___frontmatter___author___children' |
  'childrenMarkdownRemark___frontmatter___author___bio' |
  'childrenMarkdownRemark___frontmatter___author___twitter' |
  'childrenMarkdownRemark___frontmatter___author___github' |
  'childrenMarkdownRemark___frontmatter___description' |
  'childrenMarkdownRemark___frontmatter___tags' |
  'childrenMarkdownRemark___frontmatter___seoFooter' |
  'childrenMarkdownRemark___frontmatter___todo' |
  'childrenMarkdownRemark___excerpt' |
  'childrenMarkdownRemark___rawMarkdownBody' |
  'childrenMarkdownRemark___fileAbsolutePath' |
  'childrenMarkdownRemark___fields___readingTime___text' |
  'childrenMarkdownRemark___fields___readingTime___minutes' |
  'childrenMarkdownRemark___fields___readingTime___time' |
  'childrenMarkdownRemark___fields___readingTime___words' |
  'childrenMarkdownRemark___fields___slug' |
  'childrenMarkdownRemark___html' |
  'childrenMarkdownRemark___htmlAst' |
  'childrenMarkdownRemark___excerptAst' |
  'childrenMarkdownRemark___headings' |
  'childrenMarkdownRemark___headings___id' |
  'childrenMarkdownRemark___headings___value' |
  'childrenMarkdownRemark___headings___depth' |
  'childrenMarkdownRemark___timeToRead' |
  'childrenMarkdownRemark___tableOfContents' |
  'childrenMarkdownRemark___wordCount___paragraphs' |
  'childrenMarkdownRemark___wordCount___sentences' |
  'childrenMarkdownRemark___wordCount___words' |
  'childrenMarkdownRemark___parent___id' |
  'childrenMarkdownRemark___parent___parent___id' |
  'childrenMarkdownRemark___parent___parent___children' |
  'childrenMarkdownRemark___parent___children' |
  'childrenMarkdownRemark___parent___children___id' |
  'childrenMarkdownRemark___parent___children___children' |
  'childrenMarkdownRemark___parent___internal___content' |
  'childrenMarkdownRemark___parent___internal___contentDigest' |
  'childrenMarkdownRemark___parent___internal___description' |
  'childrenMarkdownRemark___parent___internal___fieldOwners' |
  'childrenMarkdownRemark___parent___internal___ignoreType' |
  'childrenMarkdownRemark___parent___internal___mediaType' |
  'childrenMarkdownRemark___parent___internal___owner' |
  'childrenMarkdownRemark___parent___internal___type' |
  'childrenMarkdownRemark___children' |
  'childrenMarkdownRemark___children___id' |
  'childrenMarkdownRemark___children___parent___id' |
  'childrenMarkdownRemark___children___parent___children' |
  'childrenMarkdownRemark___children___children' |
  'childrenMarkdownRemark___children___children___id' |
  'childrenMarkdownRemark___children___children___children' |
  'childrenMarkdownRemark___children___internal___content' |
  'childrenMarkdownRemark___children___internal___contentDigest' |
  'childrenMarkdownRemark___children___internal___description' |
  'childrenMarkdownRemark___children___internal___fieldOwners' |
  'childrenMarkdownRemark___children___internal___ignoreType' |
  'childrenMarkdownRemark___children___internal___mediaType' |
  'childrenMarkdownRemark___children___internal___owner' |
  'childrenMarkdownRemark___children___internal___type' |
  'childrenMarkdownRemark___internal___content' |
  'childrenMarkdownRemark___internal___contentDigest' |
  'childrenMarkdownRemark___internal___description' |
  'childrenMarkdownRemark___internal___fieldOwners' |
  'childrenMarkdownRemark___internal___ignoreType' |
  'childrenMarkdownRemark___internal___mediaType' |
  'childrenMarkdownRemark___internal___owner' |
  'childrenMarkdownRemark___internal___type' |
  'childMarkdownRemark___id' |
  'childMarkdownRemark___frontmatter___title' |
  'childMarkdownRemark___frontmatter___date' |
  'childMarkdownRemark___frontmatter___author___id' |
  'childMarkdownRemark___frontmatter___author___children' |
  'childMarkdownRemark___frontmatter___author___bio' |
  'childMarkdownRemark___frontmatter___author___twitter' |
  'childMarkdownRemark___frontmatter___author___github' |
  'childMarkdownRemark___frontmatter___description' |
  'childMarkdownRemark___frontmatter___tags' |
  'childMarkdownRemark___frontmatter___seoFooter' |
  'childMarkdownRemark___frontmatter___todo' |
  'childMarkdownRemark___excerpt' |
  'childMarkdownRemark___rawMarkdownBody' |
  'childMarkdownRemark___fileAbsolutePath' |
  'childMarkdownRemark___fields___readingTime___text' |
  'childMarkdownRemark___fields___readingTime___minutes' |
  'childMarkdownRemark___fields___readingTime___time' |
  'childMarkdownRemark___fields___readingTime___words' |
  'childMarkdownRemark___fields___slug' |
  'childMarkdownRemark___html' |
  'childMarkdownRemark___htmlAst' |
  'childMarkdownRemark___excerptAst' |
  'childMarkdownRemark___headings' |
  'childMarkdownRemark___headings___id' |
  'childMarkdownRemark___headings___value' |
  'childMarkdownRemark___headings___depth' |
  'childMarkdownRemark___timeToRead' |
  'childMarkdownRemark___tableOfContents' |
  'childMarkdownRemark___wordCount___paragraphs' |
  'childMarkdownRemark___wordCount___sentences' |
  'childMarkdownRemark___wordCount___words' |
  'childMarkdownRemark___parent___id' |
  'childMarkdownRemark___parent___parent___id' |
  'childMarkdownRemark___parent___parent___children' |
  'childMarkdownRemark___parent___children' |
  'childMarkdownRemark___parent___children___id' |
  'childMarkdownRemark___parent___children___children' |
  'childMarkdownRemark___parent___internal___content' |
  'childMarkdownRemark___parent___internal___contentDigest' |
  'childMarkdownRemark___parent___internal___description' |
  'childMarkdownRemark___parent___internal___fieldOwners' |
  'childMarkdownRemark___parent___internal___ignoreType' |
  'childMarkdownRemark___parent___internal___mediaType' |
  'childMarkdownRemark___parent___internal___owner' |
  'childMarkdownRemark___parent___internal___type' |
  'childMarkdownRemark___children' |
  'childMarkdownRemark___children___id' |
  'childMarkdownRemark___children___parent___id' |
  'childMarkdownRemark___children___parent___children' |
  'childMarkdownRemark___children___children' |
  'childMarkdownRemark___children___children___id' |
  'childMarkdownRemark___children___children___children' |
  'childMarkdownRemark___children___internal___content' |
  'childMarkdownRemark___children___internal___contentDigest' |
  'childMarkdownRemark___children___internal___description' |
  'childMarkdownRemark___children___internal___fieldOwners' |
  'childMarkdownRemark___children___internal___ignoreType' |
  'childMarkdownRemark___children___internal___mediaType' |
  'childMarkdownRemark___children___internal___owner' |
  'childMarkdownRemark___children___internal___type' |
  'childMarkdownRemark___internal___content' |
  'childMarkdownRemark___internal___contentDigest' |
  'childMarkdownRemark___internal___description' |
  'childMarkdownRemark___internal___fieldOwners' |
  'childMarkdownRemark___internal___ignoreType' |
  'childMarkdownRemark___internal___mediaType' |
  'childMarkdownRemark___internal___owner' |
  'childMarkdownRemark___internal___type' |
  'childrenImageSharp' |
  'childrenImageSharp___fixed___base64' |
  'childrenImageSharp___fixed___tracedSVG' |
  'childrenImageSharp___fixed___aspectRatio' |
  'childrenImageSharp___fixed___width' |
  'childrenImageSharp___fixed___height' |
  'childrenImageSharp___fixed___src' |
  'childrenImageSharp___fixed___srcSet' |
  'childrenImageSharp___fixed___srcWebp' |
  'childrenImageSharp___fixed___srcSetWebp' |
  'childrenImageSharp___fixed___originalName' |
  'childrenImageSharp___resolutions___base64' |
  'childrenImageSharp___resolutions___tracedSVG' |
  'childrenImageSharp___resolutions___aspectRatio' |
  'childrenImageSharp___resolutions___width' |
  'childrenImageSharp___resolutions___height' |
  'childrenImageSharp___resolutions___src' |
  'childrenImageSharp___resolutions___srcSet' |
  'childrenImageSharp___resolutions___srcWebp' |
  'childrenImageSharp___resolutions___srcSetWebp' |
  'childrenImageSharp___resolutions___originalName' |
  'childrenImageSharp___fluid___base64' |
  'childrenImageSharp___fluid___tracedSVG' |
  'childrenImageSharp___fluid___aspectRatio' |
  'childrenImageSharp___fluid___src' |
  'childrenImageSharp___fluid___srcSet' |
  'childrenImageSharp___fluid___srcWebp' |
  'childrenImageSharp___fluid___srcSetWebp' |
  'childrenImageSharp___fluid___sizes' |
  'childrenImageSharp___fluid___originalImg' |
  'childrenImageSharp___fluid___originalName' |
  'childrenImageSharp___fluid___presentationWidth' |
  'childrenImageSharp___fluid___presentationHeight' |
  'childrenImageSharp___sizes___base64' |
  'childrenImageSharp___sizes___tracedSVG' |
  'childrenImageSharp___sizes___aspectRatio' |
  'childrenImageSharp___sizes___src' |
  'childrenImageSharp___sizes___srcSet' |
  'childrenImageSharp___sizes___srcWebp' |
  'childrenImageSharp___sizes___srcSetWebp' |
  'childrenImageSharp___sizes___sizes' |
  'childrenImageSharp___sizes___originalImg' |
  'childrenImageSharp___sizes___originalName' |
  'childrenImageSharp___sizes___presentationWidth' |
  'childrenImageSharp___sizes___presentationHeight' |
  'childrenImageSharp___gatsbyImageData' |
  'childrenImageSharp___original___width' |
  'childrenImageSharp___original___height' |
  'childrenImageSharp___original___src' |
  'childrenImageSharp___resize___src' |
  'childrenImageSharp___resize___tracedSVG' |
  'childrenImageSharp___resize___width' |
  'childrenImageSharp___resize___height' |
  'childrenImageSharp___resize___aspectRatio' |
  'childrenImageSharp___resize___originalName' |
  'childrenImageSharp___id' |
  'childrenImageSharp___parent___id' |
  'childrenImageSharp___parent___parent___id' |
  'childrenImageSharp___parent___parent___children' |
  'childrenImageSharp___parent___children' |
  'childrenImageSharp___parent___children___id' |
  'childrenImageSharp___parent___children___children' |
  'childrenImageSharp___parent___internal___content' |
  'childrenImageSharp___parent___internal___contentDigest' |
  'childrenImageSharp___parent___internal___description' |
  'childrenImageSharp___parent___internal___fieldOwners' |
  'childrenImageSharp___parent___internal___ignoreType' |
  'childrenImageSharp___parent___internal___mediaType' |
  'childrenImageSharp___parent___internal___owner' |
  'childrenImageSharp___parent___internal___type' |
  'childrenImageSharp___children' |
  'childrenImageSharp___children___id' |
  'childrenImageSharp___children___parent___id' |
  'childrenImageSharp___children___parent___children' |
  'childrenImageSharp___children___children' |
  'childrenImageSharp___children___children___id' |
  'childrenImageSharp___children___children___children' |
  'childrenImageSharp___children___internal___content' |
  'childrenImageSharp___children___internal___contentDigest' |
  'childrenImageSharp___children___internal___description' |
  'childrenImageSharp___children___internal___fieldOwners' |
  'childrenImageSharp___children___internal___ignoreType' |
  'childrenImageSharp___children___internal___mediaType' |
  'childrenImageSharp___children___internal___owner' |
  'childrenImageSharp___children___internal___type' |
  'childrenImageSharp___internal___content' |
  'childrenImageSharp___internal___contentDigest' |
  'childrenImageSharp___internal___description' |
  'childrenImageSharp___internal___fieldOwners' |
  'childrenImageSharp___internal___ignoreType' |
  'childrenImageSharp___internal___mediaType' |
  'childrenImageSharp___internal___owner' |
  'childrenImageSharp___internal___type' |
  'childImageSharp___fixed___base64' |
  'childImageSharp___fixed___tracedSVG' |
  'childImageSharp___fixed___aspectRatio' |
  'childImageSharp___fixed___width' |
  'childImageSharp___fixed___height' |
  'childImageSharp___fixed___src' |
  'childImageSharp___fixed___srcSet' |
  'childImageSharp___fixed___srcWebp' |
  'childImageSharp___fixed___srcSetWebp' |
  'childImageSharp___fixed___originalName' |
  'childImageSharp___resolutions___base64' |
  'childImageSharp___resolutions___tracedSVG' |
  'childImageSharp___resolutions___aspectRatio' |
  'childImageSharp___resolutions___width' |
  'childImageSharp___resolutions___height' |
  'childImageSharp___resolutions___src' |
  'childImageSharp___resolutions___srcSet' |
  'childImageSharp___resolutions___srcWebp' |
  'childImageSharp___resolutions___srcSetWebp' |
  'childImageSharp___resolutions___originalName' |
  'childImageSharp___fluid___base64' |
  'childImageSharp___fluid___tracedSVG' |
  'childImageSharp___fluid___aspectRatio' |
  'childImageSharp___fluid___src' |
  'childImageSharp___fluid___srcSet' |
  'childImageSharp___fluid___srcWebp' |
  'childImageSharp___fluid___srcSetWebp' |
  'childImageSharp___fluid___sizes' |
  'childImageSharp___fluid___originalImg' |
  'childImageSharp___fluid___originalName' |
  'childImageSharp___fluid___presentationWidth' |
  'childImageSharp___fluid___presentationHeight' |
  'childImageSharp___sizes___base64' |
  'childImageSharp___sizes___tracedSVG' |
  'childImageSharp___sizes___aspectRatio' |
  'childImageSharp___sizes___src' |
  'childImageSharp___sizes___srcSet' |
  'childImageSharp___sizes___srcWebp' |
  'childImageSharp___sizes___srcSetWebp' |
  'childImageSharp___sizes___sizes' |
  'childImageSharp___sizes___originalImg' |
  'childImageSharp___sizes___originalName' |
  'childImageSharp___sizes___presentationWidth' |
  'childImageSharp___sizes___presentationHeight' |
  'childImageSharp___gatsbyImageData' |
  'childImageSharp___original___width' |
  'childImageSharp___original___height' |
  'childImageSharp___original___src' |
  'childImageSharp___resize___src' |
  'childImageSharp___resize___tracedSVG' |
  'childImageSharp___resize___width' |
  'childImageSharp___resize___height' |
  'childImageSharp___resize___aspectRatio' |
  'childImageSharp___resize___originalName' |
  'childImageSharp___id' |
  'childImageSharp___parent___id' |
  'childImageSharp___parent___parent___id' |
  'childImageSharp___parent___parent___children' |
  'childImageSharp___parent___children' |
  'childImageSharp___parent___children___id' |
  'childImageSharp___parent___children___children' |
  'childImageSharp___parent___internal___content' |
  'childImageSharp___parent___internal___contentDigest' |
  'childImageSharp___parent___internal___description' |
  'childImageSharp___parent___internal___fieldOwners' |
  'childImageSharp___parent___internal___ignoreType' |
  'childImageSharp___parent___internal___mediaType' |
  'childImageSharp___parent___internal___owner' |
  'childImageSharp___parent___internal___type' |
  'childImageSharp___children' |
  'childImageSharp___children___id' |
  'childImageSharp___children___parent___id' |
  'childImageSharp___children___parent___children' |
  'childImageSharp___children___children' |
  'childImageSharp___children___children___id' |
  'childImageSharp___children___children___children' |
  'childImageSharp___children___internal___content' |
  'childImageSharp___children___internal___contentDigest' |
  'childImageSharp___children___internal___description' |
  'childImageSharp___children___internal___fieldOwners' |
  'childImageSharp___children___internal___ignoreType' |
  'childImageSharp___children___internal___mediaType' |
  'childImageSharp___children___internal___owner' |
  'childImageSharp___children___internal___type' |
  'childImageSharp___internal___content' |
  'childImageSharp___internal___contentDigest' |
  'childImageSharp___internal___description' |
  'childImageSharp___internal___fieldOwners' |
  'childImageSharp___internal___ignoreType' |
  'childImageSharp___internal___mediaType' |
  'childImageSharp___internal___owner' |
  'childImageSharp___internal___type' |
  'childrenAuthorYaml' |
  'childrenAuthorYaml___id' |
  'childrenAuthorYaml___parent___id' |
  'childrenAuthorYaml___parent___parent___id' |
  'childrenAuthorYaml___parent___parent___children' |
  'childrenAuthorYaml___parent___children' |
  'childrenAuthorYaml___parent___children___id' |
  'childrenAuthorYaml___parent___children___children' |
  'childrenAuthorYaml___parent___internal___content' |
  'childrenAuthorYaml___parent___internal___contentDigest' |
  'childrenAuthorYaml___parent___internal___description' |
  'childrenAuthorYaml___parent___internal___fieldOwners' |
  'childrenAuthorYaml___parent___internal___ignoreType' |
  'childrenAuthorYaml___parent___internal___mediaType' |
  'childrenAuthorYaml___parent___internal___owner' |
  'childrenAuthorYaml___parent___internal___type' |
  'childrenAuthorYaml___children' |
  'childrenAuthorYaml___children___id' |
  'childrenAuthorYaml___children___parent___id' |
  'childrenAuthorYaml___children___parent___children' |
  'childrenAuthorYaml___children___children' |
  'childrenAuthorYaml___children___children___id' |
  'childrenAuthorYaml___children___children___children' |
  'childrenAuthorYaml___children___internal___content' |
  'childrenAuthorYaml___children___internal___contentDigest' |
  'childrenAuthorYaml___children___internal___description' |
  'childrenAuthorYaml___children___internal___fieldOwners' |
  'childrenAuthorYaml___children___internal___ignoreType' |
  'childrenAuthorYaml___children___internal___mediaType' |
  'childrenAuthorYaml___children___internal___owner' |
  'childrenAuthorYaml___children___internal___type' |
  'childrenAuthorYaml___internal___content' |
  'childrenAuthorYaml___internal___contentDigest' |
  'childrenAuthorYaml___internal___description' |
  'childrenAuthorYaml___internal___fieldOwners' |
  'childrenAuthorYaml___internal___ignoreType' |
  'childrenAuthorYaml___internal___mediaType' |
  'childrenAuthorYaml___internal___owner' |
  'childrenAuthorYaml___internal___type' |
  'childrenAuthorYaml___bio' |
  'childrenAuthorYaml___profilepicture___sourceInstanceName' |
  'childrenAuthorYaml___profilepicture___absolutePath' |
  'childrenAuthorYaml___profilepicture___relativePath' |
  'childrenAuthorYaml___profilepicture___extension' |
  'childrenAuthorYaml___profilepicture___size' |
  'childrenAuthorYaml___profilepicture___prettySize' |
  'childrenAuthorYaml___profilepicture___modifiedTime' |
  'childrenAuthorYaml___profilepicture___accessTime' |
  'childrenAuthorYaml___profilepicture___changeTime' |
  'childrenAuthorYaml___profilepicture___birthTime' |
  'childrenAuthorYaml___profilepicture___root' |
  'childrenAuthorYaml___profilepicture___dir' |
  'childrenAuthorYaml___profilepicture___base' |
  'childrenAuthorYaml___profilepicture___ext' |
  'childrenAuthorYaml___profilepicture___name' |
  'childrenAuthorYaml___profilepicture___relativeDirectory' |
  'childrenAuthorYaml___profilepicture___dev' |
  'childrenAuthorYaml___profilepicture___mode' |
  'childrenAuthorYaml___profilepicture___nlink' |
  'childrenAuthorYaml___profilepicture___uid' |
  'childrenAuthorYaml___profilepicture___gid' |
  'childrenAuthorYaml___profilepicture___rdev' |
  'childrenAuthorYaml___profilepicture___ino' |
  'childrenAuthorYaml___profilepicture___atimeMs' |
  'childrenAuthorYaml___profilepicture___mtimeMs' |
  'childrenAuthorYaml___profilepicture___ctimeMs' |
  'childrenAuthorYaml___profilepicture___atime' |
  'childrenAuthorYaml___profilepicture___mtime' |
  'childrenAuthorYaml___profilepicture___ctime' |
  'childrenAuthorYaml___profilepicture___birthtime' |
  'childrenAuthorYaml___profilepicture___birthtimeMs' |
  'childrenAuthorYaml___profilepicture___blksize' |
  'childrenAuthorYaml___profilepicture___blocks' |
  'childrenAuthorYaml___profilepicture___publicURL' |
  'childrenAuthorYaml___profilepicture___childrenMarkdownRemark' |
  'childrenAuthorYaml___profilepicture___childrenMarkdownRemark___id' |
  'childrenAuthorYaml___profilepicture___childrenMarkdownRemark___excerpt' |
  'childrenAuthorYaml___profilepicture___childrenMarkdownRemark___rawMarkdownBody' |
  'childrenAuthorYaml___profilepicture___childrenMarkdownRemark___fileAbsolutePath' |
  'childrenAuthorYaml___profilepicture___childrenMarkdownRemark___html' |
  'childrenAuthorYaml___profilepicture___childrenMarkdownRemark___htmlAst' |
  'childrenAuthorYaml___profilepicture___childrenMarkdownRemark___excerptAst' |
  'childrenAuthorYaml___profilepicture___childrenMarkdownRemark___headings' |
  'childrenAuthorYaml___profilepicture___childrenMarkdownRemark___timeToRead' |
  'childrenAuthorYaml___profilepicture___childrenMarkdownRemark___tableOfContents' |
  'childrenAuthorYaml___profilepicture___childrenMarkdownRemark___children' |
  'childrenAuthorYaml___profilepicture___childMarkdownRemark___id' |
  'childrenAuthorYaml___profilepicture___childMarkdownRemark___excerpt' |
  'childrenAuthorYaml___profilepicture___childMarkdownRemark___rawMarkdownBody' |
  'childrenAuthorYaml___profilepicture___childMarkdownRemark___fileAbsolutePath' |
  'childrenAuthorYaml___profilepicture___childMarkdownRemark___html' |
  'childrenAuthorYaml___profilepicture___childMarkdownRemark___htmlAst' |
  'childrenAuthorYaml___profilepicture___childMarkdownRemark___excerptAst' |
  'childrenAuthorYaml___profilepicture___childMarkdownRemark___headings' |
  'childrenAuthorYaml___profilepicture___childMarkdownRemark___timeToRead' |
  'childrenAuthorYaml___profilepicture___childMarkdownRemark___tableOfContents' |
  'childrenAuthorYaml___profilepicture___childMarkdownRemark___children' |
  'childrenAuthorYaml___profilepicture___childrenImageSharp' |
  'childrenAuthorYaml___profilepicture___childrenImageSharp___gatsbyImageData' |
  'childrenAuthorYaml___profilepicture___childrenImageSharp___id' |
  'childrenAuthorYaml___profilepicture___childrenImageSharp___children' |
  'childrenAuthorYaml___profilepicture___childImageSharp___gatsbyImageData' |
  'childrenAuthorYaml___profilepicture___childImageSharp___id' |
  'childrenAuthorYaml___profilepicture___childImageSharp___children' |
  'childrenAuthorYaml___profilepicture___childrenAuthorYaml' |
  'childrenAuthorYaml___profilepicture___childrenAuthorYaml___id' |
  'childrenAuthorYaml___profilepicture___childrenAuthorYaml___children' |
  'childrenAuthorYaml___profilepicture___childrenAuthorYaml___bio' |
  'childrenAuthorYaml___profilepicture___childrenAuthorYaml___twitter' |
  'childrenAuthorYaml___profilepicture___childrenAuthorYaml___github' |
  'childrenAuthorYaml___profilepicture___childAuthorYaml___id' |
  'childrenAuthorYaml___profilepicture___childAuthorYaml___children' |
  'childrenAuthorYaml___profilepicture___childAuthorYaml___bio' |
  'childrenAuthorYaml___profilepicture___childAuthorYaml___twitter' |
  'childrenAuthorYaml___profilepicture___childAuthorYaml___github' |
  'childrenAuthorYaml___profilepicture___id' |
  'childrenAuthorYaml___profilepicture___parent___id' |
  'childrenAuthorYaml___profilepicture___parent___children' |
  'childrenAuthorYaml___profilepicture___children' |
  'childrenAuthorYaml___profilepicture___children___id' |
  'childrenAuthorYaml___profilepicture___children___children' |
  'childrenAuthorYaml___profilepicture___internal___content' |
  'childrenAuthorYaml___profilepicture___internal___contentDigest' |
  'childrenAuthorYaml___profilepicture___internal___description' |
  'childrenAuthorYaml___profilepicture___internal___fieldOwners' |
  'childrenAuthorYaml___profilepicture___internal___ignoreType' |
  'childrenAuthorYaml___profilepicture___internal___mediaType' |
  'childrenAuthorYaml___profilepicture___internal___owner' |
  'childrenAuthorYaml___profilepicture___internal___type' |
  'childrenAuthorYaml___twitter' |
  'childrenAuthorYaml___github' |
  'childAuthorYaml___id' |
  'childAuthorYaml___parent___id' |
  'childAuthorYaml___parent___parent___id' |
  'childAuthorYaml___parent___parent___children' |
  'childAuthorYaml___parent___children' |
  'childAuthorYaml___parent___children___id' |
  'childAuthorYaml___parent___children___children' |
  'childAuthorYaml___parent___internal___content' |
  'childAuthorYaml___parent___internal___contentDigest' |
  'childAuthorYaml___parent___internal___description' |
  'childAuthorYaml___parent___internal___fieldOwners' |
  'childAuthorYaml___parent___internal___ignoreType' |
  'childAuthorYaml___parent___internal___mediaType' |
  'childAuthorYaml___parent___internal___owner' |
  'childAuthorYaml___parent___internal___type' |
  'childAuthorYaml___children' |
  'childAuthorYaml___children___id' |
  'childAuthorYaml___children___parent___id' |
  'childAuthorYaml___children___parent___children' |
  'childAuthorYaml___children___children' |
  'childAuthorYaml___children___children___id' |
  'childAuthorYaml___children___children___children' |
  'childAuthorYaml___children___internal___content' |
  'childAuthorYaml___children___internal___contentDigest' |
  'childAuthorYaml___children___internal___description' |
  'childAuthorYaml___children___internal___fieldOwners' |
  'childAuthorYaml___children___internal___ignoreType' |
  'childAuthorYaml___children___internal___mediaType' |
  'childAuthorYaml___children___internal___owner' |
  'childAuthorYaml___children___internal___type' |
  'childAuthorYaml___internal___content' |
  'childAuthorYaml___internal___contentDigest' |
  'childAuthorYaml___internal___description' |
  'childAuthorYaml___internal___fieldOwners' |
  'childAuthorYaml___internal___ignoreType' |
  'childAuthorYaml___internal___mediaType' |
  'childAuthorYaml___internal___owner' |
  'childAuthorYaml___internal___type' |
  'childAuthorYaml___bio' |
  'childAuthorYaml___profilepicture___sourceInstanceName' |
  'childAuthorYaml___profilepicture___absolutePath' |
  'childAuthorYaml___profilepicture___relativePath' |
  'childAuthorYaml___profilepicture___extension' |
  'childAuthorYaml___profilepicture___size' |
  'childAuthorYaml___profilepicture___prettySize' |
  'childAuthorYaml___profilepicture___modifiedTime' |
  'childAuthorYaml___profilepicture___accessTime' |
  'childAuthorYaml___profilepicture___changeTime' |
  'childAuthorYaml___profilepicture___birthTime' |
  'childAuthorYaml___profilepicture___root' |
  'childAuthorYaml___profilepicture___dir' |
  'childAuthorYaml___profilepicture___base' |
  'childAuthorYaml___profilepicture___ext' |
  'childAuthorYaml___profilepicture___name' |
  'childAuthorYaml___profilepicture___relativeDirectory' |
  'childAuthorYaml___profilepicture___dev' |
  'childAuthorYaml___profilepicture___mode' |
  'childAuthorYaml___profilepicture___nlink' |
  'childAuthorYaml___profilepicture___uid' |
  'childAuthorYaml___profilepicture___gid' |
  'childAuthorYaml___profilepicture___rdev' |
  'childAuthorYaml___profilepicture___ino' |
  'childAuthorYaml___profilepicture___atimeMs' |
  'childAuthorYaml___profilepicture___mtimeMs' |
  'childAuthorYaml___profilepicture___ctimeMs' |
  'childAuthorYaml___profilepicture___atime' |
  'childAuthorYaml___profilepicture___mtime' |
  'childAuthorYaml___profilepicture___ctime' |
  'childAuthorYaml___profilepicture___birthtime' |
  'childAuthorYaml___profilepicture___birthtimeMs' |
  'childAuthorYaml___profilepicture___blksize' |
  'childAuthorYaml___profilepicture___blocks' |
  'childAuthorYaml___profilepicture___publicURL' |
  'childAuthorYaml___profilepicture___childrenMarkdownRemark' |
  'childAuthorYaml___profilepicture___childrenMarkdownRemark___id' |
  'childAuthorYaml___profilepicture___childrenMarkdownRemark___excerpt' |
  'childAuthorYaml___profilepicture___childrenMarkdownRemark___rawMarkdownBody' |
  'childAuthorYaml___profilepicture___childrenMarkdownRemark___fileAbsolutePath' |
  'childAuthorYaml___profilepicture___childrenMarkdownRemark___html' |
  'childAuthorYaml___profilepicture___childrenMarkdownRemark___htmlAst' |
  'childAuthorYaml___profilepicture___childrenMarkdownRemark___excerptAst' |
  'childAuthorYaml___profilepicture___childrenMarkdownRemark___headings' |
  'childAuthorYaml___profilepicture___childrenMarkdownRemark___timeToRead' |
  'childAuthorYaml___profilepicture___childrenMarkdownRemark___tableOfContents' |
  'childAuthorYaml___profilepicture___childrenMarkdownRemark___children' |
  'childAuthorYaml___profilepicture___childMarkdownRemark___id' |
  'childAuthorYaml___profilepicture___childMarkdownRemark___excerpt' |
  'childAuthorYaml___profilepicture___childMarkdownRemark___rawMarkdownBody' |
  'childAuthorYaml___profilepicture___childMarkdownRemark___fileAbsolutePath' |
  'childAuthorYaml___profilepicture___childMarkdownRemark___html' |
  'childAuthorYaml___profilepicture___childMarkdownRemark___htmlAst' |
  'childAuthorYaml___profilepicture___childMarkdownRemark___excerptAst' |
  'childAuthorYaml___profilepicture___childMarkdownRemark___headings' |
  'childAuthorYaml___profilepicture___childMarkdownRemark___timeToRead' |
  'childAuthorYaml___profilepicture___childMarkdownRemark___tableOfContents' |
  'childAuthorYaml___profilepicture___childMarkdownRemark___children' |
  'childAuthorYaml___profilepicture___childrenImageSharp' |
  'childAuthorYaml___profilepicture___childrenImageSharp___gatsbyImageData' |
  'childAuthorYaml___profilepicture___childrenImageSharp___id' |
  'childAuthorYaml___profilepicture___childrenImageSharp___children' |
  'childAuthorYaml___profilepicture___childImageSharp___gatsbyImageData' |
  'childAuthorYaml___profilepicture___childImageSharp___id' |
  'childAuthorYaml___profilepicture___childImageSharp___children' |
  'childAuthorYaml___profilepicture___childrenAuthorYaml' |
  'childAuthorYaml___profilepicture___childrenAuthorYaml___id' |
  'childAuthorYaml___profilepicture___childrenAuthorYaml___children' |
  'childAuthorYaml___profilepicture___childrenAuthorYaml___bio' |
  'childAuthorYaml___profilepicture___childrenAuthorYaml___twitter' |
  'childAuthorYaml___profilepicture___childrenAuthorYaml___github' |
  'childAuthorYaml___profilepicture___childAuthorYaml___id' |
  'childAuthorYaml___profilepicture___childAuthorYaml___children' |
  'childAuthorYaml___profilepicture___childAuthorYaml___bio' |
  'childAuthorYaml___profilepicture___childAuthorYaml___twitter' |
  'childAuthorYaml___profilepicture___childAuthorYaml___github' |
  'childAuthorYaml___profilepicture___id' |
  'childAuthorYaml___profilepicture___parent___id' |
  'childAuthorYaml___profilepicture___parent___children' |
  'childAuthorYaml___profilepicture___children' |
  'childAuthorYaml___profilepicture___children___id' |
  'childAuthorYaml___profilepicture___children___children' |
  'childAuthorYaml___profilepicture___internal___content' |
  'childAuthorYaml___profilepicture___internal___contentDigest' |
  'childAuthorYaml___profilepicture___internal___description' |
  'childAuthorYaml___profilepicture___internal___fieldOwners' |
  'childAuthorYaml___profilepicture___internal___ignoreType' |
  'childAuthorYaml___profilepicture___internal___mediaType' |
  'childAuthorYaml___profilepicture___internal___owner' |
  'childAuthorYaml___profilepicture___internal___type' |
  'childAuthorYaml___twitter' |
  'childAuthorYaml___github' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type IFileFilterInput = {
  sourceInstanceName: Maybe<IStringQueryOperatorInput>;
  absolutePath: Maybe<IStringQueryOperatorInput>;
  relativePath: Maybe<IStringQueryOperatorInput>;
  extension: Maybe<IStringQueryOperatorInput>;
  size: Maybe<IIntQueryOperatorInput>;
  prettySize: Maybe<IStringQueryOperatorInput>;
  modifiedTime: Maybe<IDateQueryOperatorInput>;
  accessTime: Maybe<IDateQueryOperatorInput>;
  changeTime: Maybe<IDateQueryOperatorInput>;
  birthTime: Maybe<IDateQueryOperatorInput>;
  root: Maybe<IStringQueryOperatorInput>;
  dir: Maybe<IStringQueryOperatorInput>;
  base: Maybe<IStringQueryOperatorInput>;
  ext: Maybe<IStringQueryOperatorInput>;
  name: Maybe<IStringQueryOperatorInput>;
  relativeDirectory: Maybe<IStringQueryOperatorInput>;
  dev: Maybe<IIntQueryOperatorInput>;
  mode: Maybe<IIntQueryOperatorInput>;
  nlink: Maybe<IIntQueryOperatorInput>;
  uid: Maybe<IIntQueryOperatorInput>;
  gid: Maybe<IIntQueryOperatorInput>;
  rdev: Maybe<IIntQueryOperatorInput>;
  ino: Maybe<IFloatQueryOperatorInput>;
  atimeMs: Maybe<IFloatQueryOperatorInput>;
  mtimeMs: Maybe<IFloatQueryOperatorInput>;
  ctimeMs: Maybe<IFloatQueryOperatorInput>;
  atime: Maybe<IDateQueryOperatorInput>;
  mtime: Maybe<IDateQueryOperatorInput>;
  ctime: Maybe<IDateQueryOperatorInput>;
  birthtime: Maybe<IDateQueryOperatorInput>;
  birthtimeMs: Maybe<IFloatQueryOperatorInput>;
  blksize: Maybe<IIntQueryOperatorInput>;
  blocks: Maybe<IIntQueryOperatorInput>;
  publicURL: Maybe<IStringQueryOperatorInput>;
  childrenMarkdownRemark: Maybe<IMarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<IMarkdownRemarkFilterInput>;
  childrenImageSharp: Maybe<IImageSharpFilterListInput>;
  childImageSharp: Maybe<IImageSharpFilterInput>;
  childrenAuthorYaml: Maybe<IAuthorYamlFilterListInput>;
  childAuthorYaml: Maybe<IAuthorYamlFilterInput>;
  id: Maybe<IStringQueryOperatorInput>;
  parent: Maybe<INodeFilterInput>;
  children: Maybe<INodeFilterListInput>;
  internal: Maybe<IInternalFilterInput>;
};

export type IFileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IFileEdge>;
  nodes: Array<IFile>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type IFileSortInput = {
  fields: Maybe<Array<Maybe<IFileFieldsEnum>>>;
  order: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type IFloatQueryOperatorInput = {
  eq: Maybe<Scalars['Float']>;
  ne: Maybe<Scalars['Float']>;
  gt: Maybe<Scalars['Float']>;
  gte: Maybe<Scalars['Float']>;
  lt: Maybe<Scalars['Float']>;
  lte: Maybe<Scalars['Float']>;
  in: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type IImageCropFocus = 
  'CENTER' |
  'NORTH' |
  'NORTHEAST' |
  'EAST' |
  'SOUTHEAST' |
  'SOUTH' |
  'SOUTHWEST' |
  'WEST' |
  'NORTHWEST' |
  'ENTROPY' |
  'ATTENTION';

export type IImageFit = 
  'COVER' |
  'CONTAIN' |
  'FILL' |
  'INSIDE' |
  'OUTSIDE';

export type IImageFormat = 
  'NO_CHANGE' |
  'AUTO' |
  'JPG' |
  'PNG' |
  'WEBP' |
  'AVIF';

export type IImageLayout = 
  'FIXED' |
  'FULL_WIDTH' |
  'CONSTRAINED';

export type IImagePlaceholder = 
  'DOMINANT_COLOR' |
  'TRACED_SVG' |
  'BLURRED' |
  'NONE';

export type IImageSharp = INode & {
  fixed: Maybe<IImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions: Maybe<IImageSharpResolutions>;
  fluid: Maybe<IImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes: Maybe<IImageSharpSizes>;
  gatsbyImageData: Scalars['JSON'];
  original: Maybe<IImageSharpOriginal>;
  resize: Maybe<IImageSharpResize>;
  id: Scalars['ID'];
  parent: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
};


export type IImageSharpFixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<IDuotoneGradient>;
  traceSVG: Maybe<IPotrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<IImageFormat>;
  toFormatBase64?: Maybe<IImageFormat>;
  cropFocus?: Maybe<IImageCropFocus>;
  fit?: Maybe<IImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type IImageSharpResolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<IDuotoneGradient>;
  traceSVG: Maybe<IPotrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<IImageFormat>;
  toFormatBase64?: Maybe<IImageFormat>;
  cropFocus?: Maybe<IImageCropFocus>;
  fit?: Maybe<IImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type IImageSharpFluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<IDuotoneGradient>;
  traceSVG: Maybe<IPotrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<IImageFormat>;
  toFormatBase64?: Maybe<IImageFormat>;
  cropFocus?: Maybe<IImageCropFocus>;
  fit?: Maybe<IImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type IImageSharpSizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<IDuotoneGradient>;
  traceSVG: Maybe<IPotrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<IImageFormat>;
  toFormatBase64?: Maybe<IImageFormat>;
  cropFocus?: Maybe<IImageCropFocus>;
  fit?: Maybe<IImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type IImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<IImageLayout>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  placeholder: Maybe<IImagePlaceholder>;
  blurredOptions: Maybe<IBlurredOptions>;
  tracedSVGOptions: Maybe<IPotrace>;
  formats: Maybe<Array<Maybe<IImageFormat>>>;
  outputPixelDensities: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  jpgOptions: Maybe<IJpgOptions>;
  pngOptions: Maybe<IPngOptions>;
  webpOptions: Maybe<IWebPOptions>;
  avifOptions: Maybe<IAvifOptions>;
  transformOptions: Maybe<ITransformOptions>;
  backgroundColor: Maybe<Scalars['String']>;
};


export type IImageSharpResizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<IDuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<IPotrace>;
  toFormat?: Maybe<IImageFormat>;
  cropFocus?: Maybe<IImageCropFocus>;
  fit?: Maybe<IImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type IImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IImageSharpEdge>;
  nodes: Array<IImageSharp>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<IImageSharpGroupConnection>;
};


export type IImageSharpConnectionDistinctArgs = {
  field: IImageSharpFieldsEnum;
};


export type IImageSharpConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: IImageSharpFieldsEnum;
};

export type IImageSharpEdge = {
  next: Maybe<IImageSharp>;
  node: IImageSharp;
  previous: Maybe<IImageSharp>;
};

export type IImageSharpFieldsEnum = 
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'fixed___originalName' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___srcWebp' |
  'resolutions___srcSetWebp' |
  'resolutions___originalName' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'fluid___originalImg' |
  'fluid___originalName' |
  'fluid___presentationWidth' |
  'fluid___presentationHeight' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___srcWebp' |
  'sizes___srcSetWebp' |
  'sizes___sizes' |
  'sizes___originalImg' |
  'sizes___originalName' |
  'sizes___presentationWidth' |
  'sizes___presentationHeight' |
  'gatsbyImageData' |
  'original___width' |
  'original___height' |
  'original___src' |
  'resize___src' |
  'resize___tracedSVG' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio' |
  'resize___originalName' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type IImageSharpFilterInput = {
  fixed: Maybe<IImageSharpFixedFilterInput>;
  resolutions: Maybe<IImageSharpResolutionsFilterInput>;
  fluid: Maybe<IImageSharpFluidFilterInput>;
  sizes: Maybe<IImageSharpSizesFilterInput>;
  gatsbyImageData: Maybe<IJsonQueryOperatorInput>;
  original: Maybe<IImageSharpOriginalFilterInput>;
  resize: Maybe<IImageSharpResizeFilterInput>;
  id: Maybe<IStringQueryOperatorInput>;
  parent: Maybe<INodeFilterInput>;
  children: Maybe<INodeFilterListInput>;
  internal: Maybe<IInternalFilterInput>;
};

export type IImageSharpFilterListInput = {
  elemMatch: Maybe<IImageSharpFilterInput>;
};

export type IImageSharpFixed = {
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
};

export type IImageSharpFixedFilterInput = {
  base64: Maybe<IStringQueryOperatorInput>;
  tracedSVG: Maybe<IStringQueryOperatorInput>;
  aspectRatio: Maybe<IFloatQueryOperatorInput>;
  width: Maybe<IFloatQueryOperatorInput>;
  height: Maybe<IFloatQueryOperatorInput>;
  src: Maybe<IStringQueryOperatorInput>;
  srcSet: Maybe<IStringQueryOperatorInput>;
  srcWebp: Maybe<IStringQueryOperatorInput>;
  srcSetWebp: Maybe<IStringQueryOperatorInput>;
  originalName: Maybe<IStringQueryOperatorInput>;
};

export type IImageSharpFluid = {
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type IImageSharpFluidFilterInput = {
  base64: Maybe<IStringQueryOperatorInput>;
  tracedSVG: Maybe<IStringQueryOperatorInput>;
  aspectRatio: Maybe<IFloatQueryOperatorInput>;
  src: Maybe<IStringQueryOperatorInput>;
  srcSet: Maybe<IStringQueryOperatorInput>;
  srcWebp: Maybe<IStringQueryOperatorInput>;
  srcSetWebp: Maybe<IStringQueryOperatorInput>;
  sizes: Maybe<IStringQueryOperatorInput>;
  originalImg: Maybe<IStringQueryOperatorInput>;
  originalName: Maybe<IStringQueryOperatorInput>;
  presentationWidth: Maybe<IIntQueryOperatorInput>;
  presentationHeight: Maybe<IIntQueryOperatorInput>;
};

export type IImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IImageSharpEdge>;
  nodes: Array<IImageSharp>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type IImageSharpOriginal = {
  width: Maybe<Scalars['Float']>;
  height: Maybe<Scalars['Float']>;
  src: Maybe<Scalars['String']>;
};

export type IImageSharpOriginalFilterInput = {
  width: Maybe<IFloatQueryOperatorInput>;
  height: Maybe<IFloatQueryOperatorInput>;
  src: Maybe<IStringQueryOperatorInput>;
};

export type IImageSharpResize = {
  src: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  aspectRatio: Maybe<Scalars['Float']>;
  originalName: Maybe<Scalars['String']>;
};

export type IImageSharpResizeFilterInput = {
  src: Maybe<IStringQueryOperatorInput>;
  tracedSVG: Maybe<IStringQueryOperatorInput>;
  width: Maybe<IIntQueryOperatorInput>;
  height: Maybe<IIntQueryOperatorInput>;
  aspectRatio: Maybe<IFloatQueryOperatorInput>;
  originalName: Maybe<IStringQueryOperatorInput>;
};

export type IImageSharpResolutions = {
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
};

export type IImageSharpResolutionsFilterInput = {
  base64: Maybe<IStringQueryOperatorInput>;
  tracedSVG: Maybe<IStringQueryOperatorInput>;
  aspectRatio: Maybe<IFloatQueryOperatorInput>;
  width: Maybe<IFloatQueryOperatorInput>;
  height: Maybe<IFloatQueryOperatorInput>;
  src: Maybe<IStringQueryOperatorInput>;
  srcSet: Maybe<IStringQueryOperatorInput>;
  srcWebp: Maybe<IStringQueryOperatorInput>;
  srcSetWebp: Maybe<IStringQueryOperatorInput>;
  originalName: Maybe<IStringQueryOperatorInput>;
};

export type IImageSharpSizes = {
  base64: Maybe<Scalars['String']>;
  tracedSVG: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Maybe<Scalars['String']>;
  srcSetWebp: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg: Maybe<Scalars['String']>;
  originalName: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type IImageSharpSizesFilterInput = {
  base64: Maybe<IStringQueryOperatorInput>;
  tracedSVG: Maybe<IStringQueryOperatorInput>;
  aspectRatio: Maybe<IFloatQueryOperatorInput>;
  src: Maybe<IStringQueryOperatorInput>;
  srcSet: Maybe<IStringQueryOperatorInput>;
  srcWebp: Maybe<IStringQueryOperatorInput>;
  srcSetWebp: Maybe<IStringQueryOperatorInput>;
  sizes: Maybe<IStringQueryOperatorInput>;
  originalImg: Maybe<IStringQueryOperatorInput>;
  originalName: Maybe<IStringQueryOperatorInput>;
  presentationWidth: Maybe<IIntQueryOperatorInput>;
  presentationHeight: Maybe<IIntQueryOperatorInput>;
};

export type IImageSharpSortInput = {
  fields: Maybe<Array<Maybe<IImageSharpFieldsEnum>>>;
  order: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type IInternal = {
  content: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description: Maybe<Scalars['String']>;
  fieldOwners: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType: Maybe<Scalars['Boolean']>;
  mediaType: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type IInternalFilterInput = {
  content: Maybe<IStringQueryOperatorInput>;
  contentDigest: Maybe<IStringQueryOperatorInput>;
  description: Maybe<IStringQueryOperatorInput>;
  fieldOwners: Maybe<IStringQueryOperatorInput>;
  ignoreType: Maybe<IBooleanQueryOperatorInput>;
  mediaType: Maybe<IStringQueryOperatorInput>;
  owner: Maybe<IStringQueryOperatorInput>;
  type: Maybe<IStringQueryOperatorInput>;
};

export type IIntQueryOperatorInput = {
  eq: Maybe<Scalars['Int']>;
  ne: Maybe<Scalars['Int']>;
  gt: Maybe<Scalars['Int']>;
  gte: Maybe<Scalars['Int']>;
  lt: Maybe<Scalars['Int']>;
  lte: Maybe<Scalars['Int']>;
  in: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type IJpgOptions = {
  quality: Maybe<Scalars['Int']>;
  progressive: Maybe<Scalars['Boolean']>;
};


export type IJsonQueryOperatorInput = {
  eq: Maybe<Scalars['JSON']>;
  ne: Maybe<Scalars['JSON']>;
  in: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex: Maybe<Scalars['JSON']>;
  glob: Maybe<Scalars['JSON']>;
};

export type IMarkdownExcerptFormats = 
  'PLAIN' |
  'HTML' |
  'MARKDOWN';

export type IMarkdownHeading = {
  id: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
  depth: Maybe<Scalars['Int']>;
};

export type IMarkdownHeadingFilterInput = {
  id: Maybe<IStringQueryOperatorInput>;
  value: Maybe<IStringQueryOperatorInput>;
  depth: Maybe<IIntQueryOperatorInput>;
};

export type IMarkdownHeadingFilterListInput = {
  elemMatch: Maybe<IMarkdownHeadingFilterInput>;
};

export type IMarkdownHeadingLevels = 
  'h1' |
  'h2' |
  'h3' |
  'h4' |
  'h5' |
  'h6';

export type IMarkdownRemark = INode & {
  id: Scalars['ID'];
  frontmatter: Maybe<IMarkdownRemarkFrontmatter>;
  excerpt: Maybe<Scalars['String']>;
  rawMarkdownBody: Maybe<Scalars['String']>;
  fileAbsolutePath: Maybe<Scalars['String']>;
  fields: Maybe<IMarkdownRemarkFields>;
  html: Maybe<Scalars['String']>;
  htmlAst: Maybe<Scalars['JSON']>;
  excerptAst: Maybe<Scalars['JSON']>;
  headings: Maybe<Array<Maybe<IMarkdownHeading>>>;
  timeToRead: Maybe<Scalars['Int']>;
  tableOfContents: Maybe<Scalars['String']>;
  wordCount: Maybe<IMarkdownWordCount>;
  parent: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
};


export type IMarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<IMarkdownExcerptFormats>;
};


export type IMarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type IMarkdownRemarkHeadingsArgs = {
  depth: Maybe<IMarkdownHeadingLevels>;
};


export type IMarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth: Maybe<Scalars['Int']>;
  heading: Maybe<Scalars['String']>;
};

export type IMarkdownRemarkConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IMarkdownRemarkEdge>;
  nodes: Array<IMarkdownRemark>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<IMarkdownRemarkGroupConnection>;
};


export type IMarkdownRemarkConnectionDistinctArgs = {
  field: IMarkdownRemarkFieldsEnum;
};


export type IMarkdownRemarkConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: IMarkdownRemarkFieldsEnum;
};

export type IMarkdownRemarkEdge = {
  next: Maybe<IMarkdownRemark>;
  node: IMarkdownRemark;
  previous: Maybe<IMarkdownRemark>;
};

export type IMarkdownRemarkFields = {
  readingTime: Maybe<IMarkdownRemarkFieldsReadingTime>;
  slug: Maybe<Scalars['String']>;
};

export type IMarkdownRemarkFieldsEnum = 
  'id' |
  'frontmatter___title' |
  'frontmatter___date' |
  'frontmatter___author___id' |
  'frontmatter___author___parent___id' |
  'frontmatter___author___parent___children' |
  'frontmatter___author___children' |
  'frontmatter___author___children___id' |
  'frontmatter___author___children___children' |
  'frontmatter___author___internal___content' |
  'frontmatter___author___internal___contentDigest' |
  'frontmatter___author___internal___description' |
  'frontmatter___author___internal___fieldOwners' |
  'frontmatter___author___internal___ignoreType' |
  'frontmatter___author___internal___mediaType' |
  'frontmatter___author___internal___owner' |
  'frontmatter___author___internal___type' |
  'frontmatter___author___bio' |
  'frontmatter___author___profilepicture___sourceInstanceName' |
  'frontmatter___author___profilepicture___absolutePath' |
  'frontmatter___author___profilepicture___relativePath' |
  'frontmatter___author___profilepicture___extension' |
  'frontmatter___author___profilepicture___size' |
  'frontmatter___author___profilepicture___prettySize' |
  'frontmatter___author___profilepicture___modifiedTime' |
  'frontmatter___author___profilepicture___accessTime' |
  'frontmatter___author___profilepicture___changeTime' |
  'frontmatter___author___profilepicture___birthTime' |
  'frontmatter___author___profilepicture___root' |
  'frontmatter___author___profilepicture___dir' |
  'frontmatter___author___profilepicture___base' |
  'frontmatter___author___profilepicture___ext' |
  'frontmatter___author___profilepicture___name' |
  'frontmatter___author___profilepicture___relativeDirectory' |
  'frontmatter___author___profilepicture___dev' |
  'frontmatter___author___profilepicture___mode' |
  'frontmatter___author___profilepicture___nlink' |
  'frontmatter___author___profilepicture___uid' |
  'frontmatter___author___profilepicture___gid' |
  'frontmatter___author___profilepicture___rdev' |
  'frontmatter___author___profilepicture___ino' |
  'frontmatter___author___profilepicture___atimeMs' |
  'frontmatter___author___profilepicture___mtimeMs' |
  'frontmatter___author___profilepicture___ctimeMs' |
  'frontmatter___author___profilepicture___atime' |
  'frontmatter___author___profilepicture___mtime' |
  'frontmatter___author___profilepicture___ctime' |
  'frontmatter___author___profilepicture___birthtime' |
  'frontmatter___author___profilepicture___birthtimeMs' |
  'frontmatter___author___profilepicture___blksize' |
  'frontmatter___author___profilepicture___blocks' |
  'frontmatter___author___profilepicture___publicURL' |
  'frontmatter___author___profilepicture___childrenMarkdownRemark' |
  'frontmatter___author___profilepicture___childrenImageSharp' |
  'frontmatter___author___profilepicture___childrenAuthorYaml' |
  'frontmatter___author___profilepicture___id' |
  'frontmatter___author___profilepicture___children' |
  'frontmatter___author___twitter' |
  'frontmatter___author___github' |
  'frontmatter___description' |
  'frontmatter___tags' |
  'frontmatter___seoFooter' |
  'frontmatter___todo' |
  'excerpt' |
  'rawMarkdownBody' |
  'fileAbsolutePath' |
  'fields___readingTime___text' |
  'fields___readingTime___minutes' |
  'fields___readingTime___time' |
  'fields___readingTime___words' |
  'fields___slug' |
  'html' |
  'htmlAst' |
  'excerptAst' |
  'headings' |
  'headings___id' |
  'headings___value' |
  'headings___depth' |
  'timeToRead' |
  'tableOfContents' |
  'wordCount___paragraphs' |
  'wordCount___sentences' |
  'wordCount___words' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type IMarkdownRemarkFieldsFilterInput = {
  readingTime: Maybe<IMarkdownRemarkFieldsReadingTimeFilterInput>;
  slug: Maybe<IStringQueryOperatorInput>;
};

export type IMarkdownRemarkFieldsReadingTime = {
  text: Maybe<Scalars['String']>;
  minutes: Maybe<Scalars['Float']>;
  time: Maybe<Scalars['Float']>;
  words: Maybe<Scalars['Int']>;
};

export type IMarkdownRemarkFieldsReadingTimeFilterInput = {
  text: Maybe<IStringQueryOperatorInput>;
  minutes: Maybe<IFloatQueryOperatorInput>;
  time: Maybe<IFloatQueryOperatorInput>;
  words: Maybe<IIntQueryOperatorInput>;
};

export type IMarkdownRemarkFilterInput = {
  id: Maybe<IStringQueryOperatorInput>;
  frontmatter: Maybe<IMarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<IStringQueryOperatorInput>;
  rawMarkdownBody: Maybe<IStringQueryOperatorInput>;
  fileAbsolutePath: Maybe<IStringQueryOperatorInput>;
  fields: Maybe<IMarkdownRemarkFieldsFilterInput>;
  html: Maybe<IStringQueryOperatorInput>;
  htmlAst: Maybe<IJsonQueryOperatorInput>;
  excerptAst: Maybe<IJsonQueryOperatorInput>;
  headings: Maybe<IMarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IIntQueryOperatorInput>;
  tableOfContents: Maybe<IStringQueryOperatorInput>;
  wordCount: Maybe<IMarkdownWordCountFilterInput>;
  parent: Maybe<INodeFilterInput>;
  children: Maybe<INodeFilterListInput>;
  internal: Maybe<IInternalFilterInput>;
};

export type IMarkdownRemarkFilterListInput = {
  elemMatch: Maybe<IMarkdownRemarkFilterInput>;
};

export type IMarkdownRemarkFrontmatter = {
  title: Maybe<Scalars['String']>;
  date: Maybe<Scalars['Date']>;
  author: Maybe<IAuthorYaml>;
  description: Maybe<Scalars['String']>;
  tags: Maybe<Array<Maybe<Scalars['String']>>>;
  seoFooter: Maybe<Array<Maybe<Scalars['String']>>>;
  todo: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type IMarkdownRemarkFrontmatterDateArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type IMarkdownRemarkFrontmatterFilterInput = {
  title: Maybe<IStringQueryOperatorInput>;
  date: Maybe<IDateQueryOperatorInput>;
  author: Maybe<IAuthorYamlFilterInput>;
  description: Maybe<IStringQueryOperatorInput>;
  tags: Maybe<IStringQueryOperatorInput>;
  seoFooter: Maybe<IStringQueryOperatorInput>;
  todo: Maybe<IStringQueryOperatorInput>;
};

export type IMarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<IMarkdownRemarkEdge>;
  nodes: Array<IMarkdownRemark>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type IMarkdownRemarkSortInput = {
  fields: Maybe<Array<Maybe<IMarkdownRemarkFieldsEnum>>>;
  order: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type IMarkdownWordCount = {
  paragraphs: Maybe<Scalars['Int']>;
  sentences: Maybe<Scalars['Int']>;
  words: Maybe<Scalars['Int']>;
};

export type IMarkdownWordCountFilterInput = {
  paragraphs: Maybe<IIntQueryOperatorInput>;
  sentences: Maybe<IIntQueryOperatorInput>;
  words: Maybe<IIntQueryOperatorInput>;
};

/** Node Interface */
export type INode = {
  id: Scalars['ID'];
  parent: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
};

export type INodeFilterInput = {
  id: Maybe<IStringQueryOperatorInput>;
  parent: Maybe<INodeFilterInput>;
  children: Maybe<INodeFilterListInput>;
  internal: Maybe<IInternalFilterInput>;
};

export type INodeFilterListInput = {
  elemMatch: Maybe<INodeFilterInput>;
};

export type IPageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type IPngOptions = {
  quality: Maybe<Scalars['Int']>;
  compressionSpeed: Maybe<Scalars['Int']>;
};

export type IPotrace = {
  turnPolicy: Maybe<IPotraceTurnPolicy>;
  turdSize: Maybe<Scalars['Float']>;
  alphaMax: Maybe<Scalars['Float']>;
  optCurve: Maybe<Scalars['Boolean']>;
  optTolerance: Maybe<Scalars['Float']>;
  threshold: Maybe<Scalars['Int']>;
  blackOnWhite: Maybe<Scalars['Boolean']>;
  color: Maybe<Scalars['String']>;
  background: Maybe<Scalars['String']>;
};

export type IPotraceTurnPolicy = 
  'TURNPOLICY_BLACK' |
  'TURNPOLICY_WHITE' |
  'TURNPOLICY_LEFT' |
  'TURNPOLICY_RIGHT' |
  'TURNPOLICY_MINORITY' |
  'TURNPOLICY_MAJORITY';

export type IQuery = {
  file: Maybe<IFile>;
  allFile: IFileConnection;
  directory: Maybe<IDirectory>;
  allDirectory: IDirectoryConnection;
  site: Maybe<ISite>;
  allSite: ISiteConnection;
  sitePage: Maybe<ISitePage>;
  allSitePage: ISitePageConnection;
  markdownRemark: Maybe<IMarkdownRemark>;
  allMarkdownRemark: IMarkdownRemarkConnection;
  imageSharp: Maybe<IImageSharp>;
  allImageSharp: IImageSharpConnection;
  authorYaml: Maybe<IAuthorYaml>;
  allAuthorYaml: IAuthorYamlConnection;
  siteBuildMetadata: Maybe<ISiteBuildMetadata>;
  allSiteBuildMetadata: ISiteBuildMetadataConnection;
  sitePlugin: Maybe<ISitePlugin>;
  allSitePlugin: ISitePluginConnection;
};


export type IQueryFileArgs = {
  sourceInstanceName: Maybe<IStringQueryOperatorInput>;
  absolutePath: Maybe<IStringQueryOperatorInput>;
  relativePath: Maybe<IStringQueryOperatorInput>;
  extension: Maybe<IStringQueryOperatorInput>;
  size: Maybe<IIntQueryOperatorInput>;
  prettySize: Maybe<IStringQueryOperatorInput>;
  modifiedTime: Maybe<IDateQueryOperatorInput>;
  accessTime: Maybe<IDateQueryOperatorInput>;
  changeTime: Maybe<IDateQueryOperatorInput>;
  birthTime: Maybe<IDateQueryOperatorInput>;
  root: Maybe<IStringQueryOperatorInput>;
  dir: Maybe<IStringQueryOperatorInput>;
  base: Maybe<IStringQueryOperatorInput>;
  ext: Maybe<IStringQueryOperatorInput>;
  name: Maybe<IStringQueryOperatorInput>;
  relativeDirectory: Maybe<IStringQueryOperatorInput>;
  dev: Maybe<IIntQueryOperatorInput>;
  mode: Maybe<IIntQueryOperatorInput>;
  nlink: Maybe<IIntQueryOperatorInput>;
  uid: Maybe<IIntQueryOperatorInput>;
  gid: Maybe<IIntQueryOperatorInput>;
  rdev: Maybe<IIntQueryOperatorInput>;
  ino: Maybe<IFloatQueryOperatorInput>;
  atimeMs: Maybe<IFloatQueryOperatorInput>;
  mtimeMs: Maybe<IFloatQueryOperatorInput>;
  ctimeMs: Maybe<IFloatQueryOperatorInput>;
  atime: Maybe<IDateQueryOperatorInput>;
  mtime: Maybe<IDateQueryOperatorInput>;
  ctime: Maybe<IDateQueryOperatorInput>;
  birthtime: Maybe<IDateQueryOperatorInput>;
  birthtimeMs: Maybe<IFloatQueryOperatorInput>;
  blksize: Maybe<IIntQueryOperatorInput>;
  blocks: Maybe<IIntQueryOperatorInput>;
  publicURL: Maybe<IStringQueryOperatorInput>;
  childrenMarkdownRemark: Maybe<IMarkdownRemarkFilterListInput>;
  childMarkdownRemark: Maybe<IMarkdownRemarkFilterInput>;
  childrenImageSharp: Maybe<IImageSharpFilterListInput>;
  childImageSharp: Maybe<IImageSharpFilterInput>;
  childrenAuthorYaml: Maybe<IAuthorYamlFilterListInput>;
  childAuthorYaml: Maybe<IAuthorYamlFilterInput>;
  id: Maybe<IStringQueryOperatorInput>;
  parent: Maybe<INodeFilterInput>;
  children: Maybe<INodeFilterListInput>;
  internal: Maybe<IInternalFilterInput>;
};


export type IQueryAllFileArgs = {
  filter: Maybe<IFileFilterInput>;
  sort: Maybe<IFileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type IQueryDirectoryArgs = {
  sourceInstanceName: Maybe<IStringQueryOperatorInput>;
  absolutePath: Maybe<IStringQueryOperatorInput>;
  relativePath: Maybe<IStringQueryOperatorInput>;
  extension: Maybe<IStringQueryOperatorInput>;
  size: Maybe<IIntQueryOperatorInput>;
  prettySize: Maybe<IStringQueryOperatorInput>;
  modifiedTime: Maybe<IDateQueryOperatorInput>;
  accessTime: Maybe<IDateQueryOperatorInput>;
  changeTime: Maybe<IDateQueryOperatorInput>;
  birthTime: Maybe<IDateQueryOperatorInput>;
  root: Maybe<IStringQueryOperatorInput>;
  dir: Maybe<IStringQueryOperatorInput>;
  base: Maybe<IStringQueryOperatorInput>;
  ext: Maybe<IStringQueryOperatorInput>;
  name: Maybe<IStringQueryOperatorInput>;
  relativeDirectory: Maybe<IStringQueryOperatorInput>;
  dev: Maybe<IIntQueryOperatorInput>;
  mode: Maybe<IIntQueryOperatorInput>;
  nlink: Maybe<IIntQueryOperatorInput>;
  uid: Maybe<IIntQueryOperatorInput>;
  gid: Maybe<IIntQueryOperatorInput>;
  rdev: Maybe<IIntQueryOperatorInput>;
  ino: Maybe<IFloatQueryOperatorInput>;
  atimeMs: Maybe<IFloatQueryOperatorInput>;
  mtimeMs: Maybe<IFloatQueryOperatorInput>;
  ctimeMs: Maybe<IFloatQueryOperatorInput>;
  atime: Maybe<IDateQueryOperatorInput>;
  mtime: Maybe<IDateQueryOperatorInput>;
  ctime: Maybe<IDateQueryOperatorInput>;
  birthtime: Maybe<IDateQueryOperatorInput>;
  birthtimeMs: Maybe<IFloatQueryOperatorInput>;
  blksize: Maybe<IIntQueryOperatorInput>;
  blocks: Maybe<IIntQueryOperatorInput>;
  id: Maybe<IStringQueryOperatorInput>;
  parent: Maybe<INodeFilterInput>;
  children: Maybe<INodeFilterListInput>;
  internal: Maybe<IInternalFilterInput>;
};


export type IQueryAllDirectoryArgs = {
  filter: Maybe<IDirectoryFilterInput>;
  sort: Maybe<IDirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type IQuerySiteArgs = {
  buildTime: Maybe<IDateQueryOperatorInput>;
  siteMetadata: Maybe<ISiteSiteMetadataFilterInput>;
  pathPrefix: Maybe<IStringQueryOperatorInput>;
  mapping: Maybe<ISiteMappingFilterInput>;
  polyfill: Maybe<IBooleanQueryOperatorInput>;
  id: Maybe<IStringQueryOperatorInput>;
  parent: Maybe<INodeFilterInput>;
  children: Maybe<INodeFilterListInput>;
  internal: Maybe<IInternalFilterInput>;
};


export type IQueryAllSiteArgs = {
  filter: Maybe<ISiteFilterInput>;
  sort: Maybe<ISiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type IQuerySitePageArgs = {
  path: Maybe<IStringQueryOperatorInput>;
  component: Maybe<IStringQueryOperatorInput>;
  internalComponentName: Maybe<IStringQueryOperatorInput>;
  componentChunkName: Maybe<IStringQueryOperatorInput>;
  matchPath: Maybe<IStringQueryOperatorInput>;
  id: Maybe<IStringQueryOperatorInput>;
  parent: Maybe<INodeFilterInput>;
  children: Maybe<INodeFilterListInput>;
  internal: Maybe<IInternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<IBooleanQueryOperatorInput>;
  context: Maybe<ISitePageContextFilterInput>;
  pluginCreator: Maybe<ISitePluginFilterInput>;
  pluginCreatorId: Maybe<IStringQueryOperatorInput>;
  componentPath: Maybe<IStringQueryOperatorInput>;
};


export type IQueryAllSitePageArgs = {
  filter: Maybe<ISitePageFilterInput>;
  sort: Maybe<ISitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type IQueryMarkdownRemarkArgs = {
  id: Maybe<IStringQueryOperatorInput>;
  frontmatter: Maybe<IMarkdownRemarkFrontmatterFilterInput>;
  excerpt: Maybe<IStringQueryOperatorInput>;
  rawMarkdownBody: Maybe<IStringQueryOperatorInput>;
  fileAbsolutePath: Maybe<IStringQueryOperatorInput>;
  fields: Maybe<IMarkdownRemarkFieldsFilterInput>;
  html: Maybe<IStringQueryOperatorInput>;
  htmlAst: Maybe<IJsonQueryOperatorInput>;
  excerptAst: Maybe<IJsonQueryOperatorInput>;
  headings: Maybe<IMarkdownHeadingFilterListInput>;
  timeToRead: Maybe<IIntQueryOperatorInput>;
  tableOfContents: Maybe<IStringQueryOperatorInput>;
  wordCount: Maybe<IMarkdownWordCountFilterInput>;
  parent: Maybe<INodeFilterInput>;
  children: Maybe<INodeFilterListInput>;
  internal: Maybe<IInternalFilterInput>;
};


export type IQueryAllMarkdownRemarkArgs = {
  filter: Maybe<IMarkdownRemarkFilterInput>;
  sort: Maybe<IMarkdownRemarkSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type IQueryImageSharpArgs = {
  fixed: Maybe<IImageSharpFixedFilterInput>;
  resolutions: Maybe<IImageSharpResolutionsFilterInput>;
  fluid: Maybe<IImageSharpFluidFilterInput>;
  sizes: Maybe<IImageSharpSizesFilterInput>;
  gatsbyImageData: Maybe<IJsonQueryOperatorInput>;
  original: Maybe<IImageSharpOriginalFilterInput>;
  resize: Maybe<IImageSharpResizeFilterInput>;
  id: Maybe<IStringQueryOperatorInput>;
  parent: Maybe<INodeFilterInput>;
  children: Maybe<INodeFilterListInput>;
  internal: Maybe<IInternalFilterInput>;
};


export type IQueryAllImageSharpArgs = {
  filter: Maybe<IImageSharpFilterInput>;
  sort: Maybe<IImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type IQueryAuthorYamlArgs = {
  id: Maybe<IStringQueryOperatorInput>;
  parent: Maybe<INodeFilterInput>;
  children: Maybe<INodeFilterListInput>;
  internal: Maybe<IInternalFilterInput>;
  bio: Maybe<IStringQueryOperatorInput>;
  profilepicture: Maybe<IFileFilterInput>;
  twitter: Maybe<IStringQueryOperatorInput>;
  github: Maybe<IStringQueryOperatorInput>;
};


export type IQueryAllAuthorYamlArgs = {
  filter: Maybe<IAuthorYamlFilterInput>;
  sort: Maybe<IAuthorYamlSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type IQuerySiteBuildMetadataArgs = {
  id: Maybe<IStringQueryOperatorInput>;
  parent: Maybe<INodeFilterInput>;
  children: Maybe<INodeFilterListInput>;
  internal: Maybe<IInternalFilterInput>;
  buildTime: Maybe<IDateQueryOperatorInput>;
};


export type IQueryAllSiteBuildMetadataArgs = {
  filter: Maybe<ISiteBuildMetadataFilterInput>;
  sort: Maybe<ISiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type IQuerySitePluginArgs = {
  id: Maybe<IStringQueryOperatorInput>;
  parent: Maybe<INodeFilterInput>;
  children: Maybe<INodeFilterListInput>;
  internal: Maybe<IInternalFilterInput>;
  resolve: Maybe<IStringQueryOperatorInput>;
  name: Maybe<IStringQueryOperatorInput>;
  version: Maybe<IStringQueryOperatorInput>;
  pluginOptions: Maybe<ISitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<IStringQueryOperatorInput>;
  browserAPIs: Maybe<IStringQueryOperatorInput>;
  ssrAPIs: Maybe<IStringQueryOperatorInput>;
  pluginFilepath: Maybe<IStringQueryOperatorInput>;
  packageJson: Maybe<ISitePluginPackageJsonFilterInput>;
};


export type IQueryAllSitePluginArgs = {
  filter: Maybe<ISitePluginFilterInput>;
  sort: Maybe<ISitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

export type ISite = INode & {
  buildTime: Maybe<Scalars['Date']>;
  siteMetadata: Maybe<ISiteSiteMetadata>;
  pathPrefix: Maybe<Scalars['String']>;
  mapping: Maybe<ISiteMapping>;
  polyfill: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  parent: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
};


export type ISiteBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type ISiteBuildMetadata = INode & {
  id: Scalars['ID'];
  parent: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
  buildTime: Maybe<Scalars['Date']>;
};


export type ISiteBuildMetadataBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type ISiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISiteBuildMetadataEdge>;
  nodes: Array<ISiteBuildMetadata>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ISiteBuildMetadataGroupConnection>;
};


export type ISiteBuildMetadataConnectionDistinctArgs = {
  field: ISiteBuildMetadataFieldsEnum;
};


export type ISiteBuildMetadataConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ISiteBuildMetadataFieldsEnum;
};

export type ISiteBuildMetadataEdge = {
  next: Maybe<ISiteBuildMetadata>;
  node: ISiteBuildMetadata;
  previous: Maybe<ISiteBuildMetadata>;
};

export type ISiteBuildMetadataFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'buildTime';

export type ISiteBuildMetadataFilterInput = {
  id: Maybe<IStringQueryOperatorInput>;
  parent: Maybe<INodeFilterInput>;
  children: Maybe<INodeFilterListInput>;
  internal: Maybe<IInternalFilterInput>;
  buildTime: Maybe<IDateQueryOperatorInput>;
};

export type ISiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISiteBuildMetadataEdge>;
  nodes: Array<ISiteBuildMetadata>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type ISiteBuildMetadataSortInput = {
  fields: Maybe<Array<Maybe<ISiteBuildMetadataFieldsEnum>>>;
  order: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type ISiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISiteEdge>;
  nodes: Array<ISite>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ISiteGroupConnection>;
};


export type ISiteConnectionDistinctArgs = {
  field: ISiteFieldsEnum;
};


export type ISiteConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ISiteFieldsEnum;
};

export type ISiteEdge = {
  next: Maybe<ISite>;
  node: ISite;
  previous: Maybe<ISite>;
};

export type ISiteFieldsEnum = 
  'buildTime' |
  'siteMetadata___title' |
  'siteMetadata___description' |
  'siteMetadata___author' |
  'siteMetadata___siteUrl' |
  'siteMetadata___social___twitter' |
  'pathPrefix' |
  'mapping___MarkdownRemark_frontmatter_author' |
  'polyfill' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type ISiteFilterInput = {
  buildTime: Maybe<IDateQueryOperatorInput>;
  siteMetadata: Maybe<ISiteSiteMetadataFilterInput>;
  pathPrefix: Maybe<IStringQueryOperatorInput>;
  mapping: Maybe<ISiteMappingFilterInput>;
  polyfill: Maybe<IBooleanQueryOperatorInput>;
  id: Maybe<IStringQueryOperatorInput>;
  parent: Maybe<INodeFilterInput>;
  children: Maybe<INodeFilterListInput>;
  internal: Maybe<IInternalFilterInput>;
};

export type ISiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISiteEdge>;
  nodes: Array<ISite>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type ISiteMapping = {
  MarkdownRemark_frontmatter_author: Maybe<Scalars['String']>;
};

export type ISiteMappingFilterInput = {
  MarkdownRemark_frontmatter_author: Maybe<IStringQueryOperatorInput>;
};

export type ISitePage = INode & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
  isCreatedByStatefulCreatePages: Maybe<Scalars['Boolean']>;
  context: Maybe<ISitePageContext>;
  pluginCreator: Maybe<ISitePlugin>;
  pluginCreatorId: Maybe<Scalars['String']>;
  componentPath: Maybe<Scalars['String']>;
};

export type ISitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISitePageEdge>;
  nodes: Array<ISitePage>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ISitePageGroupConnection>;
};


export type ISitePageConnectionDistinctArgs = {
  field: ISitePageFieldsEnum;
};


export type ISitePageConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ISitePageFieldsEnum;
};

export type ISitePageContext = {
  slug: Maybe<Scalars['String']>;
  previous: Maybe<ISitePageContextPrevious>;
  next: Maybe<ISitePageContextNext>;
};

export type ISitePageContextFilterInput = {
  slug: Maybe<IStringQueryOperatorInput>;
  previous: Maybe<ISitePageContextPreviousFilterInput>;
  next: Maybe<ISitePageContextNextFilterInput>;
};

export type ISitePageContextNext = {
  fields: Maybe<ISitePageContextNextFields>;
  frontmatter: Maybe<ISitePageContextNextFrontmatter>;
};

export type ISitePageContextNextFields = {
  slug: Maybe<Scalars['String']>;
};

export type ISitePageContextNextFieldsFilterInput = {
  slug: Maybe<IStringQueryOperatorInput>;
};

export type ISitePageContextNextFilterInput = {
  fields: Maybe<ISitePageContextNextFieldsFilterInput>;
  frontmatter: Maybe<ISitePageContextNextFrontmatterFilterInput>;
};

export type ISitePageContextNextFrontmatter = {
  title: Maybe<Scalars['String']>;
};

export type ISitePageContextNextFrontmatterFilterInput = {
  title: Maybe<IStringQueryOperatorInput>;
};

export type ISitePageContextPrevious = {
  fields: Maybe<ISitePageContextPreviousFields>;
  frontmatter: Maybe<ISitePageContextPreviousFrontmatter>;
};

export type ISitePageContextPreviousFields = {
  slug: Maybe<Scalars['String']>;
};

export type ISitePageContextPreviousFieldsFilterInput = {
  slug: Maybe<IStringQueryOperatorInput>;
};

export type ISitePageContextPreviousFilterInput = {
  fields: Maybe<ISitePageContextPreviousFieldsFilterInput>;
  frontmatter: Maybe<ISitePageContextPreviousFrontmatterFilterInput>;
};

export type ISitePageContextPreviousFrontmatter = {
  title: Maybe<Scalars['String']>;
};

export type ISitePageContextPreviousFrontmatterFilterInput = {
  title: Maybe<IStringQueryOperatorInput>;
};

export type ISitePageEdge = {
  next: Maybe<ISitePage>;
  node: ISitePage;
  previous: Maybe<ISitePage>;
};

export type ISitePageFieldsEnum = 
  'path' |
  'component' |
  'internalComponentName' |
  'componentChunkName' |
  'matchPath' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'isCreatedByStatefulCreatePages' |
  'context___slug' |
  'context___previous___fields___slug' |
  'context___previous___frontmatter___title' |
  'context___next___fields___slug' |
  'context___next___frontmatter___title' |
  'pluginCreator___id' |
  'pluginCreator___parent___id' |
  'pluginCreator___parent___parent___id' |
  'pluginCreator___parent___parent___children' |
  'pluginCreator___parent___children' |
  'pluginCreator___parent___children___id' |
  'pluginCreator___parent___children___children' |
  'pluginCreator___parent___internal___content' |
  'pluginCreator___parent___internal___contentDigest' |
  'pluginCreator___parent___internal___description' |
  'pluginCreator___parent___internal___fieldOwners' |
  'pluginCreator___parent___internal___ignoreType' |
  'pluginCreator___parent___internal___mediaType' |
  'pluginCreator___parent___internal___owner' |
  'pluginCreator___parent___internal___type' |
  'pluginCreator___children' |
  'pluginCreator___children___id' |
  'pluginCreator___children___parent___id' |
  'pluginCreator___children___parent___children' |
  'pluginCreator___children___children' |
  'pluginCreator___children___children___id' |
  'pluginCreator___children___children___children' |
  'pluginCreator___children___internal___content' |
  'pluginCreator___children___internal___contentDigest' |
  'pluginCreator___children___internal___description' |
  'pluginCreator___children___internal___fieldOwners' |
  'pluginCreator___children___internal___ignoreType' |
  'pluginCreator___children___internal___mediaType' |
  'pluginCreator___children___internal___owner' |
  'pluginCreator___children___internal___type' |
  'pluginCreator___internal___content' |
  'pluginCreator___internal___contentDigest' |
  'pluginCreator___internal___description' |
  'pluginCreator___internal___fieldOwners' |
  'pluginCreator___internal___ignoreType' |
  'pluginCreator___internal___mediaType' |
  'pluginCreator___internal___owner' |
  'pluginCreator___internal___type' |
  'pluginCreator___resolve' |
  'pluginCreator___name' |
  'pluginCreator___version' |
  'pluginCreator___pluginOptions___plugins' |
  'pluginCreator___pluginOptions___plugins___resolve' |
  'pluginCreator___pluginOptions___plugins___id' |
  'pluginCreator___pluginOptions___plugins___name' |
  'pluginCreator___pluginOptions___plugins___version' |
  'pluginCreator___pluginOptions___plugins___nodeAPIs' |
  'pluginCreator___pluginOptions___plugins___browserAPIs' |
  'pluginCreator___pluginOptions___plugins___ssrAPIs' |
  'pluginCreator___pluginOptions___plugins___pluginFilepath' |
  'pluginCreator___pluginOptions___path' |
  'pluginCreator___pluginOptions___name' |
  'pluginCreator___pluginOptions___exclude' |
  'pluginCreator___pluginOptions___tight' |
  'pluginCreator___pluginOptions___fromHeading' |
  'pluginCreator___pluginOptions___toHeading' |
  'pluginCreator___pluginOptions___maxWidth' |
  'pluginCreator___pluginOptions___linkImagesToOriginal' |
  'pluginCreator___pluginOptions___showCaptions' |
  'pluginCreator___pluginOptions___markdownCaptions' |
  'pluginCreator___pluginOptions___sizeByPixelDensity' |
  'pluginCreator___pluginOptions___backgroundColor' |
  'pluginCreator___pluginOptions___quality' |
  'pluginCreator___pluginOptions___withWebp' |
  'pluginCreator___pluginOptions___tracedSVG' |
  'pluginCreator___pluginOptions___loading' |
  'pluginCreator___pluginOptions___disableBgImageOnAlpha' |
  'pluginCreator___pluginOptions___disableBgImage' |
  'pluginCreator___pluginOptions___className' |
  'pluginCreator___pluginOptions___offsetY' |
  'pluginCreator___pluginOptions___icon' |
  'pluginCreator___pluginOptions___isIconAfterHeader' |
  'pluginCreator___pluginOptions___active' |
  'pluginCreator___pluginOptions___size' |
  'pluginCreator___pluginOptions___styles___display' |
  'pluginCreator___pluginOptions___styles___margin' |
  'pluginCreator___pluginOptions___styles___margin_top' |
  'pluginCreator___pluginOptions___styles___position' |
  'pluginCreator___pluginOptions___styles___top' |
  'pluginCreator___pluginOptions___styles___width' |
  'pluginCreator___pluginOptions___base64Width' |
  'pluginCreator___pluginOptions___stripMetadata' |
  'pluginCreator___pluginOptions___defaultQuality' |
  'pluginCreator___pluginOptions___failOnError' |
  'pluginCreator___pluginOptions___trackingId' |
  'pluginCreator___pluginOptions___head' |
  'pluginCreator___pluginOptions___anonymize' |
  'pluginCreator___pluginOptions___respectDNT' |
  'pluginCreator___pluginOptions___pageTransitionDelay' |
  'pluginCreator___pluginOptions___short_name' |
  'pluginCreator___pluginOptions___start_url' |
  'pluginCreator___pluginOptions___background_color' |
  'pluginCreator___pluginOptions___theme_color' |
  'pluginCreator___pluginOptions___display' |
  'pluginCreator___pluginOptions___legacy' |
  'pluginCreator___pluginOptions___theme_color_in_head' |
  'pluginCreator___pluginOptions___cache_busting_mode' |
  'pluginCreator___pluginOptions___crossOrigin' |
  'pluginCreator___pluginOptions___include_favicon' |
  'pluginCreator___pluginOptions___cacheDigest' |
  'pluginCreator___pluginOptions___isTSX' |
  'pluginCreator___pluginOptions___jsxPragma' |
  'pluginCreator___pluginOptions___allExtensions' |
  'pluginCreator___pluginOptions___codegenConfig___typesPrefix' |
  'pluginCreator___pluginOptions___codegenConfig___avoidOptionals' |
  'pluginCreator___pluginOptions___publisherId' |
  'pluginCreator___pluginOptions___pathCheck' |
  'pluginCreator___nodeAPIs' |
  'pluginCreator___browserAPIs' |
  'pluginCreator___ssrAPIs' |
  'pluginCreator___pluginFilepath' |
  'pluginCreator___packageJson___name' |
  'pluginCreator___packageJson___description' |
  'pluginCreator___packageJson___version' |
  'pluginCreator___packageJson___main' |
  'pluginCreator___packageJson___license' |
  'pluginCreator___packageJson___dependencies' |
  'pluginCreator___packageJson___dependencies___name' |
  'pluginCreator___packageJson___dependencies___version' |
  'pluginCreator___packageJson___devDependencies' |
  'pluginCreator___packageJson___devDependencies___name' |
  'pluginCreator___packageJson___devDependencies___version' |
  'pluginCreator___packageJson___peerDependencies' |
  'pluginCreator___packageJson___peerDependencies___name' |
  'pluginCreator___packageJson___peerDependencies___version' |
  'pluginCreator___packageJson___keywords' |
  'pluginCreatorId' |
  'componentPath';

export type ISitePageFilterInput = {
  path: Maybe<IStringQueryOperatorInput>;
  component: Maybe<IStringQueryOperatorInput>;
  internalComponentName: Maybe<IStringQueryOperatorInput>;
  componentChunkName: Maybe<IStringQueryOperatorInput>;
  matchPath: Maybe<IStringQueryOperatorInput>;
  id: Maybe<IStringQueryOperatorInput>;
  parent: Maybe<INodeFilterInput>;
  children: Maybe<INodeFilterListInput>;
  internal: Maybe<IInternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<IBooleanQueryOperatorInput>;
  context: Maybe<ISitePageContextFilterInput>;
  pluginCreator: Maybe<ISitePluginFilterInput>;
  pluginCreatorId: Maybe<IStringQueryOperatorInput>;
  componentPath: Maybe<IStringQueryOperatorInput>;
};

export type ISitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISitePageEdge>;
  nodes: Array<ISitePage>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type ISitePageSortInput = {
  fields: Maybe<Array<Maybe<ISitePageFieldsEnum>>>;
  order: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type ISitePlugin = INode & {
  id: Scalars['ID'];
  parent: Maybe<INode>;
  children: Array<INode>;
  internal: IInternal;
  resolve: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  pluginOptions: Maybe<ISitePluginPluginOptions>;
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath: Maybe<Scalars['String']>;
  packageJson: Maybe<ISitePluginPackageJson>;
};

export type ISitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISitePluginEdge>;
  nodes: Array<ISitePlugin>;
  pageInfo: IPageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ISitePluginGroupConnection>;
};


export type ISitePluginConnectionDistinctArgs = {
  field: ISitePluginFieldsEnum;
};


export type ISitePluginConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: ISitePluginFieldsEnum;
};

export type ISitePluginEdge = {
  next: Maybe<ISitePlugin>;
  node: ISitePlugin;
  previous: Maybe<ISitePlugin>;
};

export type ISitePluginFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'resolve' |
  'name' |
  'version' |
  'pluginOptions___plugins' |
  'pluginOptions___plugins___resolve' |
  'pluginOptions___plugins___id' |
  'pluginOptions___plugins___name' |
  'pluginOptions___plugins___version' |
  'pluginOptions___plugins___pluginOptions___exclude' |
  'pluginOptions___plugins___pluginOptions___tight' |
  'pluginOptions___plugins___pluginOptions___fromHeading' |
  'pluginOptions___plugins___pluginOptions___toHeading' |
  'pluginOptions___plugins___pluginOptions___maxWidth' |
  'pluginOptions___plugins___pluginOptions___linkImagesToOriginal' |
  'pluginOptions___plugins___pluginOptions___showCaptions' |
  'pluginOptions___plugins___pluginOptions___markdownCaptions' |
  'pluginOptions___plugins___pluginOptions___sizeByPixelDensity' |
  'pluginOptions___plugins___pluginOptions___backgroundColor' |
  'pluginOptions___plugins___pluginOptions___quality' |
  'pluginOptions___plugins___pluginOptions___withWebp' |
  'pluginOptions___plugins___pluginOptions___tracedSVG' |
  'pluginOptions___plugins___pluginOptions___loading' |
  'pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha' |
  'pluginOptions___plugins___pluginOptions___disableBgImage' |
  'pluginOptions___plugins___pluginOptions___className' |
  'pluginOptions___plugins___pluginOptions___offsetY' |
  'pluginOptions___plugins___pluginOptions___icon' |
  'pluginOptions___plugins___pluginOptions___isIconAfterHeader' |
  'pluginOptions___plugins___pluginOptions___active' |
  'pluginOptions___plugins___pluginOptions___size' |
  'pluginOptions___plugins___nodeAPIs' |
  'pluginOptions___plugins___browserAPIs' |
  'pluginOptions___plugins___ssrAPIs' |
  'pluginOptions___plugins___pluginFilepath' |
  'pluginOptions___path' |
  'pluginOptions___name' |
  'pluginOptions___exclude' |
  'pluginOptions___tight' |
  'pluginOptions___fromHeading' |
  'pluginOptions___toHeading' |
  'pluginOptions___maxWidth' |
  'pluginOptions___linkImagesToOriginal' |
  'pluginOptions___showCaptions' |
  'pluginOptions___markdownCaptions' |
  'pluginOptions___sizeByPixelDensity' |
  'pluginOptions___backgroundColor' |
  'pluginOptions___quality' |
  'pluginOptions___withWebp' |
  'pluginOptions___tracedSVG' |
  'pluginOptions___loading' |
  'pluginOptions___disableBgImageOnAlpha' |
  'pluginOptions___disableBgImage' |
  'pluginOptions___className' |
  'pluginOptions___offsetY' |
  'pluginOptions___icon' |
  'pluginOptions___isIconAfterHeader' |
  'pluginOptions___active' |
  'pluginOptions___size' |
  'pluginOptions___styles___display' |
  'pluginOptions___styles___margin' |
  'pluginOptions___styles___margin_top' |
  'pluginOptions___styles___position' |
  'pluginOptions___styles___top' |
  'pluginOptions___styles___width' |
  'pluginOptions___base64Width' |
  'pluginOptions___stripMetadata' |
  'pluginOptions___defaultQuality' |
  'pluginOptions___failOnError' |
  'pluginOptions___trackingId' |
  'pluginOptions___head' |
  'pluginOptions___anonymize' |
  'pluginOptions___respectDNT' |
  'pluginOptions___pageTransitionDelay' |
  'pluginOptions___short_name' |
  'pluginOptions___start_url' |
  'pluginOptions___background_color' |
  'pluginOptions___theme_color' |
  'pluginOptions___display' |
  'pluginOptions___legacy' |
  'pluginOptions___theme_color_in_head' |
  'pluginOptions___cache_busting_mode' |
  'pluginOptions___crossOrigin' |
  'pluginOptions___include_favicon' |
  'pluginOptions___cacheDigest' |
  'pluginOptions___isTSX' |
  'pluginOptions___jsxPragma' |
  'pluginOptions___allExtensions' |
  'pluginOptions___codegenConfig___typesPrefix' |
  'pluginOptions___codegenConfig___avoidOptionals' |
  'pluginOptions___publisherId' |
  'pluginOptions___pathCheck' |
  'nodeAPIs' |
  'browserAPIs' |
  'ssrAPIs' |
  'pluginFilepath' |
  'packageJson___name' |
  'packageJson___description' |
  'packageJson___version' |
  'packageJson___main' |
  'packageJson___license' |
  'packageJson___dependencies' |
  'packageJson___dependencies___name' |
  'packageJson___dependencies___version' |
  'packageJson___devDependencies' |
  'packageJson___devDependencies___name' |
  'packageJson___devDependencies___version' |
  'packageJson___peerDependencies' |
  'packageJson___peerDependencies___name' |
  'packageJson___peerDependencies___version' |
  'packageJson___keywords';

export type ISitePluginFilterInput = {
  id: Maybe<IStringQueryOperatorInput>;
  parent: Maybe<INodeFilterInput>;
  children: Maybe<INodeFilterListInput>;
  internal: Maybe<IInternalFilterInput>;
  resolve: Maybe<IStringQueryOperatorInput>;
  name: Maybe<IStringQueryOperatorInput>;
  version: Maybe<IStringQueryOperatorInput>;
  pluginOptions: Maybe<ISitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<IStringQueryOperatorInput>;
  browserAPIs: Maybe<IStringQueryOperatorInput>;
  ssrAPIs: Maybe<IStringQueryOperatorInput>;
  pluginFilepath: Maybe<IStringQueryOperatorInput>;
  packageJson: Maybe<ISitePluginPackageJsonFilterInput>;
};

export type ISitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ISitePluginEdge>;
  nodes: Array<ISitePlugin>;
  pageInfo: IPageInfo;
  field: Scalars['String'];
  fieldValue: Maybe<Scalars['String']>;
};

export type ISitePluginPackageJson = {
  name: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  main: Maybe<Scalars['String']>;
  license: Maybe<Scalars['String']>;
  dependencies: Maybe<Array<Maybe<ISitePluginPackageJsonDependencies>>>;
  devDependencies: Maybe<Array<Maybe<ISitePluginPackageJsonDevDependencies>>>;
  peerDependencies: Maybe<Array<Maybe<ISitePluginPackageJsonPeerDependencies>>>;
  keywords: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ISitePluginPackageJsonDependencies = {
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type ISitePluginPackageJsonDependenciesFilterInput = {
  name: Maybe<IStringQueryOperatorInput>;
  version: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch: Maybe<ISitePluginPackageJsonDependenciesFilterInput>;
};

export type ISitePluginPackageJsonDevDependencies = {
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type ISitePluginPackageJsonDevDependenciesFilterInput = {
  name: Maybe<IStringQueryOperatorInput>;
  version: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch: Maybe<ISitePluginPackageJsonDevDependenciesFilterInput>;
};

export type ISitePluginPackageJsonFilterInput = {
  name: Maybe<IStringQueryOperatorInput>;
  description: Maybe<IStringQueryOperatorInput>;
  version: Maybe<IStringQueryOperatorInput>;
  main: Maybe<IStringQueryOperatorInput>;
  license: Maybe<IStringQueryOperatorInput>;
  dependencies: Maybe<ISitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies: Maybe<ISitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies: Maybe<ISitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPackageJsonPeerDependencies = {
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
};

export type ISitePluginPackageJsonPeerDependenciesFilterInput = {
  name: Maybe<IStringQueryOperatorInput>;
  version: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch: Maybe<ISitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type ISitePluginPluginOptions = {
  plugins: Maybe<Array<Maybe<ISitePluginPluginOptionsPlugins>>>;
  path: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  exclude: Maybe<Scalars['String']>;
  tight: Maybe<Scalars['Boolean']>;
  fromHeading: Maybe<Scalars['Int']>;
  toHeading: Maybe<Scalars['Int']>;
  maxWidth: Maybe<Scalars['Int']>;
  linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  showCaptions: Maybe<Scalars['Boolean']>;
  markdownCaptions: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity: Maybe<Scalars['Boolean']>;
  backgroundColor: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  withWebp: Maybe<Scalars['Boolean']>;
  tracedSVG: Maybe<Scalars['Boolean']>;
  loading: Maybe<Scalars['String']>;
  disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
  disableBgImage: Maybe<Scalars['Boolean']>;
  className: Maybe<Scalars['String']>;
  offsetY: Maybe<Scalars['String']>;
  icon: Maybe<Scalars['String']>;
  isIconAfterHeader: Maybe<Scalars['Boolean']>;
  active: Maybe<Scalars['Boolean']>;
  size: Maybe<Scalars['Int']>;
  styles: Maybe<ISitePluginPluginOptionsStyles>;
  base64Width: Maybe<Scalars['Int']>;
  stripMetadata: Maybe<Scalars['Boolean']>;
  defaultQuality: Maybe<Scalars['Int']>;
  failOnError: Maybe<Scalars['Boolean']>;
  trackingId: Maybe<Scalars['String']>;
  head: Maybe<Scalars['Boolean']>;
  anonymize: Maybe<Scalars['Boolean']>;
  respectDNT: Maybe<Scalars['Boolean']>;
  pageTransitionDelay: Maybe<Scalars['Int']>;
  short_name: Maybe<Scalars['String']>;
  start_url: Maybe<Scalars['String']>;
  background_color: Maybe<Scalars['String']>;
  theme_color: Maybe<Scalars['String']>;
  display: Maybe<Scalars['String']>;
  legacy: Maybe<Scalars['Boolean']>;
  theme_color_in_head: Maybe<Scalars['Boolean']>;
  cache_busting_mode: Maybe<Scalars['String']>;
  crossOrigin: Maybe<Scalars['String']>;
  include_favicon: Maybe<Scalars['Boolean']>;
  cacheDigest: Maybe<Scalars['String']>;
  isTSX: Maybe<Scalars['Boolean']>;
  jsxPragma: Maybe<Scalars['String']>;
  allExtensions: Maybe<Scalars['Boolean']>;
  codegenConfig: Maybe<ISitePluginPluginOptionsCodegenConfig>;
  publisherId: Maybe<Scalars['String']>;
  pathCheck: Maybe<Scalars['Boolean']>;
};

export type ISitePluginPluginOptionsCodegenConfig = {
  typesPrefix: Maybe<Scalars['String']>;
  avoidOptionals: Maybe<Scalars['Boolean']>;
};

export type ISitePluginPluginOptionsCodegenConfigFilterInput = {
  typesPrefix: Maybe<IStringQueryOperatorInput>;
  avoidOptionals: Maybe<IBooleanQueryOperatorInput>;
};

export type ISitePluginPluginOptionsFilterInput = {
  plugins: Maybe<ISitePluginPluginOptionsPluginsFilterListInput>;
  path: Maybe<IStringQueryOperatorInput>;
  name: Maybe<IStringQueryOperatorInput>;
  exclude: Maybe<IStringQueryOperatorInput>;
  tight: Maybe<IBooleanQueryOperatorInput>;
  fromHeading: Maybe<IIntQueryOperatorInput>;
  toHeading: Maybe<IIntQueryOperatorInput>;
  maxWidth: Maybe<IIntQueryOperatorInput>;
  linkImagesToOriginal: Maybe<IBooleanQueryOperatorInput>;
  showCaptions: Maybe<IBooleanQueryOperatorInput>;
  markdownCaptions: Maybe<IBooleanQueryOperatorInput>;
  sizeByPixelDensity: Maybe<IBooleanQueryOperatorInput>;
  backgroundColor: Maybe<IStringQueryOperatorInput>;
  quality: Maybe<IIntQueryOperatorInput>;
  withWebp: Maybe<IBooleanQueryOperatorInput>;
  tracedSVG: Maybe<IBooleanQueryOperatorInput>;
  loading: Maybe<IStringQueryOperatorInput>;
  disableBgImageOnAlpha: Maybe<IBooleanQueryOperatorInput>;
  disableBgImage: Maybe<IBooleanQueryOperatorInput>;
  className: Maybe<IStringQueryOperatorInput>;
  offsetY: Maybe<IStringQueryOperatorInput>;
  icon: Maybe<IStringQueryOperatorInput>;
  isIconAfterHeader: Maybe<IBooleanQueryOperatorInput>;
  active: Maybe<IBooleanQueryOperatorInput>;
  size: Maybe<IIntQueryOperatorInput>;
  styles: Maybe<ISitePluginPluginOptionsStylesFilterInput>;
  base64Width: Maybe<IIntQueryOperatorInput>;
  stripMetadata: Maybe<IBooleanQueryOperatorInput>;
  defaultQuality: Maybe<IIntQueryOperatorInput>;
  failOnError: Maybe<IBooleanQueryOperatorInput>;
  trackingId: Maybe<IStringQueryOperatorInput>;
  head: Maybe<IBooleanQueryOperatorInput>;
  anonymize: Maybe<IBooleanQueryOperatorInput>;
  respectDNT: Maybe<IBooleanQueryOperatorInput>;
  pageTransitionDelay: Maybe<IIntQueryOperatorInput>;
  short_name: Maybe<IStringQueryOperatorInput>;
  start_url: Maybe<IStringQueryOperatorInput>;
  background_color: Maybe<IStringQueryOperatorInput>;
  theme_color: Maybe<IStringQueryOperatorInput>;
  display: Maybe<IStringQueryOperatorInput>;
  legacy: Maybe<IBooleanQueryOperatorInput>;
  theme_color_in_head: Maybe<IBooleanQueryOperatorInput>;
  cache_busting_mode: Maybe<IStringQueryOperatorInput>;
  crossOrigin: Maybe<IStringQueryOperatorInput>;
  include_favicon: Maybe<IBooleanQueryOperatorInput>;
  cacheDigest: Maybe<IStringQueryOperatorInput>;
  isTSX: Maybe<IBooleanQueryOperatorInput>;
  jsxPragma: Maybe<IStringQueryOperatorInput>;
  allExtensions: Maybe<IBooleanQueryOperatorInput>;
  codegenConfig: Maybe<ISitePluginPluginOptionsCodegenConfigFilterInput>;
  publisherId: Maybe<IStringQueryOperatorInput>;
  pathCheck: Maybe<IBooleanQueryOperatorInput>;
};

export type ISitePluginPluginOptionsPlugins = {
  resolve: Maybe<Scalars['String']>;
  id: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  version: Maybe<Scalars['String']>;
  pluginOptions: Maybe<ISitePluginPluginOptionsPluginsPluginOptions>;
  nodeAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath: Maybe<Scalars['String']>;
};

export type ISitePluginPluginOptionsPluginsFilterInput = {
  resolve: Maybe<IStringQueryOperatorInput>;
  id: Maybe<IStringQueryOperatorInput>;
  name: Maybe<IStringQueryOperatorInput>;
  version: Maybe<IStringQueryOperatorInput>;
  pluginOptions: Maybe<ISitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  nodeAPIs: Maybe<IStringQueryOperatorInput>;
  browserAPIs: Maybe<IStringQueryOperatorInput>;
  ssrAPIs: Maybe<IStringQueryOperatorInput>;
  pluginFilepath: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch: Maybe<ISitePluginPluginOptionsPluginsFilterInput>;
};

export type ISitePluginPluginOptionsPluginsPluginOptions = {
  exclude: Maybe<Scalars['String']>;
  tight: Maybe<Scalars['Boolean']>;
  fromHeading: Maybe<Scalars['Int']>;
  toHeading: Maybe<Scalars['Int']>;
  maxWidth: Maybe<Scalars['Int']>;
  linkImagesToOriginal: Maybe<Scalars['Boolean']>;
  showCaptions: Maybe<Scalars['Boolean']>;
  markdownCaptions: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity: Maybe<Scalars['Boolean']>;
  backgroundColor: Maybe<Scalars['String']>;
  quality: Maybe<Scalars['Int']>;
  withWebp: Maybe<Scalars['Boolean']>;
  tracedSVG: Maybe<Scalars['Boolean']>;
  loading: Maybe<Scalars['String']>;
  disableBgImageOnAlpha: Maybe<Scalars['Boolean']>;
  disableBgImage: Maybe<Scalars['Boolean']>;
  className: Maybe<Scalars['String']>;
  offsetY: Maybe<Scalars['String']>;
  icon: Maybe<Scalars['String']>;
  isIconAfterHeader: Maybe<Scalars['Boolean']>;
  active: Maybe<Scalars['Boolean']>;
  size: Maybe<Scalars['Int']>;
  styles: Maybe<ISitePluginPluginOptionsPluginsPluginOptionsStyles>;
};

export type ISitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  exclude: Maybe<IStringQueryOperatorInput>;
  tight: Maybe<IBooleanQueryOperatorInput>;
  fromHeading: Maybe<IIntQueryOperatorInput>;
  toHeading: Maybe<IIntQueryOperatorInput>;
  maxWidth: Maybe<IIntQueryOperatorInput>;
  linkImagesToOriginal: Maybe<IBooleanQueryOperatorInput>;
  showCaptions: Maybe<IBooleanQueryOperatorInput>;
  markdownCaptions: Maybe<IBooleanQueryOperatorInput>;
  sizeByPixelDensity: Maybe<IBooleanQueryOperatorInput>;
  backgroundColor: Maybe<IStringQueryOperatorInput>;
  quality: Maybe<IIntQueryOperatorInput>;
  withWebp: Maybe<IBooleanQueryOperatorInput>;
  tracedSVG: Maybe<IBooleanQueryOperatorInput>;
  loading: Maybe<IStringQueryOperatorInput>;
  disableBgImageOnAlpha: Maybe<IBooleanQueryOperatorInput>;
  disableBgImage: Maybe<IBooleanQueryOperatorInput>;
  className: Maybe<IStringQueryOperatorInput>;
  offsetY: Maybe<IStringQueryOperatorInput>;
  icon: Maybe<IStringQueryOperatorInput>;
  isIconAfterHeader: Maybe<IBooleanQueryOperatorInput>;
  active: Maybe<IBooleanQueryOperatorInput>;
  size: Maybe<IIntQueryOperatorInput>;
  styles: Maybe<ISitePluginPluginOptionsPluginsPluginOptionsStylesFilterInput>;
};

export type ISitePluginPluginOptionsPluginsPluginOptionsStyles = {
  display: Maybe<Scalars['String']>;
  margin: Maybe<Scalars['String']>;
  margin_top: Maybe<Scalars['String']>;
  position: Maybe<Scalars['String']>;
  top: Maybe<Scalars['String']>;
  width: Maybe<Scalars['String']>;
};

export type ISitePluginPluginOptionsPluginsPluginOptionsStylesFilterInput = {
  display: Maybe<IStringQueryOperatorInput>;
  margin: Maybe<IStringQueryOperatorInput>;
  margin_top: Maybe<IStringQueryOperatorInput>;
  position: Maybe<IStringQueryOperatorInput>;
  top: Maybe<IStringQueryOperatorInput>;
  width: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginPluginOptionsStyles = {
  display: Maybe<Scalars['String']>;
  margin: Maybe<Scalars['String']>;
  margin_top: Maybe<Scalars['String']>;
  position: Maybe<Scalars['String']>;
  top: Maybe<Scalars['String']>;
  width: Maybe<Scalars['String']>;
};

export type ISitePluginPluginOptionsStylesFilterInput = {
  display: Maybe<IStringQueryOperatorInput>;
  margin: Maybe<IStringQueryOperatorInput>;
  margin_top: Maybe<IStringQueryOperatorInput>;
  position: Maybe<IStringQueryOperatorInput>;
  top: Maybe<IStringQueryOperatorInput>;
  width: Maybe<IStringQueryOperatorInput>;
};

export type ISitePluginSortInput = {
  fields: Maybe<Array<Maybe<ISitePluginFieldsEnum>>>;
  order: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type ISiteSiteMetadata = {
  title: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  author: Maybe<Scalars['String']>;
  siteUrl: Maybe<Scalars['String']>;
  social: Maybe<ISiteSiteMetadataSocial>;
};

export type ISiteSiteMetadataFilterInput = {
  title: Maybe<IStringQueryOperatorInput>;
  description: Maybe<IStringQueryOperatorInput>;
  author: Maybe<IStringQueryOperatorInput>;
  siteUrl: Maybe<IStringQueryOperatorInput>;
  social: Maybe<ISiteSiteMetadataSocialFilterInput>;
};

export type ISiteSiteMetadataSocial = {
  twitter: Maybe<Scalars['String']>;
};

export type ISiteSiteMetadataSocialFilterInput = {
  twitter: Maybe<IStringQueryOperatorInput>;
};

export type ISiteSortInput = {
  fields: Maybe<Array<Maybe<ISiteFieldsEnum>>>;
  order: Maybe<Array<Maybe<ISortOrderEnum>>>;
};

export type ISortOrderEnum = 
  'ASC' |
  'DESC';

export type IStringQueryOperatorInput = {
  eq: Maybe<Scalars['String']>;
  ne: Maybe<Scalars['String']>;
  in: Maybe<Array<Maybe<Scalars['String']>>>;
  nin: Maybe<Array<Maybe<Scalars['String']>>>;
  regex: Maybe<Scalars['String']>;
  glob: Maybe<Scalars['String']>;
};

export type ITransformOptions = {
  grayscale: Maybe<Scalars['Boolean']>;
  duotone: Maybe<IDuotoneGradient>;
  rotate: Maybe<Scalars['Int']>;
  trim: Maybe<Scalars['Float']>;
  cropFocus: Maybe<IImageCropFocus>;
  fit: Maybe<IImageFit>;
};

export type IWebPOptions = {
  quality: Maybe<Scalars['Int']>;
};

export type IAllAuthorsQueryQueryVariables = {};


export type IAllAuthorsQueryQuery = { allAuthorYaml: { nodes: Array<Pick<IAuthorYaml, 'bio' | 'id' | 'twitter' | 'github'>> } };

export type IAuthorFragmentFragment = Pick<IAuthorYaml, 'bio' | 'id' | 'twitter' | 'github'>;

export type IAssetsQueryQueryVariables = {};


export type IAssetsQueryQuery = { allFile: { edges: Array<{ node: Pick<IFile, 'id' | 'publicURL' | 'base' | 'absolutePath' | 'dir' | 'relativeDirectory' | 'relativePath'> }> } };

export type IAssetFragmentFragment = Pick<IFile, 'id' | 'publicURL' | 'base' | 'absolutePath' | 'dir' | 'relativeDirectory' | 'relativePath'>;

export type ISiteMetadataQueryQueryVariables = {};


export type ISiteMetadataQueryQuery = { site: Maybe<{ siteMetadata: Maybe<Pick<ISiteSiteMetadata, 'title' | 'description' | 'author' | 'siteUrl'>> }> };

export type INotFoundPageQueryVariables = {};


export type INotFoundPageQuery = { site: Maybe<{ siteMetadata: Maybe<Pick<ISiteSiteMetadata, 'title'>> }> };

export type IAboutPageQueryVariables = {};


export type IAboutPageQuery = { site: Maybe<{ siteMetadata: Maybe<Pick<ISiteSiteMetadata, 'title'>> }>, allAuthorYaml: { nodes: Array<(
      Pick<IAuthorYaml, 'bio' | 'id' | 'twitter' | 'github'>
      & { profilepicture: Maybe<{ childImageSharp: Maybe<{ fixed: Maybe<IGatsbyImageSharpFixedFragment> }> }> }
    )> } };

export type IBlogIndexQueryVariables = {};


export type IBlogIndexQuery = { site: Maybe<{ siteMetadata: Maybe<Pick<ISiteSiteMetadata, 'title'>> }>, allMarkdownRemark: { edges: Array<{ node: (
        Pick<IMarkdownRemark, 'excerpt'>
        & { fields: Maybe<(
          Pick<IMarkdownRemarkFields, 'slug'>
          & { readingTime: Maybe<Pick<IMarkdownRemarkFieldsReadingTime, 'text'>> }
        )>, frontmatter: Maybe<(
          Pick<IMarkdownRemarkFrontmatter, 'date' | 'title' | 'description' | 'tags'>
          & { author: Maybe<Pick<IAuthorYaml, 'id'>> }
        )> }
      ) }> }, allAuthorYaml: { nodes: Array<Pick<IAuthorYaml, 'bio' | 'id' | 'twitter' | 'github'>> } };

export type IBlogPostBySlugQueryVariables = {
  slug: Scalars['String'];
};


export type IBlogPostBySlugQuery = { site: Maybe<{ siteMetadata: Maybe<Pick<ISiteSiteMetadata, 'title'>> }>, markdownRemark: Maybe<(
    Pick<IMarkdownRemark, 'id' | 'excerpt' | 'html'>
    & { fields: Maybe<(
      Pick<IMarkdownRemarkFields, 'slug'>
      & { readingTime: Maybe<Pick<IMarkdownRemarkFieldsReadingTime, 'text'>> }
    )>, frontmatter: Maybe<(
      Pick<IMarkdownRemarkFrontmatter, 'title' | 'date' | 'description' | 'tags' | 'seoFooter'>
      & { author: Maybe<(
        Pick<IAuthorYaml, 'id' | 'bio' | 'twitter' | 'github'>
        & { profilepicture: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<IGatsbyImageSharpFluidFragment> }> }> }
      )> }
    )> }
  )> };

export type IGatsbyImageSharpFixedFragment = Pick<IImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type IGatsbyImageSharpFixed_TracedSvgFragment = Pick<IImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type IGatsbyImageSharpFixed_WithWebpFragment = Pick<IImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type IGatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<IImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type IGatsbyImageSharpFixed_NoBase64Fragment = Pick<IImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type IGatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<IImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type IGatsbyImageSharpFluidFragment = Pick<IImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type IGatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: IImageSharpFluid['presentationHeight'], maxWidth: IImageSharpFluid['presentationWidth'] };

export type IGatsbyImageSharpFluid_TracedSvgFragment = Pick<IImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type IGatsbyImageSharpFluid_WithWebpFragment = Pick<IImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type IGatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<IImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type IGatsbyImageSharpFluid_NoBase64Fragment = Pick<IImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type IGatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<IImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type IGatsbyImageSharpResolutionsFragment = Pick<IImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type IGatsbyImageSharpResolutions_TracedSvgFragment = Pick<IImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type IGatsbyImageSharpResolutions_WithWebpFragment = Pick<IImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type IGatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<IImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type IGatsbyImageSharpResolutions_NoBase64Fragment = Pick<IImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type IGatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<IImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type IGatsbyImageSharpSizesFragment = Pick<IImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type IGatsbyImageSharpSizes_TracedSvgFragment = Pick<IImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type IGatsbyImageSharpSizes_WithWebpFragment = Pick<IImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type IGatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<IImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type IGatsbyImageSharpSizes_NoBase64Fragment = Pick<IImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type IGatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<IImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
