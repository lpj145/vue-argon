import ANavlink from '@/components/ANavlink.js'
import ASideheader from '@/components/ASideheader.js'
import bindmodel from '@/mixins/bindmodel.js'

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

export default {
  name: 'a-sidebar',
  mixins: [bindmodel],
  components: {
    ANavlink
  },
  props: {
    minify: Boolean,
    to: {
      type: String,
      default: '/'
    }
  },
  computed: {
    style () {
      return {
        'display': !this.value ? 'block' : 'none',
        width: this.minify ? '70px' : '220px',
        'min-width': this.minify ? '70px' : '220px',
        'max-width': this.minify ? '70px' : '220px',
        backgroundColor: '#fff',
        'box-shadow': '0 0 2rem 0 rgba(136,152,170,.15)!important',
        'z-index': 999999,
        'flex': '1 1 auto',
        'height': 'inherit'
      }
    }
  },
  render (h) {
    return (
      <nav class="nav flex-column fixed-top" {...{ style: this.style } }>
        {renderBrand(h, this.$slots.brand, this.minify)}
        <ANavlink minified={this.minify} icon="HomeIcon" href="#">Dashboard</ANavlink>
        <ANavlink minified={this.minify} icon="SmileIcon" href="#">Icons</ANavlink>
        <ANavlink minified={this.minify} icon="MapIcon" href="#">Maps</ANavlink>
        <ASideheader minified={this.minify}>Components</ASideheader>
        <ANavlink minified={this.minify} icon="ImageIcon" href="#">Cards</ANavlink>
        <ANavlink minified={this.minify} icon="SquareIcon" href="#">Buttons</ANavlink>
        <ANavlink minified={this.minify} icon="MenuIcon" href="/tables">Tables</ANavlink>
      </nav>
    )
  }
}
