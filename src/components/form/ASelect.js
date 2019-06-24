import bindmodel from '@/mixins/bindmodel.js'
import vSelect from 'vue-select'

export default {
  name: 'a-select',
  mixins: [bindmodel],
  props: {
    onlyField: Boolean,
    label: String,
    size: {
      type: String,
      default: ''
    }
  },
  computed: {
    classes () {
      return {
        'argon-select': true,
        'argon-select-default': this.size === '',
        [`argon-select-${this.size}`]: this.size !== ''
      }
    }
  },
  render (h) {
    const self = this
    const dataSelect = {
      class: self.classes,
      attrs: {
        ...self.$attrs
      },
      on: {
        ...self.$listeners,
        change: self.__onInput
      }
    }

    if (self.onlyField) {
      return <vSelect v-model={self.content} {...dataSelect}></vSelect>
    }

    return (
      <div class="form-group">
        {self.label !== undefined ? <label class="form-control-label">{self.label}</label> : '' }
        <vSelect v-model={self.content} {...dataSelect}></vSelect>
      </div>
    )
  }
}
