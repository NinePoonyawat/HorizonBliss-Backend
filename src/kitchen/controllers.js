import kitchenService from "./services.js";

const kitchenController = {};

kitchenController.order = async (req, res, next) => {
  try {
    const order = req.body;
    return await kitchenService.order(order);
  } catch (err) {
    next(err);
  }
};

export default kitchenController;
