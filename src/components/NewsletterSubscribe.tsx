import React from "react"
import styled from "@emotion/styled"

export interface IProps {}

export default function NewsletterSubscribe(props: IProps) {
  return (
    <Container>
      <h3>Subscribe to our mailing list!</h3>
      <h4>Get exclusive content, offers and become a friend!</h4>
      <section
        dangerouslySetInnerHTML={{
          __html: `
        <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
        <style type="text/css">
            #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
        </style>
        <div id="mc_embed_signup">
        <form action="https://nosleepjavascript.us2.list-manage.com/subscribe/post?u=c388336980630bd93629517cb&amp;id=53ee07001f" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
                
              <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_c388336980630bd93629517cb_53ee07001f" tabindex="-1" value=""></div>
                  <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                  </div>
            </form>
              </div>

        `,
        }}
      />
    </Container>
  )
}

const Container = styled.div`
  border: 2px solid #ff00ff;
  border-radius: 5px;
  margin-bottom: 18px;
  padding: 5px;

  form {
    margin: 0;
  }

  input[type="submit"] {
    background-color: #ff00ff !important;
  }

  input[type=submit]: hover {
    background-color: #ff00ffa1 !important;
  }
`
