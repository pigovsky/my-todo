/**
 * Created by U on 23.06.2017.
 */


export interface ITaskDao {
    all()
    add(todoItem)
    delete (todo)
    deleteAll()
}
