import { getInstanceName } from '@/libs/utils'

const map = new Map()

function flatten(items) {
  return items.reduce((acc, item) => {
    if (item instanceof Array) acc.push(...flatten(item))
    else if (item) acc.push(item)

    return acc
  }, [])
}

export function resolveInstanceConfig(instance) {
  if (!instance) return
  const uid = instance._uid
  const name = getInstanceName(instance)
  const propData = []
  // const propData = clonedeep(Object.freeze(instance._props))
  const propKeys = instance.$options._propKeys || []

  if (map.has(uid)) {
    return
  } else {
    map.set(uid, true)
  }

  const ret = {
    uid: uid,
    id: `uid-${uid}`,
    propKeys,
    propData,
    name,
    children: instance.$children
      .filter(child => !child._isBeingDestroyed)
      .map(resolveInstanceConfig)
      .filter(Boolean)

  }
  if (instance._vnode && instance._vnode.children) {
    ret.children = ret.children.concat(
      flatten(instance._vnode.children.map(captureChild))
        .filter(Boolean)
    )
  }

  return ret
}

function captureChild(child) {
  if (child.componentInstance) {
    if (!child.componentInstance._isBeingDestroyed) return resolveInstanceConfig(child.componentInstance)
  } else if (child.children) {
    return flatten(child.children.map(captureChild))
  }
}
