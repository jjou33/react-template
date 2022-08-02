import { rest } from 'msw'

const todos: any = ['a', 'b', 'c']

export const handlers = [
  rest.get('/todos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todos))
  }),

  rest.post('/todos', (req, res, ctx) => {
    todos.push(req.text)
    return res(ctx.status(201))
  })
]
