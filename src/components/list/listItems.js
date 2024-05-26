import Link from 'next/link'
import React from 'react'

export default function ListItems({children, links, className}) {
  return (
    <li className={className}>
        <Link href={links} className={className}>{children}</Link>
    </li>
  )
}
