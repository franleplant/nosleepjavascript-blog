(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"40Rc":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("q1tI");var r=n("qKvR");function a(t){return Object(r.b)("a",{href:"https://www.buymeacoffee.com/Kp6R5Zr",className:t.className},Object(r.b)("img",{src:"https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=Kp6R5Zr&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff",alt:"buy me coffee"}))}},"4DAW":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("q1tI");var a=n("qKvR");function c(t){var e;return e="https://c6.patreon.com/becomePatronButton.bundle.js",Object(r.useEffect)((function(){var t=document.createElement("script");return t.src=e,t.async=!0,document.body.appendChild(t),function(){document.body.removeChild(t)}}),[e]),Object(a.b)("a",{href:"https://www.patreon.com/bePatron?u=44509257","data-patreon-widget-type":"become-patron-button",className:t.className},"Become a Patron!")}},Tq89:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return p}));n("q1tI");var r=n("V13v"),a=n("soUV"),c=n("rtRN"),o=n("i2tn"),i=n("wTIg"),b=n("qKvR");function s(t){var e=t.data;if(0===e.length)return null;var n=e.join(" ");return Object(b.b)(u,null,n)}var u=Object(i.a)("div",{target:"e14frcs80"})({name:"1eyoxlr",styles:"margin-top:20px;margin-bottom:20px;color:#ccc;"}),l=n("40Rc"),d=n("4DAW"),m=n("urxY"),f=n("YzAV");function p(t){var e=t.pageContext,n=e.previous,i=e.next,u=t.data.markdownRemark,p=u.frontmatter,v=p.title,j=p.description,O=p.author,h=p.tags,x=void 0===h?[]:h,g=p.seoFooter,y=void 0===g?"":g;return Object(b.b)(a.a,{location:t.location,title:v,description:(j||u.excerpt)+"\nBy "+O.id,author:O},Object(b.b)(f.a,null,Object(b.b)("article",{className:"space-y-5"},Object(b.b)(c.a,{tags:x}),Object(b.b)("header",{className:"pb-3"},Object(b.b)("h1",null," ",v," "),Object(b.b)("div",{className:"py-3 text-sm text-gray-700 dark:text-light_white"},u.frontmatter.date+" • "+u.fields.readingTime.text),Object(b.b)(r.a,{author:O})),Object(b.b)("section",{className:"space-y-5 nsj-post-content",dangerouslySetInnerHTML:{__html:u.html}}),Object(b.b)("section",{className:"flex items-center -m-1"},Object(b.b)(l.a,{className:"m-1"}),Object(b.b)("div",{className:"m-1"},Object(b.b)(d.a,null))),Object(b.b)(o.a,{bounce:!0})),Object(b.b)("div",{className:"py-4"},Object(b.b)(m.a,{previous:n,next:i})),Object(b.b)(s,{data:Array.isArray(y)?y:[y]})))}},V13v:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("q1tI");var r=n("9eSz"),a=n.n(r),c=n("qKvR");function o(t){var e=t.author,n=t.prefixText,r=void 0===n?"Written by":n,o=Object(c.b)("a",{href:e.github,target:"_blank",rel:"noopener noreferrer"},"Github");return Object(c.b)("div",{className:"\n      flex items-center max-w-lg border-t border-b py-5\n      my-5\n\n      border-pink-700\n      dark:border-gray-50\n      dark:border-opacity-25\n      "},Object(c.b)(a.a,{fluid:e.profilepicture.childImageSharp.fluid,alt:e.id,style:{minWidth:75,height:75,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),Object(c.b)("p",{className:"ml-2"},r+" ",Object(c.b)("a",{href:"https://twitter.com/"+e.twitter},e.id),":"," ",e.bio," ",o))}},rtRN:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("q1tI");var r=n("qKvR");function a(t){var e=t.tags,n=t.className;return Object(r.b)("div",{className:"flex flex-wrap -m-0.5 dark:-m-2  "+n},e.map((function(t){return Object(r.b)(c,{key:t},"#"+t)})))}function c(t){return Object(r.b)("span",{className:"\n      m-0.5 rounded px-2\n      text-xs cursor-pointer\n      bg-yellow-600 dark:bg-transparent\n      text-black dark:text-pink-600\n      font-bold\n      "},t.children)}},urxY:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("wTIg"),a=(n("q1tI"),n("Wbzz")),c=n("qKvR");function o(t){var e=t.previous,n=t.next;return Object(c.b)(b,{className:"-m-1"},Object(c.b)(i,{to:null==e?void 0:e.fields.slug,rel:"prev"},"← ",null==e?void 0:e.frontmatter.title),Object(c.b)(i,{to:null==n?void 0:n.fields.slug,rel:"next"},null==n?void 0:n.frontmatter.title," →"))}function i(t){return t.to?Object(c.b)(s,{className:"rounded-md border-pink-600 border p-5 m-1"},Object(c.b)(a.Link,{to:t.to,rel:t.rel},t.children)):null}var b=Object(r.a)("nav",{target:"e5iwqvu0"})("\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  list-style: none;\n  padding: 0;\n  flex-direction: column;\n\n  @media (min-width: 800px) {\n    flex-direction: row;\n  }\n"),s=Object(r.a)("div",{target:"e5iwqvu1"})({name:"12g5z21",styles:"@media (min-width:800px){width:49%;}"})}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-8e3e39b1c9053aaf9a5c.js.map