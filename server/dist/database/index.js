"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const mongodb_1 = require("mongodb");
const url = `${process.env.MONGODB}`;
console.log(url);
const connectDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield mongodb_1.MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = client.db(`${process.env.MONGODB_DB_NAME}`);
    return {
        users: db.collection(`${process.env.MONGODB_COLLECTION_USERS}`),
        listings: db.collection(`${process.env.MONGODB_COLLECTION_LISTINGS}`)
    };
});
exports.connectDatabase = connectDatabase;
