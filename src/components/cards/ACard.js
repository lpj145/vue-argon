export default {
  name: 'a-card',
  functional: true,
  props: {
    shadow: {
      default: false
    },
    dark: Boolean
  },
  render (h, ctx) {
    const shadowClass = ctx.props.shadow === '' ? 'shadow' : ctx.props.shadow !== false ? ` shadow-${ctx.props.shadow}` : ''
    const data = {
      ...ctx.data,
      props: {
        ...ctx.props
      },
      class: {
        [shadowClass]: true,
        'bg-default': ctx.props.dark
      }
    }
    return (
      <div class="card" {...data}>
        {ctx.slots().default}
      </div>
    )
  }
}
