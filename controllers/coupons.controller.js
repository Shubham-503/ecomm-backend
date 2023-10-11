import COUPON from "../models/coupon.schema.js";
import CustomError from "../utils/customError.js";
import asyncHandler from "../services/asyncHandler.js";

/**********************************************************
 * @CREATE_COUPON
 * @route https://localhost:5000/api/coupon
 * @description Controller used for creating a new coupon
 * @description Only admin and Moderator can create the coupon
 * @returns Coupon Object with success message "Coupon Created SuccessFully"
 *********************************************************/
export const createCoupon = asyncHandler(async (req, res) => {
  const { coupon: couponName, discount } = req.body;

  if (!couponName) {
    throw new CustomError("Coupon name is required", 500);
  }
  try {
    const coupon = await COUPON.create({
      code: couponName,
      discount,
      active: true,
    });
    res.status(200).json({
      success: true,
      message: "Coupon Created SuccessFully",
      coupon,
    });
  } catch (error) {
    throw new CustomError(error.message || "Error in Coupon Creation");
  }
});

/**********************************************************
 * @DEACTIVATE_COUPON
 * @route https://localhost:5000/api/coupon/deactive/:couponId
 * @description Controller used for deactivating the coupon
 * @description Only admin and Moderator can update the coupon
 * @returns Coupon Object with success message "Coupon Deactivated SuccessFully"
 *********************************************************/

export const deactivateCoupon = asyncHandler(async (req, res) => {
  const { couponId } = req.params;

  if (!couponId) {
    throw new CustomError("CouponId is required", 500);
  }

  try {
    const coupon = await COUPON.findByIdAndUpdate(
      couponId,
      { active: false },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!coupon) {
      throw new CustomError("Coupon not found", 400);
    }

    res.status(200).json({
      success: true,
      message: "Coupon Deactivated SuccessFully",
      coupon,
    });
  } catch (error) {
    throw new CustomError(error.message || "Error in Coupon Updation", 500);
  }
});

/**********************************************************
 * @DELETE_COUPON
 * @route https://localhost:5000/api/coupon/:couponId
 * @description Controller used for deleting the coupon
 * @description Only admin and Moderator can delete the coupon
 * @returns Success Message "Coupon Deleted SuccessFully"
 *********************************************************/

export const deleteCoupon = asyncHandler(async (req, res) => {
  const { couponId } = req.params;
  if (!couponId) {
    throw new CustomError("CouponId is required", 500);
  }

  try {
    const coupon = await COUPON.findByIdAndDelete(couponId);

    if (!coupon) {
      throw new CustomError("Coupon not found", 400);
    }

    res.status(200).json({
      success: true,
      message: "Coupon Deleted SuccessFully",
    });
  } catch (error) {
    throw new CustomError(error.message || "Error in Coupon Deletion", 500);
  }
});

/**********************************************************
 * @GET_ALL_COUPONS
 * @route https://localhost:5000/api/coupon
 * @description Controller used for getting all coupons details
 * @description Only admin and Moderator can get all the coupons
 * @returns allCoupons Object
 *********************************************************/

export const getAllCoupons = asyncHandler(async (req, res) => {
  try {
    const coupons = await COUPON.find();

    if (!coupons) {
      throw new CustomError("Coupon Not Found", 500);
    }

    res.status(200).json({
      success: true,
      coupons,
    });
  } catch (error) {
    throw new CustomError(error.message || "Error in Coupon Deletion", 500);
  }
});
