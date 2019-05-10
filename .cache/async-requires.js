// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Users/jordanrendall/DevProjects/Production/blog.jordanrendall.com/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Users/jordanrendall/DevProjects/Production/blog.jordanrendall.com/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/jordanrendall/DevProjects/Production/blog.jordanrendall.com/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/Users/jordanrendall/DevProjects/Production/blog.jordanrendall.com/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/jordanrendall/DevProjects/Production/blog.jordanrendall.com/.cache/data.json")

