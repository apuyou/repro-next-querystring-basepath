import { useRouter } from 'next/router'

export default function Dynamic2() {
  const router = useRouter()

  return (
    <>
      <h1>Dynamic2</h1>
      <pre>{JSON.stringify(router.query, null, 2)}</pre>
    </>
  )
}
