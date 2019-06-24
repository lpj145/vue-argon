function renderNavbar (h, slot) {
  if (slot === undefined) {
    return null
  }
  return slot
}

export default {
  name: 'a-content',
  functional: true,
  render (h, ctx) {
    const data = {
      attrs: {
        ...ctx.data.attrs
      },
      on: {
        ...ctx.listeners
      },
      style: {
        'flex': '1 auto'
      },
      class: {
        'container-fluid': true
      }
    }
    return (
      <div {...data}>
        <div class="row">
          {renderNavbar(h, ctx.slots().navbar)}
          <div class="container-fluid mt-3 pl-3 pr-3">
            {ctx.slots().default}
          </div>
        </div>
      </div>
    )
  }
}
