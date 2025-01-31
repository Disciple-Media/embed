import { createIframe, hasDom } from '../../utils'

import { WidgetOptions } from './widget-options'
import { buildWidget } from './elements'

export type Widget = {
  refresh: () => void
}

export const createWidget = (formId: string, options: WidgetOptions): Widget => {
  if (!hasDom()) {
    return {
      refresh: () => {},
    }
  }

  const iframe = createIframe(formId, 'widget', options)
  const widget = buildWidget(iframe)

  options.container.innerHTML = ''
  options.container.append(widget)

  return {
    refresh: () => iframe.contentWindow?.location.reload(),
  }
}
