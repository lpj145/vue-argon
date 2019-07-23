import ANavlink from '@/components/ANavlink.js'
import ASideheader from '@/components/ASideheader.js'
import bindmodel from '@/mixins/bindmodel.js'
import Hammer from 'hammerjs'

const MAX_WIDTH = 240

function renderBrand (h, brandSlot, minified) {
  if (minified) {
    return null
  }

  if (brandSlot === undefined) {
    return (
      <div class="brand text-center mb-3">
        <span class="text-primary title font-weight-bold mr-2 ml-2">ARGON</span>
        <span class="text-primary title font-weight-light">VUE</span>
      </div>
    )
  }

  return (
    <div class="brand text-center mb-3">
      {brandSlot}
    </div>
  )
}

function configureEvents (el, context) {
  const stopPropagate = function (ev) {
    ev.stopPropagation()
  }
  const closeSideMenu = function (ev, sideElement, isTouch = false) {
    event.stopPropagation()
    event.preventDefault()
    if (!isTouch) {
      context.__emitValue(true)
      return
    }

    sideElement.style.transform = `translateX(100%)`
  }
  const divSideElement = el.firstElementChild

  divSideElement
    .addEventListener('touchstart', stopPropagate)
  divSideElement
    .addEventListener('touchmove', stopPropagate)
  divSideElement
    .addEventListener('mousedown', stopPropagate)

  el.addEventListener('mousedown', (e) => closeSideMenu(e, el))
}

export default {
  name: 'a-sidebar',
  mixins: [bindmodel],
  components: {
    ANavlink
  },
  props: {
    minify: Boolean,
    isMobile: Boolean
  },
  render (h) {
    this.$nextTick(() => {
      configureEvents(this.$el, this)
    })
    const navData = {
      attrs: {
        id: 'sidebar-navigation'
      },
      class: {
        'nav': true,
        'flex-column': true,
        'mobile-nav': this.isMobile,
        'desktop-nav': !this.isMobile,
        'nav-minify': this.minify
      },
      style: {
        'display': !this.value ? 'block' : 'none'
      }
    }

    return (
      <nav {...navData }>
        <div>
          {renderBrand(h, this.$slots.brand, this.minify)}
          <ANavlink to="/" minified={this.minify} icon="HomeIcon" href="#">Dashboard</ANavlink>
          <ANavlink to="/about" minified={this.minify} icon="SmileIcon" href="#">Icons</ANavlink>
          <ANavlink to="/tables" minified={this.minify} icon="MapIcon" href="#">Maps</ANavlink>
          <ASideheader minified={this.minify}>Components</ASideheader>
          <ANavlink to="/cards" minified={this.minify} icon="ImageIcon" href="#">Cards</ANavlink>
          <ANavlink to="/buttons" minified={this.minify} icon="SquareIcon" href="#">Buttons</ANavlink>
          <ANavlink minified={this.minify} icon="MenuIcon" href="/tables">Tables</ANavlink>
        </div>
      </nav>
    )
  }
}
