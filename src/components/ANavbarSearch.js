function fireByKeyEnter (e, term, listener) {
  if (e.keyCode !== 13) { // keycode to Enter
    return null
  }

  if (listener === undefined) {
    listener = () => { console.log('searched term is: ', term) }
  }

  if (typeof listener === 'function') {
    listener(term)
  }
}

function fireFocusout (e, listener) {
  document.getElementById('xzy_searchinput').value = ''

  if (typeof listener === 'function') {
    listener(e)
  }
}

export default {
  name: 'a-navbar-search',
  functional: true,
  props: {
    open: Boolean,
    placeholder: {
      type: String,
      default: 'Search & Enter'
    }
  },
  render (h, ctx) {
    const data = {
      ...ctx.data,
      props: {
        ...ctx.props
      }
    }

    data.class = {
      'd-none': !ctx.props.open
    }

    if (ctx.props.open) {
      setTimeout(() => {
        document.getElementById('xzy_searchinput').focus()
      }, 300)
    }

    return (
      <div class="w-100 bg-neutral position-absolute px-3 shadow-sm" style="left:0;z-index:9;bottom:-50px;height:50px" {...data}>
        <input
          id="xzy_searchinput"
          class="form-control h-100 form-control-sm font-weight-bold not-focusable bg-transparent border-0"
          onKeyup={(e) => fireByKeyEnter(e, e.target.value, ctx.listeners.search)}
          onFocusout={(e) => fireFocusout(e, ctx.listeners.close)}
          placeholder={ctx.props.placeholder}
        />
      </div>
    )
  }
}
