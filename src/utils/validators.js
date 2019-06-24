export const isArray = (_var) => _var instanceof Array

export const isObject = _var => typeof _var === 'object'

export const isArrayOf = (array, typedInstance) => { console.log(array); array.every((element) => element instanceof typedInstance)}
