import { arrayIncludes } from '../../utils/array'
import validatorfield from '@/mixins/validatorfield'

// Valid supported input types
const TYPES = [
  'text',
  'password',
  'email',
  'number',
  'url',
  'tel',
  'search',
  'range',
  'color',
  'date',
  'time',
  'datetime',
  'datetime-local',
  'month',
  'week'
]

export default {
  name: 'a-input',
  mixins: [validatorfield],
  props: {
    value: String,
    type: {
      type: String,
      default: 'text',
      validator: type => arrayIncludes(TYPES, type)
    },
    size: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    labelClass: String,
    onlyField: Boolean,
    invalid: Boolean,
    invalidText: {
      type: String,
      default: 'Put invalid error on prop invalid-text'
    },
    valid: Boolean,
    validText: {
      type: String,
      default: 'Put invalid error on prop valid-text'
    }
  },
  data () {
    return {
      content: this.value
    }
  },
  computed: {
    classes () {
      return {
        'form-control': true,
        [`form-control-${this.size}`]: this.size !== '',
        ...this.getValidateFieldClass
      }
    }
  },
  methods: {
    __onInput (el) {
      this.__emitValue(el.target.value)
    },
    __emitValue (value) {
      this.$emit('input', value)
    }
  },
  render (h) {
    const self = this
    const dataInput = {
      class: self.classes,
      attrs: {
        ...self.$attrs,
        type: self.type
      },
      on: {
        ...self.$listeners,
        input: self.__onInput
      },
      value: self.value
    }

    if (self.onlyField) {
      return (
        <input {...dataInput}/>
      )
    }

    return (
      <div class="form-group">
        { self.label !== '' ? <label class="form-control-label">{self.label}</label> : '' }
        <input {...dataInput}/>
        <div {...{ class: self.getValidateClass } } >
          {self.getValidateMessage}
        </div>
      </div>
    )
  }
}
