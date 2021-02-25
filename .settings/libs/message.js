import { highlight, unHighlight } from './highlight'

function findRelatedComponent(el) {
  while (!el.__vue__ && el.parentElement) {
    el = el.parentElement
  }
  return el.__vue__
}

const triggerSelect = false
let hoveredId = ''
window.addEventListener('message', event => {
  const { name, value } = event.data
  if (name === 'mouseover' && value) {
    hoveredId = value
    selectEl(hoveredId)
  }
})
let selectedInstance = null

function selectEl(id) {
  const el = document.getElementById(id)
  unHighlight()
  if (el) {
    selectedInstance = findRelatedComponent(el)
  }
  if (selectedInstance) {
    highlight(selectedInstance)
  }
}

function onMouseOver(e) {
  e.stopImmediatePropagation()
  e.preventDefault()

  unHighlight()
  if (triggerSelect) {
    const el = e.target
    if (el) {
      selectedInstance = findRelatedComponent(el)
    }
    if (selectedInstance) {
      highlight(selectedInstance)
    }
  }
}
window.addEventListener('mouseover', onMouseOver, true)
