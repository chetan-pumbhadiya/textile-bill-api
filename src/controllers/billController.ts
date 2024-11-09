import moment from "moment";
import BILL from "../models/Bill";
import { IBill } from "../types/IBill";

export const addNewBill = async (payload: IBill) => {
    try {
        const normalizedDate = moment(payload.bill_date, [
            "D/M/YYYY",
            "DD/MM/YYYY",
        ]).format("DD/MM/YYYY");

        const modifyPayload = { ...payload, bill_date: normalizedDate };
        let newRoomData: IBill = await BILL.create(modifyPayload);
        newRoomData = await newRoomData.save();
        return newRoomData;
    } catch (error) {
        throw error;
    }
};

export const getBill = async (company: string, bill_date: string) => {
    try {
        const normalizedDate = moment(bill_date, [
            "D/M/YYYY",
            "DD/MM/YYYY",
        ]).format("DD/MM/YYYY");
        console.log("normalizedDate", normalizedDate);
        const bill = await BILL.findOne({ company, bill_date: normalizedDate });
        return bill;
    } catch (error) {
        throw error;
    }
};
