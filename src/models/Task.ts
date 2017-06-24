import {SyncStatus} from "./SyncStatus";

export class Task {
    constructor (
        public id: Number,
        public text: String,
        public syncStatus: SyncStatus
    ){}
}