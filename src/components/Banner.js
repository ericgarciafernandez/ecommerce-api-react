function Component() {
  return (
    <section>
      <div className=" grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Transforma tu espacio con naturaleza
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Descubre nuestra selección unica de plantas para convertir tu hogar
            en un oasis verde. Experimenta la tranquilidad y belleza de la
            naturaleza en cada esquina de tu espacio.
          </p>
          <button className="text-xl rounded-lg bg-accent text-white px-5 py-2.5 text-center transition duration-300">
            Ver plantas
          </button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/mockup.png" alt="mockup" className="h-auto"></img>
        </div>
      </div>
    </section>
  );
}

export default Component;
