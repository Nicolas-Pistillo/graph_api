# REST                                         

- Una URL = Un recurso                        
- No se puede elegir lo que se recibe         
- Multiples versiónes de la API               
- No autodocumentado (necesita documentacion) 
- Almacenamiento en cache                     

### Ejemplo de peticion a API REST

A) http://dominio.com/api/peliculas
B) http://dominio.com/api/peliculas/34
C) http://dominio.com/api/episodios?id=27

# GraphQL

- Una URL = Toda la información
- Se puede elegir lo que se recibira
- No existen versiones
- Autodocumentacion
- No tiene almacenamiento en caché

### Ejemplo de llamado a api GraphQL

{
    serie(id: 3) {
        id
        titulo
        autor {
            nombre
            apellido
        }
        episodios {
            numero
            titulo
        }
    }
}

### Schema de GraphQL

- Centro de cualquier implementación del servidor de GraphQL
- La parte mas compleja de un proyecto de GraphQL
- Nos alejamos de la filosofia de REST
