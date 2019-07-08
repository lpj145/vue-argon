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
  components: {
    AIcon
  },
  props: {
    minified: Boolean,
    icon: {
      default: false
    },
    to: [Object, String],
    replace: Boolean
  },
  methods: {
    __click () {
      console.log(this.to)
      console.log(this.replace)
      this.$router[this.replace === true ? 'replace' : 'push'](this.to)
    }
  },
  render (h) {
    const self = this
    const data = {
      ...self.data,
      class: {
        'nav-link': true,
        'pl-4': !self.minified,
        'mt-3': true,
        'text-center': self.minified
      },
      on: {
        click: self.__click
      }
    }
    return (
      <a {...data}>
        {renderIcon(h, self.icon, self.icon, self.minified)}
        {renderLabel(h, self.$slots.default, self.minified)}
      </a>
    )
  }
}
