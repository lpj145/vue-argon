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
            size="sm"
            no-padding
            class="d-inline box-message button-user"
          >
            <template slot="activator"><AIcon icon="MessageCircleIcon" class="max-22"></AIcon></template>
            <template slot="content">
              <h6 class="dropdown-header text-sm text-muted m-0">You have <strong class="text-primary">13</strong> messages.</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item caption py-2">Hello John Deree</li>
                <li class="list-group-item caption py-2">Mercy from vanilla</li>
                <li class="list-group-item caption py-2">Vue you are best</li>
                <li class="list-group-item caption py-2">Angular: "You are best"</li>
                <li class="list-group-item caption py-2">React: "try... try... ty"</li>
              </ul>
            </template>
          </ADropdown>
          <ADropdown
            auto-close
            as-top-navbar
            no-padding
            size="sm"
            text="Alerta"
            class="d-inline box-message button-user"
          >
            <template slot="activator"><AIcon icon="BellIcon" class="max-22"></AIcon></template>
            <template slot="content">
              <h6 class="dropdown-header text-sm text-muted m-0">You have <strong class="text-primary">13</strong> notifications.</h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Cras justo odio
                  <span class="badge badge-primary badge-pill">14</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Dapibus ac facilisis in
                  <span class="badge badge-warning badge-pill">Update!</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                  Morbi leo risus
                  <span class="badge badge-primary badge-pill">1</span>
                </li>
              </ul>
              <a href="#" class="list-group-item list-group-flush list-group-item-action">
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1 subtitle">Caution with servers</h5>
                </div>
                <p class="mb-1 body-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                <small class="text-muted">By Administrator.</small>
              </a>
            </template>
          </ADropdown>
          <ADropdown
            auto-close
            as-top-navbar
            theme="success"
            size="sm"
            class="button-user"
            splited
            text="Marcos Dantas"
          >
            <template slot="content">
              <a class="dropdown-item" href="#"><AIcon icon="Edit3Icon" class="max-16"></AIcon> Edit Profile</a>
              <a class="dropdown-item" href="#"><AIcon icon="SettingsIcon" class="max-16"></AIcon> Settings</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#"><AIcon icon="LogOutIcon" class="max-16"></AIcon> Logout</a>
            </template>
          </ADropdown>
        </div>
        <ANavbarSearch {...dataSearch}></ANavbarSearch>
      </nav>
    )
  }
}
