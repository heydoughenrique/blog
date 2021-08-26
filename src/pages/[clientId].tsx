// AKA 404 Page
import { useRouter } from 'next/router'
import redirect from 'nextjs-redirect'

const ClientDashboard = () => {
  const router = useRouter()
  const { clientId } = router.query

  const Redirect = redirect('https://www.npmjs.com/package/nextjs-redirect')

  if (clientId === '100') {
    return (
      <Redirect>
        <h1>Redirecting to github!</h1>
      </Redirect>
    )
  }

  return <p>You tried to access the page: https://strides.digital/{clientId} but it doesn't exist. Sorry</p>;
}

export default ClientDashboard