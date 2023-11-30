import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            maxime iste facilis. Est similique at nostrum et obcaecati animi
            fuga, consequuntur enim harum hic veritatis, facilis, minus
            blanditiis fugit voluptas odio. Rem repellat fugit eligendi
            quibusdam sequi? Sint, labore magnam?
          </p>
        </div>
        <div className='img-container'>
          <img src={heroImg} alt='women and the browser' className='img' />
        </div>
      </div>
    </section>
  )
}

export default Hero
