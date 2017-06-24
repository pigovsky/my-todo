export interface ITaskDao {
    all()
    add(todoItem)
    delete (todo)
    deleteAll()
}