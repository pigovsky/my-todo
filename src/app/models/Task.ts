import { SyncStatus } from './SyncStatus';

export class Task {

  constructor (
    public id: Number,
    public description: String,
    public syncStatus: SyncStatus
  ) {}

}
