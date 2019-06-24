import { ObjectModel } from 'objectmodel'

export default ObjectModel({
  label: String,
  value: [String],
  disabled: [Boolean],
  selected: [Boolean]
}).defaultTo({
  selected: false,
  disabled: false
})
