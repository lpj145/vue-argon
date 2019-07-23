<script>
import AIcon from '../components/AIcon'
import ACard from '../components/cards/ACard'
import ABtn from '../components/ABtn'
export default {
  components: {
    AIcon,
    ACard,
    ABtn
  },
  name: 'buttons'
}
</script>

<template>
  <div>
    <div class="row bg-white py-4 mb-4">
      <div class="col-lg-12 col-xs-12">
        <h5 class="text-uppercase  font-weight-medium mb-2"><a-icon class="max-20" icon="DiscIcon"></a-icon> Button's </h5>
        <h2 class="caption mb-0 ">The buttons for you interact interface!</h2>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12 mb-4">
          <a-card>
            <div class="card-header bg-transparent">
              <h3 class="title">Types</h3>
            </div>
            <div class="card-body">
              <a-btn class="mb-2" theme="primary">Default</a-btn>
              <a-btn class="mb-2" theme="primary" outline>Outline</a-btn>            
              <a-btn class="mb-2" theme="primary" outline icon="DiscIcon">Icon</a-btn>
            </div>
          </a-card>
        </div>
        <div class="col-lg-12 col-xs-12 mb-4">
          <a-card>
            <div class="card-header bg-transparent">
              <h3 class="title">Colors <span class="caption">{theme = *}</span></h3>
            </div>
            <div class="card-body">
              <a-btn class="mb-2" theme="default">Default</a-btn>
              <a-btn class="mb-2" theme="primary">Primary</a-btn>
              <a-btn class="mb-2" theme="secondary">Secondary</a-btn>
              <a-btn class="mb-2" theme="info">info</a-btn>
              <a-btn class="mb-2" theme="success">Success</a-btn>
              <a-btn class="mb-2" theme="danger">Danger</a-btn>
              <a-btn class="mb-2" theme="warning">Warning</a-btn>
            </div>
          </a-card>
        </div>
        <div class="col-lg-12 col-xs-12 mb-4">
          <a-card>
            <div class="card-header bg-transparent">
              <h3 class="title">Sizes <span class="caption">{size = *}</span></h3>
            </div>
            <div class="card-body">
              <a-btn class="mb-2" size="sm" theme="default">SM</a-btn>
              <a-btn class="mb-2" theme="primary">Default</a-btn>
              <a-btn class="mb-2" size="lg" theme="secondary">LG</a-btn>
              <hr>
              <h3 class="caption font-weight-normal">{blocked}</h3>
              <a-btn blocked theme="info">info</a-btn>
            </div>
          </a-card>
        </div>
        <div class="col-lg-12 col-xs-12 mb-4">
          <a-card>
            <div class="card-header bg-transparent">
              <h3 class="title">States <span class="caption">{ isLoading, disabled, actived }</span></h3>
            </div>
            <div class="card-body">
              <a-btn is-loading class="mb-2" theme="default">SM</a-btn>
              <a-btn disabled class="mb-2" theme="primary">Default</a-btn>
              <a-btn class="mb-2" theme="secondary">actived</a-btn>
            </div>
          </a-card>
        </div>
      </div>
    </div>
  </div>
</template>
