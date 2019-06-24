import AIcon from '@/components/AIcon.js'

export function renderDiv (h, className, slot = []) {
  return h('div', { attrs: { class: className } }, slot)
}

export function renderIcon (h, icon, className) {
  return (
    <AIcon icon={icon} class={className}></AIcon>
  )
}
