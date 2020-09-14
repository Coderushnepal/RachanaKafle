import * as todoService from "../services/todo";

/**
 * Controller to get all todos
 *
 * @param  req
 * @param  res
 * @param  next
 */
export function getAllTodos(req, res, next) {
  todoService
    .getAllTodos(+req.user.id)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get specific todo for a user.
 *
 * @param  req
 * @param  res
 * @param  next
 */
export function getTodoById(req, res, next) {
  const { userId, todoId } = req.params;

  todoService
    .getTodoById(+req.user.id, +todoId)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
