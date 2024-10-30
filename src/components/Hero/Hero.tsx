import { DotLottieReact } from '@lottiefiles/dotlottie-react'

function Hero() {
  return (
    <section id="hero" className="hero text-green-500 bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-green-500">
          <h1 className="text-5xl font-bold">Hola! Soy Aaron</h1>
          <p className="py-6">
            Full stack JR desarrollador argentino especializado en Reat Ts. con
            años de experienca como freelancer. Estoy buscando oportunidades
            para formar parte de un equipo de IT en una empresa donde pueda
            desarrollarme profesionalmente y contribuir con mis habilidades.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>

        <DotLottieReact
          src="public\codingAvatarDefinitive.json"
          loop
          autoplay
        />
      </div>
    </section>
  )
}

export default Hero
