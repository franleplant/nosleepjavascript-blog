import React from "react";
import Helmet from "react-helmet";
import { IAuthorFragmentFragment } from "../../graphql-types";
import { isDark } from "./DarkModeSelect";
import { useSiteMetadata } from "../dal/site";

export interface IProps {
  title: string;
  description?: string;
  lang?: string;
  meta?: Array<any>;
  author?: IAuthorFragmentFragment;
}

export default function SEO(props: IProps) {
  const { description = ``, lang = `en`, meta = [], title, author } = props;
  const siteMeta = useSiteMetadata();

  const metaDescription = description || siteMeta.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMeta.title}`}
      meta={[
        {
          name: `title`,
          content: title,
        },
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author?.twitter || siteMeta.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <MailchimpScript />
      <DarkModeScript />
    </Helmet>
  );
}

export function MailchimpScript() {
  return (
    <script id="mcjs">
      {`!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/c388336980630bd93629517cb/79c014026202565af1500f561.js");
          `}
    </script>
  );
}

export function DarkModeScript() {
  return (
    <script id="dark-mode-script">
      {`
        // best to add inline in head to avoid FOUC
        if (${isDark.toString()}()) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      `}
    </script>
  );
}
