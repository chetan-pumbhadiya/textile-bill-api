import moment from "moment";
import BILL from "../models/Bill";
import { IBill } from "../types/IBill";

export const addNewBill = async (payload: IBill) => {
    try {
        console.log("payload", payload);
        let newRoomData: IBill = await BILL.create(payload);
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

        const bill = await BILL.findOne({ company, bill_date: normalizedDate });
        return bill;
    } catch (error) {
        throw error;
    }
};
