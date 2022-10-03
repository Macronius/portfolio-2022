//next
import type { NextPage } from 'next'
import Head from 'next/head'
//components
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'


const Home: NextPage = () => {
  return (
    <div className="bg-[#232323] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Marcus Richardson - Portfolio 2022</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>
      

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* WorkExperience */}
      <section id="work-experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}


    </div>
  )
}

export default Home
