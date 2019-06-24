export default {
  name: 'a-btn',
  props: {
    isLink: Boolean,
    type: {
      type: String,
      default: 'button'
    },
    color: {
      type: String,
      default: 'neutral'
    },
    size: {
      type: String,
      default: 'sm'
    }
  },
  computed: {
    classes () {
      return {
        'btn': true,
        [`btn-${this.color}`]: true,
        [`btn-${this.size}`]: true
      }
    }
  },
  render (h) {
    const btnData = {
      ...this.data,
      class: {
        ...this.classes
      }
    }
    console.log(btnData)
    return h(this.isLink ? 'a' : 'button', this.$slots.default, btnData)
  }
}
