(this["webpackJsonpecommerce-app"]=this["webpackJsonpecommerce-app"]||[]).push([[6],{393:function(e,n,t){"use strict";var c,a=(c=t(1))&&"object"===typeof c&&"default"in c?c.default:c,s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c])}return e},i=function(e){var n=e.color,t=void 0===n?"currentColor":n,c=e.size,i=void 0===c?24:c,l=(e.children,function(e,n){var t={};for(var c in e)n.indexOf(c)>=0||Object.prototype.hasOwnProperty.call(e,c)&&(t[c]=e[c]);return t}(e,["color","size","children"])),r="mdi-icon "+(l.className||"");return a.createElement("svg",s({},l,{className:r,width:i,height:i,fill:t,viewBox:"0 0 24 24"}),a.createElement("path",{d:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"}))},l=a.memo?a.memo(i):i;e.exports=l},468:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return M}));var c=t(20),a=t(0),s=t(1),i=t(439),l=t(440),r=t(441),o=t(67),d=t(50);var j=function(e){var n=e.title_t,t=e.image_s,c=e.image_alt_t,s=e.section_background_image_s,j=e.content_html_raw,_=e.buttons_o;return Object(a.jsx)(d.b,{model:e,className:"landing__header",style:s?{backgroundImage:"url(".concat(s,")")}:{},children:Object(a.jsx)(i.a,{children:Object(a.jsx)(l.a,{children:Object(a.jsxs)(r.a,{md:12,children:[Object(a.jsx)("h2",{className:"landing__header-title",children:n}),Object(a.jsx)("div",{className:"landing__header-subhead",dangerouslySetInnerHTML:{__html:j}}),_.map((function(e,n){var t=e.label_s,c=e.link_s;return Object(a.jsx)(o.a,{href:c,className:"landing__btn landing__btn--header",children:t},n)})),t&&Object(a.jsx)("img",{className:"landing__header-img",src:t,alt:c||""})]})})})})};var _=function(e){var n=e.title_s,t=e.features_o,c=e.closingContent_html_raw,s=e.openingContent_html_raw;return Object(a.jsx)(d.b,{component:"section",className:"landing__section",model:e,children:Object(a.jsxs)(i.a,{children:[Object(a.jsx)(l.a,{children:Object(a.jsxs)(r.a,{md:12,children:[Object(a.jsx)("h3",{className:"landing__section-title",children:n}),s&&Object(a.jsx)("div",{className:"landing__feature landing__feature-caption",style:{width:"100%"},dangerouslySetInnerHTML:{__html:s}})]})}),Object(a.jsx)(l.a,{children:Object(a.jsx)(r.a,{md:12,children:Object(a.jsx)("div",{className:"landing__features-wrap",children:t.map((function(e,n){var t=e.description_t,c=e.icon_s,s=e.title_s;return Object(a.jsxs)("div",{className:"landing__feature",children:[Object(a.jsx)("div",{className:"landing__feature-img-wrap",children:Object(a.jsx)("img",{src:c,alt:""})}),Object(a.jsx)("p",{className:"landing__feature-title",children:s}),Object(a.jsx)("p",{className:"landing__feature-caption",children:t})]},n)}))})})}),Object(a.jsx)(l.a,{children:Object(a.jsx)(r.a,{md:12,children:Object(a.jsx)("p",{className:"landing__additional-title",dangerouslySetInnerHTML:{__html:c}})})})]})})},m=t(447),b=t(448),h=t(393),g=t.n(h);var O=function(e){var n=e.title_s,t=e.testimonials_o;return Object(a.jsx)(d.b,{component:"section",className:"landing__section",model:e,children:Object(a.jsxs)(i.a,{children:[Object(a.jsx)(l.a,{children:Object(a.jsx)(r.a,{md:12,children:Object(a.jsx)("h3",{className:"landing__section-title",children:n})})}),Object(a.jsx)(l.a,{className:"landing__testimonials",children:t.map((function(e,n){var t=e.customer_s,c=e.description_html_raw,s=e.link_s,i=e.stars_i;return Object(a.jsx)(r.a,{lg:4,md:6,children:Object(a.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)(m.a,{children:Object(a.jsxs)(b.a,{className:"landing__testimonial",children:[Object(a.jsx)("p",{className:"landing__testimonial-name",children:t}),Object(a.jsx)("div",{className:"landing__testimonial-stars",children:function(){for(var e=[],n=0;n<i;n++)e.push(Object(a.jsx)(g.a,{},n));return e}()}),Object(a.jsx)("p",{className:"landing__testimonial-review",dangerouslySetInnerHTML:{__html:c}})]})})})},n)}))})]})})};var u=function(e){var n=e.section_background_image_s,t=e.contentAlignment_s,c=e.content_html_raw,s=e.image_alt_s,o=e.image_s,j=e.title_s,_=Object(a.jsx)(r.a,{md:6,sm:12,xs:12,children:Object(a.jsx)("div",{className:"landing__code-text",children:Object(a.jsxs)("div",{className:"landing__code-wrap",children:[Object(a.jsx)(d.b,{component:"h3",model:e,fieldId:"title_s",children:j}),Object(a.jsx)(d.b,{component:"p",model:e,fieldId:"content_html",className:"landing__section-description",dangerouslySetInnerHTML:{__html:c}})]})})}),m=Object(a.jsx)(r.a,{md:6,sm:12,xs:12,children:Object(a.jsx)("div",{className:"landing__code-img landing__code-img--no-shadow",children:Object(a.jsx)("div",{className:"landing__code-wrap",children:Object(a.jsx)(d.b,{component:"img",className:"landing__img landing__img--over",model:e,fieldId:"image_s",src:o,alt:s||""})})})});return Object(a.jsxs)(d.b,{component:"section",className:"landing__section",model:e,children:[n&&Object(a.jsx)("img",{className:"landing__section-background landing__section-background--technologies",src:n,alt:""}),Object(a.jsx)(i.a,{children:Object(a.jsx)(l.a,{className:"landing__code ".concat("right"===t?"landing__code--right":"landing__code--first landing__code--left"),children:"right"===t?Object(a.jsxs)(a.Fragment,{children:[m,_]}):Object(a.jsxs)(a.Fragment,{children:[_,m]})})})]})},x=t(42),p=t(54),f=function(e){var n=e.contentType;return Object(a.jsx)("aside",{className:"landing__section",children:Object(a.jsx)(i.a,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)(r.a,{sm:12,children:Object(a.jsx)(p.a,{color:"warning",className:"alert--neutral",icon:!0,children:Object(a.jsxs)("p",{children:['Unrecognized or unimplemented component of type "',n,'".']})})})})})})},v=t(113),N=t(27),w=t(112),y=t(450),L=t(59),k=t(83);var I={"/component/hero":j,"/component/two-column":u,"/component/feature-list":_,"/component/testimonials":O,"/component/blog_teaser":v.b,"/component/product-teaser":function(e){var n=e.title_s,t=e.numOfProducts_i,o=void 0===t?3:t,j=Object(s.useState)(),_=Object(N.a)(j,2),m=_[0],b=_[1],h=Object(k.b)({limit:o});return Object(s.useEffect)((function(){Object(k.a)(h).pipe(Object(y.a)((function(e){var n=e.response,t=n.total,a=n.items;if(0===t||t<=o)return a;var s=Math.ceil(Math.random()*t)-o;return Object(k.a)(Object(c.a)(Object(c.a)({},h),{},{offset:s})).pipe(Object(L.a)((function(e){return e.response.items})))}))).subscribe((function(e){return b(e)}))}),[o,h.locale,h.currency]),Object(a.jsx)(d.b,{component:"section",className:"landing__section",model:e,children:Object(a.jsxs)(i.a,{children:[Object(a.jsx)(l.a,{children:Object(a.jsx)(r.a,{md:12,children:Object(a.jsx)("h3",{className:"landing__section-title",children:n})})}),Object(a.jsxs)(l.a,{className:"landing__teasers",children:[m&&m.map((function(e){return Object(a.jsx)(w.a,{product:e},e.id)})),m&&0===m.length&&Object(a.jsx)("strong",{style:{display:"block",textAlign:"center",width:"100%"},children:"No products on the catalog yet. Please check back later!"})]})]})})}};function M(e){var n=e.model;return Object(a.jsx)(x.a,{className:"landing__home-page",children:n&&n.sections_o&&n.sections_o.map((function(e){var n=I[e.craftercms.contentTypeId]||f;return Object(a.jsx)(n,Object(c.a)({},e),e.craftercms.id)}))})}}}]);
//# sourceMappingURL=6.39293565.chunk.js.map