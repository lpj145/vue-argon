<script>
import ACard from '@/components/cards/ACard'
import ABtn from '@/components/ABtn'
import ALineChart from '@/components/charts/ALineChart'
import ABarChart from '@/components/charts/ABarChart'
import APieChart from '@/components/charts/APieChart'
import ADoughnutChart from '@/components/charts/ADoughnutChart'

export default {
  name: 'a-dashboard',
  components: {
    ACard,
    ABtn,
    ALineChart,
    ABarChart,
    APieChart,
    ADoughnutChart
  }
}
</script>

<template>
  <div class="py-4">
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
            <a-line-chart :height="180"></a-line-chart>
          </div>
        </a-card>
      </div>
      <div class="col-lg-4 col-xs-12">
        <a-card class="mb-4">
          <div class="card-header bg-transparent">
            <div class="row">
              <div class="col">
                <h5 class="caption text-uppercase font-weight-medium mb-0">Levers</h5>
                <h2 class="title font-weight-bold mb-0">Sales</h2>
              </div>
            </div>
          </div>
          <div class="card-body">
            <a-bar-chart ></a-bar-chart>
          </div>
        </a-card>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6 col-xs-12">
        <a-card class="mb-4">
          <div class="card-header bg-transparent">
            <div class="row">
              <div class="col">
                <h5 class="caption text-uppercase font-weight-medium mb-0">NETWORK</h5>
                <h2 class="title font-weight-bold mb-0">SLOW DOWN</h2>
              </div>
            </div>
          </div>
          <div class="card-body">
            <a-pie-chart :height="200"></a-pie-chart>
          </div>
        </a-card>
      </div>
      <div class="col-lg-6 col-xs-12">
        <a-card class="mb-4">
          <div class="card-header bg-transparent">
            <div class="row">
              <div class="col">
                <h5 class="caption text-uppercase font-weight-medium mb-0">Performance</h5>
                <h2 class="title font-weight-bold mb-0">Power UP!</h2>
              </div>
            </div>
          </div>
          <div class="card-body">
            <a-doughnut-chart :height="200"></a-doughnut-chart>
          </div>
        </a-card>
      </div>
    </div>
  </div>
</template>
