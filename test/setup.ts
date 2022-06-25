/*
 * @Author: licl
 * @Date: 2022-06-25 13:06:13
 * @LastEditTime: 2022-06-25 13:06:14
 * @LastEditors: licl
 * @Description:
 */
import { afterAll, afterEach, beforeAll } from 'vitest'
import { setupServer } from 'msw/node'
import { rest } from 'msw'

export const restHandlers = [
  rest.get(/google/, (req, res, ctx) => {
    return res(ctx.status(200), ctx.text('@font-face mocked {}'))
  }),
]

const server = setupServer(...restHandlers)

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())
