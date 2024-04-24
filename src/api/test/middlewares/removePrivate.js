"use strict";

const _ = require("lodash");

/**
 * `removePrivate` middleware
 */

module.exports = (config, { strapi }) => {
  // Add your own logic here.
  return async (ctx, next) => {
    const contentType =
      strapi.contentTypes[
        `api::${ctx.state.route.info.apiName}.${ctx.state.route.info.apiName}`
      ];
    const user = ctx.state.user;
    const removeFields = [
      "private",
      "createdAt",
      "updatedAt",
      "publishedAt",
      "createdBy",
      "updatedBy",
    ];

    if (!user) {
      ctx.query.fields = Object.keys(
        _.omit(contentType.attributes, removeFields)
      );
    }

    await next();
  };
};
