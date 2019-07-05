import { directive as onClickaway } from 'vue-clickaway'
import ThemePrototype from '../prototypes/ThemePrototype'
import uid from '@/utils/uids'
import {
  offset,
  width
} from '@/utils/dom'
import {
  setPosition,
  parsePosition
} from '@/utils/position-engine'

const MARGIN_LEFT = 15

function positionIfExplodeClientRect (el, elClient) {
  const clientWidth = width(elClient)
  const { left } = offset(el)
  const elWidth = width(el)
  const diff = (elWidth + left) - clientWidth
  if (diff >= 0) {
    el.style.left = '-' + (diff + MARGIN_LEFT) + 'px'
  }
}

export default {
  name: 'a-dropdown',
  mixins: [ThemePrototype],
  directives: {
    clickOut: onClickaway
  },
  props: {
    splited: Boolean,
    text: String,
    noRadius: Boolean,
    maxWidth: {
      type: String,
      default: null
    },
    maxHeight: {
      type: String,
      default: null
    },
    autoClose: {
      type: Boolean,
      default: false
    },
    asTopNavbar: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      dropdownShow: this.show
    }
  },
  methods: {
    hideDropdown () {
      this.dropdownShow = false
    },
    showDropdown () {
      this.dropdownShow = true
    },
    toggleDropdown () {
      this.dropdownShow = !this.dropdownShow
    }
  },
  render (h) {
    const self = this

    this.$nextTick(() => positionIfExplodeClientRect(
      self.$el.querySelector('.dropdown-menu'),
      self.$root.$el
    ))

    const data = {
      ...self.data,
      class: {
        'btn-group': this.splited,
        'dropdown-btn': true && this.splited
      },
      directives: []
    }

    if (self.autoClose) {
      data.directives.push({
        name: 'clickOut',
        value: self.hideDropdown
      })
    }

    const activatorDropdown = {
      attrs: {
        type: 'button'
      },
      class: {
        'btn': true,
        [this.getBtnColor]: this.hasTheme,
        [`btn-${this.size}`]: this.size !== ''
      },
      on: {
        click: self.toggleDropdown
      }
    }

    const splitedButton = {
      class: {
        'btn': true,
        'dropdown-toggle': true,
        'dropdown-toggle-split': true,
        [this.getBtnColor]: this.hasTheme,
        [`btn-${this.size}`]: this.size !== ''
      },
      attrs: activatorDropdown.attrs,
      on: activatorDropdown.on
    }

    const dropdownData = {
      class: {
        'dropdown-menu': true,
        'show': self.dropdownShow,
        'rounded-0': self.noRadius
      }
    }

    if (self.asTopNavbar) {
      dropdownData.style = {
        'top': '40px'
      }
    }

    return (
      <div { ...data }>
        <button {...activatorDropdown}>{self.text}</button>
        { self.splited
          ? <button {...splitedButton}>
            <span class="sr-only">Toggle dropdown</span>
          </button> : ''
        }
        <div { ...dropdownData }>
          {self.$slots.content !== undefined ? self.$slots.content : ''}
        </div>
      </div>
    )
  }
}
