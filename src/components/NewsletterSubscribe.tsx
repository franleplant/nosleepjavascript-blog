import React from "react";
import styled from "@emotion/styled";
import { COLOR } from "../utils/theme";

export default function NewsletterSubscribe() {
  return (
    <Container>
      <h3>Subscribe to our mailing list!</h3>
      <h4>Get exclusive content, offers and become a friend!</h4>

      <div id="mc_embed_signup">
        <form
          action="https://nosleepjavascript.us2.list-manage.com/subscribe/post?u=c388336980630bd93629517cb&amp;id=53ee07001f"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group" style={{ display: "inline-block" }}>
              <label htmlFor="mce-EMAIL" style={{ display: "none" }}>
                email <span style={{ color: "red" }}>*</span>{" "}
              </label>
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                placeholder="email address"
              />
            </div>
            <div id="mce-responses" style={{ position: "absolute" }}>
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              ></div>
            </div>
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_c388336980630bd93629517cb_53ee07001f"
                tabIndex={-1}
              />
            </div>
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
            />
          </div>
        </form>
      </div>
    </Container>
  );
}

const Container = styled.div`
  text-align: center;
  border: 2px solid ${COLOR.SECONDARY};
  border-radius: 5px;
  margin-bottom: 18px;
  padding: 5px;

  form {
    margin: 0;
  }

  form > div {
    display: flex;
    justify-content: center;
  }

  form > div > * {
    margin: 0px 4px;
  }
`;
