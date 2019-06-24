import VueTable from 'vuetable-2'
export default {
  name: 'a-table',
  extends: VueTable,
  components: {
    VueTable
  },
  props: {
    striped: Boolean,
    focused: Boolean
  }
}
