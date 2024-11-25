import HeroSobreMi from "../../components/Hero/HeroSobreMi"


const SobreMi = () => {
  return (
    <div className=" flex-row text-center">

    <HeroSobreMi />


<div className='flex p-5'>
<h1 className="text-4xl self-start font-bold mb-10 mt-10">Construyendo Soluciones Web Innovadoras</h1>
<ul className="timeline timeline-vertical col-span-6 mb-16">
      
  <li>
    <div className="timeline-start">2022</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box text-black">Curso de desarrollo web con Python y Django</div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start">2023</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box text-black">Carrera front-end developer en Coderhouse</div>
    <hr />
  </li>
  <li>
    <hr />
    <div className="timeline-start">2024</div>
    <div className="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end timeline-box text-black">Front-end developer en Digital House</div>
    <hr />
  </li>
    </ul>
</div>

<div className="carousel carousel-end rounded-box">
  <div className="carousel-item">
    <img src="/HTML.png" className="size-40" alt="HTML icon" />
  </div>
  <div className="carousel-item">
    <img
      src="/CSS.png"
      alt="CSS icon"
      className="size-40 p-10" />
  </div>
  <div className="carousel-item">
    <img
      src="/javascript.png"
      alt="Javascript icon"
      className="size-40 p-10" />
  </div>
  <div className="carousel-item">
    <img
      src="/react.png"
      alt="React icon"
      className="size-40 p-10" />
  </div>
  <div className="carousel-item">
    <img src="/typescript.png" alt="Typescript icon" 
    className="size-40 p-10"/>
  </div>
  <div className="carousel-item">
    <img src="/tailwind.png" alt="Tailwind.png"
    className="size-40 p-10" />
  </div>

</div>

    </div>
  )
}

export default SobreMi

/*<div className="flex-colum items-center text-center p-3.5 w-2/3 h-screen">

<h1 className="text-5xl  font-bold">Mi historia</h1>

<p className="w-fit">
  Mediados del 2022, varios conocidos habían comenzado a trabajar como programadores. En ese momento no sabía muy bien que quería para mi futuro.
  Aunque siempre me gustó la computación en un principío parecía imposible. Pero a los pocos meses luego de horas y horas leyendo documentación e intentando hacer funcionar todo pude desarrollar mi primera web, un e-commerce. En fin, disfruto lo que hago y me siento más que preparado para mayores desafíos.
</p>
<img src={sobreMiImg} alt="Person programming" />


</div>*/