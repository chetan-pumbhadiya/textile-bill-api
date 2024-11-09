import type { IResponse } from "../types/IResponse";
import { Router } from "express";
import type { Request, Response } from "express";
import * as BillController from "../controllers/billController";
import { parseError } from "../utils/helper";

const router: Router = Router();

router.post("/bill/add", async (req: Request, res: Response) => {
    let ApiResponse: IResponse = { code: 200, data: "" };
    try {
        ApiResponse.code = 200;
        const response: any = await BillController.addNewBill(req.body);
        ApiResponse.data = response.data;
    } catch (error) {
        ApiResponse = parseError(error);
    } finally {
        res.status(ApiResponse.code).send(ApiResponse.data);
    }
});

router.get("/bill/get", async (req: Request, res: Response) => {
    let ApiResponse: IResponse = { code: 200, data: "" };
    try {
        ApiResponse.code = 200;
        const company = req.query.company as string;
        const bill_date = req.query.bill_date as string;
        const response = await BillController.getBill(company, bill_date);
        ApiResponse.data = response;
    } catch (error) {
        ApiResponse = parseError(error);
    } finally {
        res.status(ApiResponse.code).send(ApiResponse.data);
    }
});

export default router;
