import React from 'react'
import { useSku } from './SkuContext'
import { Item } from '../typings'
// import { useCssHandles } from 'vtex.css-handles'

// const CSS_HANDLES = ['skuName'] as const

// interface Props {
//   showLabel: boolean
// }

const SkuName = () => {
  const { sku }: { sku: Item } = useSku()
  // const handles = useCssHandles(CSS_HANDLES)
  return (
    <div>
      <span className="c-muted-1">{sku.itemId}</span>
    </div>
  )
}

export default SkuName
