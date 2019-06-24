import ACard from './ACard'
import AIcon from '@/components/AIcon.js'

export default {
  name: 'a-info-card',
  functional: true,
  props: {
    size: String,
    title: {
      type: String,
      default: 'Title Here'
    },
    icon: {
      type: String,
      default: 'AlertCircleIcon'
    },
    iconBgColor: {
      type: String,
      default: 'bg-info'
    },
    iconColor: {
      type: String,
      default: 'text-white'
    },
    shadow: {
      default: false
    }
  },
  render (h, ctx) {
    const iconData = {
      class: {
        'icon icon-shape rounded-circle shadow': true,
        [`${ctx.props.iconBgColor}`]: true,
        [ctx.props.iconColor]: true
      }
    }

    const dataCard = {
      ...ctx.data,
      props: {
        ...ctx.props
      }
    }

    return (
      <div {...{ ...dataCard, class: ctx.props.size }}>
        <ACard class="mb-4" shadow={ctx.props.shadow}>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h5 class="body-2 text-uppercase text-muted mb-0 font-weight-bold">{ctx.props.title}</h5>
                <span class="headline font-weight-thin mb-0">{ctx.slots().default}</span>
              </div>
              <div class="col-auto">
                <div {...iconData} >
                  <AIcon icon={ctx.props.icon} class="max-32"></AIcon>
                </div>
              </div>
            </div>
            <p class="mt-3 mb-0 text-muted text-sm">
              {ctx.slots().description}
            </p>
          </div>
        </ACard>
      </div>
    )
  }
}
