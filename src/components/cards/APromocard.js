import ACard from './ACard'

export default {
  name: 'a-promo-card',
  functional: true,
  props: {
    size: String
  },
  render (h) {
    const data = {
      class: {
        card: true
      }
    }
    return (
      <div {...data}>
        <ACard>
          <template slot={'card-body'}>
            <div class="row">
              <div class="col">
                <h5 class="body-2 text-uppercase text-muted mb-0">Powering up</h5>
                <span class="headline font-weight-bold mb-0">49,65%</span>
              </div>
              <div class="col-auto">
                <div class="icon icon-shape bg-info text-white rounded-circle shadow">
                  <a-icon icon="TrendingUpIcon"></a-icon>
                </div>
              </div>
              <p class="mt-3 mb-0 text-muted text-sm">
                <span class="text-success mr-2">12%</span>
                <span class="text-nowrap body-2">Since last month</span>
              </p>
            </div>
          </template>
        </ACard>
      </div>
    )
  }
}
