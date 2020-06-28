import data from './requestData.ts'
console.log(data)



/*
        => Seguro por defecto
        deno run --allow-net welcome.ts

        => Especificar la extensión

        => Tiene soporte para 
        WebAssemby Binaries Supported

        => No tiene package.json
        Se importan directamente, mis modulos externos se importan directamente en donde se vayan a requerir
        la primera vez que se ejecute deno los descarga y los instala, quedan cacheados, sin carpeta node_modules
*/