export interface TaskDao {
    all()
    add(todoItem)
    delete (todo)
    deleteAll()
}
