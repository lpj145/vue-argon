import bindmodel from '@/mixins/bindmodel.js'

export default {
  name: 'a-textarea',
  mixins: [bindmodel],
  props: {
    label: String,
    onlyField: Boolean
  },
  computed: {
    classes () {
      return {
        'form-control': true
      }
    }
  },
  render (h) {
    const self = this
    const dataTextarea = {
      class: self.classes,
      attrs: {
        ...self.$attrs
      },
      on: {
        ...self.$listeners,
        input: self.__onInput
      },
      value: self.value
    }

    if (self.onlyField) {
      return <textarea {...dataTextarea} ></textarea>
    }

    return (
      <div class="form-group">
        {self.label !== undefined ? <label class="form-control-label">{self.label}</label> : '' }
        <textarea {...dataTextarea} ></textarea>
      </div>
    )
  }
}
