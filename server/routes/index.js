import authRoute from "./authRoutes";
import userhRoute from "./userRoutes";
import { notFound, errHandler } from "../middlewares/errHandler";

const initRoutes = (app) => {
  app.use("/api", authRoute);
  app.use("/api", userhRoute);

  app.use(notFound);
  app.use(errHandler);
};

module.exports = initRoutes;
