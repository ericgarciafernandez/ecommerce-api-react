import { Carousel } from "flowbite-react";

function Component() {
  return (
    <section>
      <div className="h-96">
        <Carousel>
          <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img
              src="https://images.pexels.com/photos/2522085/pexels-photo-2522085.jpeg"
              alt="Planta 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-2xl font-bold">Promoción Especial</h2>
                <p className="mt-2">¡Aprovecha nuestras ofertas exclusivas!</p>
              </div>
            </div>
          </div>
          <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img
              src="https://images.pexels.com/photos/213727/pexels-photo-213727.jpeg"
              alt="Planta 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-2xl font-bold">Promoción Especial</h2>
                <p className="mt-2">¡Aprovecha nuestras ofertas exclusivas!</p>
              </div>
            </div>
          </div>
          <div className="relative flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img
              src="https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg"
              alt="Planta 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-2xl font-bold">Promoción Especial</h2>
                <p className="mt-2">¡Aprovecha nuestras ofertas exclusivas!</p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Component;
