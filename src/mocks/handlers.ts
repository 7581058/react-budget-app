import { rest } from 'msw'
import expenses from './dummy.json'

export const handlers = [
  rest.get('/expense', async (req, res, ctx) => {
    await sleep(200)

    return res(ctx.status(200), ctx.json(expenses))
  }),

  rest.post('/expense', async (req, res, ctx) => {
    await sleep(200)
    return res(ctx.status(200), ctx.json(expenses))
  }),

  rest.delete('/expense/:id', async (req, res, ctx) => {
    await sleep(200)
    return res(ctx.status(200), ctx.json(expenses))
  }),

  rest.post(`/expense/:id`, async (req, res, ctx) => {
    await sleep(200)
    return res(ctx.status(200), ctx.json(expenses))
  }),
]

async function sleep(timeout: number) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}
