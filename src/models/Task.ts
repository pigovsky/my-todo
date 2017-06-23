import {SyncStatus} from "./SyncStatus";
/**
 * Created by U on 23.06.2017.
 */

export class Task {
    constructor (
        public id: Number,
        public description: String,
        public syncStatus: SyncStatus
    ){}
}