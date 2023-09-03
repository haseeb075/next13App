import Image from 'next/image'
import { Hero, SearchBar, CustomFilter } from '@/components'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />
        </div>
        <div className='home__filter-container'>
          <CustomFilter title='fuel' />
          <CustomFilter title='year' />

        </div>
      </div>
    </main>
  )
}
