<script>
import ACard from '@/components/cards/ACard'
import ABtn from '@/components/ABtn'
import ALineChart from '@/components/charts/ALine'
export default {
  name: 'a-dashboard',
  components: {
    ACard,
    ABtn,
    ALineChart
  }
}
</script>

<template>
  <div>
    <div class="row">
      <div class="col-lg-8 col-xs-12">
        <a-card dark class="mb-4">
          <div class="card-header bg-transparent">
            <div class="row">
              <div class="col">
                <h5 class="caption text-uppercase text-light font-weight-medium mb-0">Statistcs</h5>
                <h2 class="title font-weight-bold mb-0 text-white">Social Performance</h2>
              </div>
              <div class="col-auto text-right">
                <a-btn class="text-success" theme="transparent">Month</a-btn>
                <a-btn theme="transparent">Week</a-btn>
              </div>
            </div>
          </div>
          <div class="card-body">
            <a-line-chart :height="150"></a-line-chart>
          </div>
        </a-card>
      </div>
    </div>
  </div>
</template>
