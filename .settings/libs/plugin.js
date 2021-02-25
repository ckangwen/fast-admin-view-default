import { resolveInstanceConfig } from './resolveInstanceConfig'
import './message'

function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.mixin({
    mounted() {
      const isRouterView = (this.$vnode && this.$vnode.data.routerView) || this._routerView
      const notTopRouterView = (this.$vnode && this.$vnode.data.routerViewDepth > 0)
      if (isRouterView && notTopRouterView) {
        if (this._isMounted) {
          const routerViewConfig = resolveInstanceConfig(this)
          top.postMessage({ name: 'componentTree', value: [routerViewConfig] }, '*')
        }
      }
    }
  })
}

export default {
  install
}
