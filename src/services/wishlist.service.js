const { json } = require('express');
const httpStatus = require('http-status');
const Wishlist = require('../models').Wishlist;
const ApiError = require('../utils/ApiError');
const { Op } = require("sequelize");

/**
 * Create a Wishlist
 * @param {Object} wishlistBody
 * @returns {Promise<Wishlist>}
 */
const createWishlist = async (wishlistBody) => {
  /* if (await Wishlist.isEmailTakenCreate(wishlistBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  } */
  return Wishlist.create(wishlistBody);
};

/**
 * Query for wishlists
 * @param {Object} filter - filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryWishlists = async (filter, options) => {
  const findAllObj = {};
  if(filter.name) findAllObj.where = { name : {[Op.iLike]: '%' + filter.name + '%'} };
  findAllObj.order = [ ['name', options.sortBy || "asc"] ];
  findAllObj.offset = options.offset;
  findAllObj.limit = options.limit;
  return await Wishlist.findAll(findAllObj);
};

/**
 * Get Wishlist by id
 * @param {ObjectId} id
 * @returns {Promise<Wishlist>}
 */
const getWishlistById = async (id) => {
  return Wishlist.findOne({ where: { id } });
};

/**
 * Update Wishlist by id
 * @param {ObjectId} wishlistId
 * @param {Object} updateBody
 * @returns {Promise<Wishlist>}
 */
const updateWishlistById = async (wishlistId, updateBody) => {
  const Wishlist = await getWishlistById(wishlistId);
  if (!Wishlist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Wishlist not found');
  }
  
  /* if (updateBody.email && (await Wishlist.isEmailTaken(updateBody.email, wishlistId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  } */

  Object.assign(Wishlist, updateBody);
  await Wishlist.save();
  return Wishlist;
};

/**
 * Delete Wishlist by id
 * @param {ObjectId} wishlistId
 * @returns {Promise<Wishlist>}
 */
const deleteWishlistById = async (wishlistId) => {
  const Wishlist = await getWishlistById(wishlistId);
  if (!Wishlist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Wishlist not found');
  }
  await Wishlist.destroy();
  return Wishlist;
};

module.exports = {
  createWishlist,
  queryWishlists,
  getWishlistById,
  updateWishlistById,
  deleteWishlistById,
};
