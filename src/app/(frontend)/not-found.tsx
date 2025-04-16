import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <Link href={'/'} className="text-primary-500 hover:text-primary-600">
      &larr; Go home
    </Link>
  )
}
