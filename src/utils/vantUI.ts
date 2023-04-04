import { App } from '@vue/runtime-core'

// 按需引入
import { Button } from 'vant'

const conponents = [Button]

export default function mountVantUI(app: App<Element>) {
  conponents.forEach((c) => {
    app.component(c.name, c)
  })
}