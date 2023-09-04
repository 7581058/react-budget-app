import { rest } from 'msw'
import expenses from './dummy.json'

export const handlers = [
  rest.get('/expense', async (req, res, ctx) => {
    await sleep(200)

    return res(ctx.status(200), ctx.json(expenses))
  }),

  rest.post('/expense', async (req, res, ctx) => {
    await sleep(200)
    // expenses.push({
    //   id: 5,
    //   expense: '항목',
    //   amount: 금액,
    // })
    return res(ctx.status(201), ctx.json(expenses))
  }),

  rest.delete('/expense/:id', async (req, res, ctx) => {
    await sleep(200)
    return res(ctx.status(200), ctx.json(expenses))
  }),
]

async function sleep(timeout: number) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}
