import React from 'react'
import Image from 'next/image'
import heroDarkImg from '../../../public/assets/hero-img.png'
import Button from '../../buttons/button/Button'
import PageContainer from '../../containers/PageContainer'

const Hero = () => {
  return (
    <PageContainer className="lg:flex-row-reverse lg:pt-24 xl:!justify-center">
      <div className="m-auto lg:m-0">
        <Image src={heroDarkImg} alt="hero-img" width={400} height={300} />
      </div>
      <div className="max-w-xl">
        <div className="text-h2">
          <h2 className="leading-h2">Rise to the Top of the Crypto Market,</h2>
          <h2 className="leading-h2">Learn and Earn non-stop.</h2>
          <h2 className="leading-h2 text-primary">Mastering Digital Wealth</h2>
        </div>
        <p className="text-p leading-8 text-small-text-color">
          Chain Goats is your one-stop destination for unlocking the wealth and
          potential of the crypto market. Our mission is to provide high-quality
          crypto education for individuals of all levels, taught by experienced
          and successful traders, investors, and developers known as GOATS.
        </p>
        <div className="mt-10 flex items-center gap-8">
          <Button>Get started</Button>
          <Button variant="secondary">Learn more</Button>
        </div>
      </div>
    </PageContainer>
  )
}

export default Hero
