import Carousel from '../components/Carousel'
import ParagraphOne from '../components/Content/ParagraphOne'
import Enroll from '../components/Enroll'
import Gallery from '../components/Gallery'
import Classes from '../components/Classes'
import Head from 'next/head'
import Quote from '../components/Content/Quote'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://www.dafontfree.net/embed/bWV0cm9wb2xpcy1yZWd1bGFyJmRhdGEvNTIvbS8xNTY4MDAvTWV0cm9wb2xpcy1SZWd1bGFyLm90Zg"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Carousel />
      <ParagraphOne />
      <Quote />
      <Gallery />
      <Classes />
      <Enroll />
    </>
  )
}
