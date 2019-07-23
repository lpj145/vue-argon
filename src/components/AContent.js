
export default {
  name: 'a-content',
  functional: true,
  render (h, ctx) {
    const { slots } = ctx
    const data = {
      ...ctx.data,
      on: {
        ...ctx.listeners
      },
      style: {
        'flex': '1 auto',
        'overflow-y': 'auto'
      },
      class: {
        'container-fluid': true
      }
    }
    const contentData = {
      style: {
        'overflow-y': 'auto',
        'max-height': '100vh',
        'height': slots().navbar ? 'calc(100vh - 60px)' : '100vh'
      },
      class: {
        'container-fluid': true,
        'pl-3': true,
        'pr-3': true
      }
    }
    return (
      <div {...data}>
        <div class="row">
          {slots().navbar ? slots().navbar : ''}
          <div {...contentData}>
            {slots().default}
          </div>
        </div>
      </div>
    )
  }
}
