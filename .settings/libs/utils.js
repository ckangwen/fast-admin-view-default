import path from 'path'

export const isBrowser = typeof navigator !== 'undefined'

function toUpper(_, c) {
  return c ? c.toUpperCase() : ''
}

function cached(fn) {
  const cache = Object.create(null)
  return function cachedFn(str) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  }
}

export function getComponentDisplayName(originalName, style = 'class') {
  switch (style) {
    case 'class':
      return classify(originalName)
    case 'kebab':
      return kebabize(originalName)
    case 'original':
    default:
      return originalName
  }
}

const kebabizeRE = /([a-z0-9])([A-Z])/g
export const kebabize = cached((str) => {
  return str && str
    .replace(kebabizeRE, (_, lowerCaseCharacter, upperCaseLetter) => {
      return `${lowerCaseCharacter}-${upperCaseLetter}`
    })
    .toLowerCase()
})

const classifyRE = /(?:^|[-_/])(\w)/g
export const classify = cached((str) => {
  return str && str.replace(classifyRE, toUpper)
})

// Use a custom basename functions instead of the shimed version
// because it doesn't work on Windows
function basename(filename, ext) {
  return path.basename(
    filename.replace(/^[a-zA-Z]:/, '').replace(/\\/g, '/'),
    ext
  )
}

export function getComponentName(options) {
  const name = options.name || options._componentTag
  if (name) {
    return name
  }
  const file = options.__file // injected by vue-loader
  if (file) {
    return classify(basename(file, '.vue'))
  }
}

/**
 * Get the appropriate display name for an instance.
 *
 * @param {Vue} instance
 * @return {String}
 */

export function getInstanceName(instance) {
  const name = getComponentName(instance.$options || instance.fnOptions || {})
  if (name) return name
  return instance.$root === instance
    ? 'Root'
    : 'Anonymous Component'
}

function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

export function deepClone(obj) {
  if ([null, undefined, NaN, false].includes(obj)) return obj
  if (typeof obj !== 'object' && typeof obj !== 'function') {
  // 原始类型直接返回
    return obj
  }
  var o = isArray(obj) ? [] : {}
  for (const i in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  }
  return o
}

