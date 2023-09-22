import React from 'react'
import "./skeletonElement.css"

export default function SkeletonElement({type}) {
    const classs=`skeleton ${type}`

  return (
    <div className={` ${classs}`}>
    </div>
  )
}
