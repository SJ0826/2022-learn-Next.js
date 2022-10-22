import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <h1><Link href="/"><a>HOME 으로</a></Link></h1>
      {children}
    </div>
  )
}
