function renderBody (h, slot, renderBody) {
  if (renderBody) {
    return slot
  }

  return null
}

export default {
  name: 'a-card',
  functional: true,
  render (h, ctx) {
    console.log(ctx.slots())
    return (
      <div class="card">
        {ctx.slots().default}
        {renderBody(h, ctx.slots().cardBody, ctx.slots().cardBody !== undefined)}
      </div>
    )
  }
}
