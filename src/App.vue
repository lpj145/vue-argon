<template>
  <div class="wrapper" :class="classes">
    <a-sidebar :minify="pinned" v-model="sideHide" :is-mobile="isMobile">
    </a-sidebar>
    <a-content>
      <template v-slot:navbar>
        <a-navbar
          username="Marcos Dantas"
          color="primary"
          search-placeholder="Pesquisar..."
          v-on:sidebar-pin="sideHide = !sideHide"
        ></a-navbar>
      </template>
      <template>
        <router-view/>
      </template>
    </a-content>
  </div>
</template>

<script>
import isMobile from './utils/detectmobile'
import ASidebar from '@/components/ASidebar.js'
import ANavbar from '@/components/ANavbar.js'
import AContent from '@/components/AContent.js'

function configSideNavigationEvents (sideEl, context) {
  sideEl.addEventListener('close-sidebar', () => {
    context.sideHide = true
  })
}

function configEvents (el, context) {
  const sidebarNavigation = el.querySelector('#sidebar-navigation')
  if (sidebarNavigation !== null) {
    configSideNavigationEvents(sidebarNavigation, context)
  }
}

export default {
  components: {
    ANavbar,
    ASidebar,
    AContent
  },
  name: 'AApp',
  computed: {
    classes () {
      return {
        'side-hide': this.sideHide,
        'side-unpinned': !this.sideHide,
        'side-mobile': this.isMobile
      }
    }
  },
  data () {
    return {
      pinned: false,
      sideHide: false,
      isMobile: isMobile()
    }
  },
  methods: {
    handlerTouch (event) {
      this.sideHide = !this.sideHide
    },
    handleMobile () {
      this.sideHide = true
    }
  },
  mounted () {
    if (isMobile()) {
      this.handleMobile()
    }
    this.$nextTick(() => {
      configEvents(this.$el, this)
    })
  }
}
</script>
