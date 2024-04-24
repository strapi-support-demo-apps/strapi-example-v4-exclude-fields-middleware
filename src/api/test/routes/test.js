"use strict";

/**
 * test router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::test.test", {
  config: {
    find: {
      middlewares: ["api::test.remove-private"],
    },
    findOne: {
      middlewares: ["api::test.remove-private"],
    },
  },
});
