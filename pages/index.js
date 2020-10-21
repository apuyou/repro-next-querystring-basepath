import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/static">Static</Link>
        </li>
        <li>
          <Link href="/static?foo=bar">Static with foo</Link>
        </li>
        <li>
          <Link href="/something">Dynamic</Link>
        </li>
      </ul>
    </>
  )
}
