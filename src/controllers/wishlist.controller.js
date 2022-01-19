const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { wishlistService } = require('../services');

const createWishlist = catchAsync(async (req, res) => {
  const wishlist = await wishlistService.createWishlist(req.body);
  res.status(httpStatus.CREATED).send(wishlist);
});

const getWishlists = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await wishlistService.queryWishlists(filter, options);
  res.send(result);
});

const getWishlist = catchAsync(async (req, res) => {
  const wishlist = await wishlistService.getWishlistById(req.params.listId);
  if (!wishlist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Wishlist not found');
  }
  res.send(wishlist);
});

const updateWishlist = catchAsync(async (req, res) => {
  const wishlist = await wishlistService.updateWishlistById(req.params.listId, req.body);
  res.send(wishlist);
});

const deleteWishlist = catchAsync(async (req, res) => {
  await wishlistService.deleteWishlistById(req.params.listId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createWishlist,
  getWishlists,
  getWishlist,
  updateWishlist,
  deleteWishlist,
};
