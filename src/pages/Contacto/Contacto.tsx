
const Contacto = () => {
  return (
    
      <section className="py-10 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tigh sm:text-4xl lg:text-5xl">Contactame!</h2>
            <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed">Su mensaje será contestado a la brevedad.</p>
        </div>

        <div className="max-w-6xl mx-auto mt-12 overflow-hidden bg-blue2 00  lg:mt-20">
            <div className="grid items-stretch grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3">
                    <div className="p-6 sm:p-10">
                       

                        <form action="#" method="POST" className="mt-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                <div>
                                    <label htmlFor="" className="text-base font-medium"> Nombre </label>
                                    <div className="mt-2.5 relative">
                                        <input type="text" name="" id="" placeholder="" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600 " />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="" className="text-base font-medium"> Email </label>
                                    <div className="mt-2.5 relative">
                                        <input type="email" name="" id="" placeholder="" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="" className="text-base font-medium"> Cel </label>
                                    <div className="mt-2.5 relative">
                                        <input type="tel" name="" id="" placeholder="" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="" className="text-base font-medium"> Nombre de la companía </label>
                                    <div className="mt-2.5 relative">
                                        <input type="text" name="" id="" placeholder="" className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label htmlFor="" className="text-base font-medium"> Su mensaje </label>
                                    <div className="mt-2.5 relative">
                                        <textarea
                                            name=""
                                            id=""
                                            placeholder=""
                                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md resize-y bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                                         
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <button type="submit" className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-500 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700">
                                        Envíar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <img className="lg:col-span-2" src="/contact.png" alt="Contact" />

               
            </div>
        </div>
    </div>
</section>

  )
}

export default Contacto