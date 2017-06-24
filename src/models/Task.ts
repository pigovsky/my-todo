/**
 * Created by nico on 24.06.17.
 */
import {SyncStatus} from "./SyncStatus";

export class Task {
    constructor (
        public id: Number,
        public description: String,
        public syncStatus: SyncStatus
    ){}
}
