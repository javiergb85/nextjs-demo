import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'


export default function pricingPage() {
  return (
    <MainLayout>
    <h1 className={'title'}>
        Welcome to  <Link href="/"> Pricing</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/pricing.js</code>
      </p>


      </MainLayout>
  )
}
