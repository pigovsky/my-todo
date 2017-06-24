import { SyncStatus } from './SyncStatus';

export class Task {

  constructor (
    public id: number,
    public description: String,
    public syncStatus: SyncStatus
  ) {}

}
