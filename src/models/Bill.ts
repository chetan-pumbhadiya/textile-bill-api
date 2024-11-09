import mongoose, { Schema } from "mongoose";
import { IBill } from "../types/IBill";

const billSchema = new Schema(
    {
        company: String,
        party_name: String,
        party_address_1: String,
        party_address_2: String,
        party_contact_no: String,
        party_email: String,
        party_gst_no: String,
        bill_no: String,
        bill_date: String,
        bill_rows: Array<any>,
        bill_cgst: String,
        bill_sgst: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<IBill>("Bill", billSchema, "bills");
