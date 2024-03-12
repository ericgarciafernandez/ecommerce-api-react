function Navbar() {
    return (
        <header className="p-2 flex justify-around border-b text-lg">
            <img src="/plant.svg" className="h-6" />
            <div className="flex gap-x-12">
                <a>Interior</a>
                <a>Exterior</a>
                <a>Jardín</a>
                <a>Hierbas</a>
            </div>
             <div className="flex gap-x-12">
                <img src="/busqueda.svg" className="h-6" />
                <img src="/carrito.svg" className="h-6" />
            </div>
        </header>
   );
}

export default Navbar;