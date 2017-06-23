import { SyncStatus } from "./UpdateStatus";


export class Task {
    constructor(
        public id: Number,
        public description: String,
        public syncStatus: UpdateStatus
    ) { }
}