import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data: () => {
    return {
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '',
          data: [4, 7, 3, 5, 2, 3],
          borderCapStyle: 'rounded',
          pointBackgroundColor: 'rgba(255, 255, 255, 0.4)',
          backgroundColor: [
            'rgba(255, 255, 255, 1)'
          ],
          borderColor: [
            'rgba(94, 114, 228, 1)'
          ],
          borderWidth: 5,
          fill: false
        }]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
