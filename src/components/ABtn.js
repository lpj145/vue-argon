import ThemePrototype from '../prototypes/ThemePrototype'
import { renderIcon } from '../prototypes/ElementPrototype'

export default {
  name: 'a-button',
  mixins: [ThemePrototype],
  props: {
    isLink: {
      type: Boolean,
      default: false
    },
    activeClass: {
      type: String,
      default: 'active'
    },
    size: {
      type: String,
      default: ''
    },
    blocked: Boolean,
    actived: Boolean,
    disabled: Boolean,
    circle: Boolean,
    outline: Boolean,
    icon: {
      type: String,
      default: ''
    },
    isLoading: Boolean
  },
  data () {
    return {
      __disabled: false
    }
  },
  computed: {
    classes () {
      return {
        'btn': true,
        [this.getBtnColor]: !this.outline,
        [`btn-${this.size}`]: this.size !== '',
        'btn-block': this.blocked,
        [this.activeClass]: this.actived,
        'disabled': this.__disabled,
        'btn-circle': this.circle,
        [`btn-outline-${this.getTheme}`]: this.outline
      }
    },
    iconClasse () {
      return {
        'max-18': this.size === 'sm',
        'max-22': this.size === '',
        'max-24': this.size === 'lg'
      }
    }
  },

  render (h) {
    const self = this
    let subContent = this.$slots.default
    self.__disabled = self.disabled
    if (this.icon !== '' && !this.isLoading) {
      // hack align vertical to middle
      const paddingToMiddle = this.size === 'lg' ? '0.25em' : this.size === 'sm' ? '0.15em' : '0.22em'
      const iconElement = renderIcon(h, this.icon, this.iconClasse)
      subContent = subContent === undefined ? [] : [ h('span', { attrs: { class: 'text mr-2' }, style: { 'paddingTop': paddingToMiddle } }, [...subContent]) ]
      subContent.push(h('span', { attrs: { class: '' } }, [iconElement]))
    }

    if (self.isLoading) {
      subContent = [
        h('span', { attrs: { class: 'spinner-border spinner-border-sm', role: 'status', ariaHidden: true } }),
        h('span', { attrs: { class: 'sr-only' } }, 'loading...')
      ]
      self.__disabled = true
    }

    const data = {
      class: self.classes,
      attrs: {
        ...self.$attrs,
        disabled: self.__disabled
      }
    }

    if (self.__disabled) {
      data.attrs.tabIndex = -1
    }

    if (!self.__disabled) {
      data.on = {
        ...self.$listeners
      }
    }

    return h(this.isLink ? 'a' : 'button', data, subContent)
  }
}
