Axios tenemos que tener instalado para hacer union back con front

en la carpeta config creo axiosInstance.js {
    importo axios
    y con el metodo create creo la baseURL usando lo basico de la url de mi back
    si usamos imagenes en el form no usar react form
    el name de los input del formulario deben llevar el mismo nombre que en el userSCHEMA de mi back
    en la consola, en red vemos si el request es correcto o incorrecto
    npm install jwt decode -> para ver la info del token
    Proteger las rutas {
        carpeta router -> privateroutes.jsx
        de react router dom importo navigate y outlet. el primero lo que hace es navegar a una cierta pagina en particular y el outlet es un componente tmb que renderiza elementos hijos
        importo jwtDecode
        funcion useAuth que
        funcion privateroutes que hace una validacion respecto al token, si existe te muestra outlet (todos los componentes que estan dentro de la ruta privada), sino te devuelva a login
        En app.jsx en la parte de las routes creeo una con el element privateroutes y adentro todas las route que quiero que sean privadas, entonces, si es correcto el outlet de arriba, sale por alguna de las route privadas
    }
}