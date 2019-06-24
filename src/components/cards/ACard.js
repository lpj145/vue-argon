export default {
  name: 'a-card',
  functional: true,
  props: {
    shadow: {
      default: false
    }
  },
  render (h, ctx) {
    const data = {
      ...ctx.data,
      props: {
        ...ctx.props
      }
    }

    const shadowClass = ctx.props.shadow === '' ? 'shadow' : ctx.props.shadow !== false ? ` shadow-${ctx.props.shadow}` : ''
    data.class = {
      ...data.class,
      [shadowClass]: true
    }
    return (
      <div class="card" {...data}>
        {ctx.slots().default}
      </div>
    )
  }
}