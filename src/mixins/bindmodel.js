export default {
  name: 'bindmodel',
  props: ['value'],
  data () {
    return {
      content: this.value
    }
  },
  methods: {
    __onInput (el) {
      this.__emitValue(el.target.value)
    },
    __emitValue (value) {
      this.$emit('input', value)
    }
  }
}
