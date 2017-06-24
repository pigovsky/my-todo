/**
 * Created by max-si-m on 24.06.17.
 */

export interface ITaskDao {
  all()
  add(todoItem)
  delete (todo)
  deleteAll()
}
