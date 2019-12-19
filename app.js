const express = require("express")//require es unicamente de Node.js

const servidor = express()

const puerto = process.env.PORT || 80

const publico = express.static("docs")
//Configurar directorio "/docs" como carpeta pública del proyecto
//servidor.use( express.static(docs) )
servidor.use( publico )
//configuraciones de respuestas
//servidor.get( ACA VOY A CONFIGURAR QUE REPONDER ANTE UNA PETICIÓN GET )
//servidor.get("RUTA", acción)
servidor.get("/", function(request, response){  //<-- Endpoint: está escrito de una forma que se puede entender. ej. elecrtonica.mercadolibre.com.ar/audio. son las URL con la información tan clara que devuelve la misma información.

	response.send("Holis desde Yoda")

})
//servidor.post()
//sevidor.put()
//servidor.delete()

servidor.listen( puerto )

//sudo index.js
//como devolver el index.html que está en la carpeta docs
//como NO apagar y prender de nuevo el servidor ante cada cambio

