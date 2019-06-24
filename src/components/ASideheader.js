export default {
  name: 'a-sideheader',
  functional: true,
  props: {
    minified: Boolean
  },
  render (h, ctx) {
    if (ctx.props.minified) {
      return null
    }

    return (
      <div class="ml-4 mt-3 mb-0 body-2 text-muted" style="">{ctx.slots().default}</div>
    )
  }
}
