import { useRouter } from 'next/router'

export default function Dynamic() {
  const router = useRouter()

  return (
    <>
      <h1>Dynamic</h1>
      <pre>{JSON.stringify(router.query, null, 2)}</pre>
    </>
  )
}
