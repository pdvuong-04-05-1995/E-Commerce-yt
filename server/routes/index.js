import authRoute from "./authRoutes";
import { notFound, errHandler } from "../middlewares/errHandler";

const initRoutes = (app) => {
  app.use("/api", authRoute);

  app.use(notFound);
  app.use(errHandler);
};

module.exports = initRoutes;
