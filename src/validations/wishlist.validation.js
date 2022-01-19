const Joi = require('joi');
const { objectId } = require('./custom.validation');

const createWishlist = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required()
  }),
};

const getWishlists = {
  query: Joi.object().keys({
    name: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getWishlist = {
  params: Joi.object().keys({
    listId: Joi.string(),
  }),
};

const updateWishlist = {
  params: Joi.object().keys({
    listId: Joi.required(),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      description: Joi.string()
    })
    .min(1),
};

const deleteWishlist = {
  params: Joi.object().keys({
    listId: Joi.number().required()
  }),
};

module.exports = {
  createWishlist,
  getWishlists,
  getWishlist,
  updateWishlist,
  deleteWishlist,
};
