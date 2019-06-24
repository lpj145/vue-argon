export default {
  name: 'validation-field',
  props: {
    invalid: Boolean,
    valid: Boolean,
    validateText: {
      type: String,
      default: 'Put (in)valid error message on prop validate-text'
    }
  },
  computed: {
    getValidateClass () {
      return {
        'd-block': true,
        'font-weight-medium': true,
        'invalid-feedback': this.invalid,
        'valid-feedback': this.valid
      }
    },
    getValidateMessage () {
      return this.invalid ? this.validateText : this.valid ? this.validateText : ''
    },
    getValidateFieldClass () {
      return {
        'is-invalid': this.invalid,
        'is-valid': this.valid
      }
    }
  }
}
