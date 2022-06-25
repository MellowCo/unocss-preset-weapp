/*
 * @Author: licl
 * @Date: 2022-06-25 13:27:28
 * @LastEditTime: 2022-06-25 13:27:32
 * @LastEditors: licl
 * @Description: 
 */
/*
 * @Author: licl
 * @Date: 2022-06-25 10:15:38
 * @LastEditTime: 2022-06-25 10:15:38
 * @LastEditors: licl
 * @Description:
 */
import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    entries: [],
  },
  test: {
    isolate: false,
    setupFiles: ['./test/setup.ts'],
  },
})
