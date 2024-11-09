import { Router, type Application, type Request, type Response } from "express";
import bill from "./bill";

const registerRoutes = (app: Application) => {
    const router: Router = Router();

    router.use(bill);

    router.use("/*", (req: Request, res: Response) => {
        res.status(404).send("Not found");
    });

    app.use("/api", router);
};

export default registerRoutes;
