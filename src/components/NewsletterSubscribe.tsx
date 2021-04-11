import React from "react";
import Input from "./Input";
import Button from "./Button";

export default function NewsletterSubscribe() {
  return (
    <div className="rounded-md p-3 bg-yellow-600 flex flex-col gap-1">
      <h2 className="text-center text-black">Subscribe to our mailing list!</h2>
      <p className="text-center text-black">
        Get exclusive content, offers and become a friend!
      </p>

      <div id="mc_embed_signup" className="mt-auto">
        <form
          action="https://nosleepjavascript.us2.list-manage.com/subscribe/post?u=c388336980630bd93629517cb&amp;id=53ee07001f"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
          <div
            id="mc_embed_signup_scroll"
            className="flex flex-row justify-center gap-2"
          >
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL" style={{ display: "none" }}>
                email <span style={{ color: "red" }}>*</span>{" "}
              </label>
              <Input
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

            <div className="">
              <Button type="submit" id="mc-embedded-subscribe">
                Subscribe
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
