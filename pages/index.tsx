import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'

export default function HomePage() {
  return (
   
        <MainLayout>
        <h1 className={'title'}>
          Welcome to 
          <Link href="/about"> home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/home.js</code>
        </p>

        </MainLayout>
        
  
  )
}
