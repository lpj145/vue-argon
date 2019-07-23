<template>
  <div class="py-4">
    <div class="row mb-3">
      <div class="col-12 col-xs-12 d-flex">
        <AIcon icon="GridIcon"></AIcon><h3 class="ml-2 title font-weight-light text-muted">Info Cards - <small class="text-muted">Styled card to facilitate your life.</small></h3>
      </div>
    </div>
    <div class="row mb-2">
      <a-info-card class="mb-4"  size="col-lg-3" shadow="sm" icon-bg-color="bg-warning" icon="BarChartIcon" title="Enhancements">
        <span>49,8%</span>
        <template v-slot:description>
          <span class="text-warning mr-2"><AIcon icon="BellIcon" class="max-18"></AIcon> 3.48%</span>
          <span class="">Best up this week!</span>
        </template>
      </a-info-card>
      <a-info-card  size="col-lg-3" shadow="sm" icon="SmileIcon" title="SURPRISE">
        <span>105%</span>
        <template v-slot:description>
          <span class="text-info mr-2"><a-icon icon="HeartIcon" class="max-18"></a-icon> 3.48%</span>
          <span class="text-nowrap">Than easily to use</span>
        </template>
      </a-info-card>
      <a-info-card  size="col-lg-3" shadow="sm" icon-bg-color="bg-success" icon="TruckIcon" title="Shipments">
        <span>62</span>
        <template v-slot:description>
          <span class="text-success mr-2"><a-icon icon="TrendingUpIcon"></a-icon> 4</span>
          <span class="text-nowrap">More than passed week</span>
        </template>
      </a-info-card>
      <a-info-card  size="col-lg-3" shadow="sm" icon-bg-color="bg-gradient-red" icon="UsersIcon" title="Purchasers">
        <span>40</span>
        <template v-slot:description>
          <span class="text-danger mr-2">15</span>
          <span class="text-nowrap">Unless</span>
        </template>
      </a-info-card>
    </div>
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <a-card>
          <div class="card-header bg-neutral">
            <div class="row">
              <div class="col d-flex align-items-center">
                <h5 class="body-1 font-weight-bold mb-0">FORM CARD</h5>
              </div>
              <div class="col-auto text-right">
                <a-btn :is-loading="btnLoading" @click="btnLoading = !btnLoading" size="sm" v-tooltip="'Refresh table'" outline theme="primary">Refresh</a-btn>
              </div>
            </div>
          </div>
          <div class="table-responsive">
            <vuetable
              ref="vuetable"
              :api-mode="false"
              :data="dataTableCard"
              :fields="['name', 'price', 'date', 'author']"
              :css="{tableClass: 'table table-striped table-hover', tableHeaderClass: 'thead-light'}"
            >
            </vuetable>
          </div>
        </a-card>
      </div>
      <div class="col-md-6 col-sm-12">
        <a-card shadow="sm">
          <div class="card-header bg-neutral">
            <div class="row">
              <div class="col d-flex align-items-center">
                <h5 class="body-1 font-weight-bold mb-0">FORM CARD</h5>
              </div>
              <div class="col-auto text-right">
                <ADropdown size="sm" auto-close theme="success" text="Marcos Dantas">
                  <a slot="content" class="dropdown-item" href="#">Action</a>
                  <a slot="content" class="dropdown-item" href="#">Action</a>
                  <a slot="content" class="dropdown-item" href="#">Action</a>
                  <div slot="content" class="dropdown-divider"></div>
                  <a slot="content" class="dropdown-item" href="#">Action</a>
                </ADropdown>
              </div>
            </div>
          </div>
          <div class="card-body">
            <form>
              <a-input
               label="Usuário"
               placeholder="Something wrong"
               autofocus
               v-model="inputText"
               valid
              >
              </a-input>
              <a-select v-model="selectValue" label="Tipo" placeholder="Select one options" :options="optionsField"></a-select>
              <a-textarea v-model="textArea" label="Textao"></a-textarea>
              <div class="form-group">
                <label class="form-control-label" for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
              </div>
              <div class="custom-control custom-radio mb-3">
                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio1">Toggle this custom radio</label>
              </div>
              <div class="form-group">
                <label class="form-control-label" for="exampleFormControlSelect1">Example select</label>
                <select class="form-control" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-control-label" for="exampleFormControlSelect2">Example multiple select</label>
                <select multiple="" class="form-control" id="exampleFormControlSelect2">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-control-label" for="exampleFormControlTextarea1">Example textarea</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            </form>
          </div>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
import AInfoCard from '@/components/cards/AInfocard.js'
import AIcon from '@/components/AIcon.js'
import ACard from '@/components/cards/ACard.js'
import ABtn from '@/components/ABtn.js'
import dataTableCard from '@/data/tableCard'
import AInput from '@/components/form/AInput'
import ASelect from '@/components/form/ASelect'
import ATextarea from '@/components/form/ATextarea.js'
import Vuetable from 'vuetable-2'
import ADropdown from '@/components/ADropdown.js'

export default {
  name: 'home',
  components: {
    ADropdown,
    AInfoCard,
    AIcon,
    ACard,
    ABtn,
    AInput,
    ASelect,
    ATextarea,
    Vuetable
  },
  data () {
    return {
      dataTableCard: dataTableCard,
      inputText: '',
      fieldValid: false,
      textArea: '',
      btnLoading: false,
      selectValue: '',
      optionsField: [{ label: 'Marcos', value: 0, disabled: true }, { label: 'Shyrliane', value: 20, selected: true }]
    }
  },
  methods: {
    clicked () {
      console.log('clicou sim!')
      console.log(this.$refs.tabled)
      this.$refs.tabled.updateHeader()
    }
  },
  computed: {
    validateField () {
      return {
        invalid: !this.fieldValid,
        valid: this.fieldValid,
        text: this.fieldValid ? 'Usuario liberado' : 'Usuario já utilizado'
      }
    }
  }
}
</script>
