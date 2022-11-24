
const routes = require("next-routes")();

routes
  .add("/competitions/new", "/competitions/new")
  .add("/competitions/:address", "/competitions/show")
  .add("/competitions/:address/requests", "/competitions/requests/index")
  .add("/competitions/:address/requests/new", "/competitions/requests/new");

module.exports = routes;
