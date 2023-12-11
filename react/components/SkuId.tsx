import React from 'react'
import { useSku } from './SkuContext'
import { Item } from '../typings'
import { FormattedMessage } from 'react-intl'
// import { useCssHandles } from 'vtex.css-handles'

// const CSS_HANDLES = ['skuName'] as const

interface Props {
  showLabel: boolean
}

const SkuId = ({ showLabel }: Props) => {
  const { sku }: { sku: Item } = useSku()
  // const handles = useCssHandles(CSS_HANDLES)
  return (
    <div>
      {showLabel && (
        <span className="t-body c-on-base fw7 pr3">
          <FormattedMessage id="store/sku-list.sku.price.id" />:{' '}
        </span>
      )}
      <span className="c-muted-1">{sku.referenceId}</span>
    </div>
  )
}

export default SkuId
