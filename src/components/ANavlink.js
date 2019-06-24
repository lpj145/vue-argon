import AIcon from './AIcon'

function renderIcon (h, icon, ready, minified) {
  if (!ready) {
    return null
  }

  const classes = {
    'mr-4': !minified
  }

  return <span {...{ class: classes }}><AIcon icon={icon}/></span>
}

function renderLabel (h, label, ready) {
  if (!ready) {
    return label
  }

  return null
}

export default {
  name: 'a-navlink',
  functional: true,
  components: {
    AIcon
  },
  props: {
    minified: Boolean,
    icon: {
      default: false
    },
    href: String,
    to: String
  },
  render (h, ctx) {
    const data = {
      attrs: {
        href: ctx.props.href
      },
      class: {
        'nav-link': true,
        'pl-4': !ctx.props.minified,
        'mt-3': true,
        'text-center': ctx.props.minified
      }
    }
    return (
      <a {...data}>
        {renderIcon(h, ctx.props.icon, ctx.props.icon, ctx.props.minified)}
        {renderLabel(h, ctx.slots().default, ctx.props.minified)}
      </a>
    )
  }
}
