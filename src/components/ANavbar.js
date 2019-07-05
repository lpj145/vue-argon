import AIcon from '@/components/AIcon.js'
import ANavbarSearch from '@/components/ANavbarSearch.js'
import { directive as onClickaway } from 'vue-clickaway'
import ADropdown from './ADropdown'

function renderMessages (h, messageArray, readyToRender) {
  if (readyToRender) {
    return (
      <b-dropdown id="dropdown-1" right size="sm" no-caret class="box-message button-user mr-0 mt-0 mb-0 pb-0 pt-0">
        <template slot="button-content"><AIcon icon="MessageCircleIcon" class="max-22"></AIcon></template>
        <div class="px-3 py-2">
          <h6 class="text-sm text-muted m-0">You have <strong class="text-primary">13</strong> notifications.</h6>
        </div>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>
          <AIcon icon="Edit3Icon" class="max-16"></AIcon>
          Edit Profile
        </b-dropdown-item>
        <b-dropdown-item>
          <AIcon icon="SettingsIcon" class="max-16"></AIcon>
          Settings
        </b-dropdown-item>
        <b-dropdown-item>
          <AIcon icon="LogOutIcon" class="max-16"></AIcon>
          Logout
        </b-dropdown-item>
      </b-dropdown>
    )
  }

  return null
}

function renderAlerts (h, alertsArray, readyToRender) {
  if (readyToRender) {
    return (
      <b-dropdown id="dropdown-1" right size="sm" no-caret class="box-message button-user mr-0 mt-0 mb-0 pb-0 pt-0">
        <template slot="button-content"><AIcon icon="BellIcon" class="max-22"></AIcon></template>
        <div class="px-3 py-2">
          <h6 class="text-sm text-muted m-0">You have <strong class="text-primary">13</strong> notifications.</h6>
        </div>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-text>And this is more example text.</b-dropdown-text>
        <b-dropdown-item>
          <AIcon icon="Edit3Icon" class="max-16"></AIcon>
          Edit Profile
        </b-dropdown-item>
        <b-dropdown-item>
          <AIcon icon="SettingsIcon" class="max-16"></AIcon>
          Settings
        </b-dropdown-item>
        <b-dropdown-item>
          <AIcon icon="LogOutIcon" class="max-16"></AIcon>
          Logout
        </b-dropdown-item>
      </b-dropdown>
    )
  }

  return null
}

export default {
  name: 'a-navbar',
  directives: {
    away: onClickaway
  },
  data () {
    return {
      searchOpen: false,
      userDropdownShow: false
    }
  },
  props: {
    simple: Boolean,
    color: {
      type: String,
      default: 'gradient-primary'
    },
    username: String,
    noAlert: Boolean,
    noMessage: Boolean,
    searchPlaceholder: String,
    dataMessages: {
      type: Array,
      default () {
        return []
      }
    },
    dataAlerts: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  methods: {
    pinSidebar () {
      this.$emit('sidebar-pin')
    },
    closeSearchBar () {
      this.searchOpen = false
    },
    openSearchBar () {
      this.searchOpen = true
    },
    toggleUserDropdown () {
      this.userDropdownShow = !this.userDropdownShow
    }
  },
  render (h) {
    const data = {
      style: {
        height: '60px',
        borderBottom: this.simple ? '1px solid #5e72e4' : '',
        'background-color': this.simple ? 'transparent !important' : null
      },
      class: {
        'navbar-top d-flex position-relative  navbar mb-4': true,
        'w-100': true,
        [`bg-${this.color}`]: !this.simple
      }
    }

    const dataSearch = {
      on: {
        close: this.closeSearchBar
      },
      props: {
        open: this.searchOpen,
        placeholder: this.searchPlaceholder
      }
    }

    if (this.$listeners.search !== undefined) {
      dataSearch.on.search = this.$listeners.search
    }

    return (
      <nav {...data}>
        <div>
          <button onClick={this.pinSidebar} class="btn border-0 btn-outline-neutral btn-sm mr-2">
            <AIcon class="max-22" icon="MenuIcon"></AIcon>
          </button>
        </div>
        <div>
          <button onClick={this.openSearchBar} class="btn border-0 btn-outline-neutral btn-sm mr-2">
            <AIcon class="max-22" icon="SearchIcon"></AIcon>
          </button>
          {renderMessages(h, this.dataMessages, !this.noMessage)}
          {renderAlerts(h, this.dataAlerts, !this.noAlert)}
          <ADropdown
            auto-close
            as-top-navbar
            no-radius
            theme="success"
            size="sm"
            class="button-user"
            splited
            text="Marcos Dantas"
          >
            <a slot="content" class="dropdown-item" href="#"><AIcon icon="Edit3Icon" class="max-16"></AIcon> Edit Profile</a>
            <a slot="content" class="dropdown-item" href="#"><AIcon icon="SettingsIcon" class="max-16"></AIcon> Settings</a>
            <div slot="content" class="dropdown-divider"></div>
            <a slot="content" class="dropdown-item" href="#"><AIcon icon="LogOutIcon" class="max-16"></AIcon> Action</a>
          </ADropdown>
        </div>
        <ANavbarSearch {...dataSearch}></ANavbarSearch>
      </nav>
    )
  }
}
