// import * as postgres from "https://deno.land/x/postgres@v0.14.0/mod.ts";
// const databaseUrl = Deno.env.get("DATABASE_URL")!;

// export default class DataBaseModel{
//     private static _instance: DataBaseModel;
//     private _connPools;
//     private constructor() {
//     }
//     public get instance() :  DataBaseModel{
//         return DataBaseModel._instance || (DataBaseModel._instance = new DataBaseModel());
//     }
    
//     public get connPools() {
//         return this._connPools || (this._connPools = new postgres.Pool(databaseUrl, 3, true));
//     }
    
// }