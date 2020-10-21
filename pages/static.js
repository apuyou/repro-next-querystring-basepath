import { useRouter } from 'next/router'

export default function Static() {
  const router = useRouter()

  return (
    <>
      <h1>Static</h1>
      <pre>{JSON.stringify(router.query, null, 2)}</pre>
    </>
  )
}
