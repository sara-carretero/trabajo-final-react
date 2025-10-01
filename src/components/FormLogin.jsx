import { useState } from "react"


const FormLogin = () => {
  //los siguientes son estados:
  const [password, setPassword] = useState()
  const [message, setMessage] = useState()



  // hook significa anzuelo -> es una funcionalidad que provee react
  // use -> "usando ..."
  // useState -> significa usando un estado
  // un estado es una variable que cuando cambiar se rerenderiza el componente, es decir, se vuelve ejecutar el return

  const PASS = "pepe123"

  const validatePassword = () => {
    setMessage(null)
    setError(null)

    if (password === PASS) {
      setMessage("Contraseña valida, serás redirigido.")
    } else {
      console.log("error")
    }
  }

  //manejadorDeEnvio por lo general se lo nombra como handleSubmit
  const manejadorDeEnvio = (e) => {

    //e.preventDefault () método para prevenir el comportamiento por defecto que tiene el formulario, es decir, tiene por defecto que cada vez que se envíe, se recarga la página.
    e.preventDefault()
    validatePassword()
  }

  return (

    <form onSubmit={manejadorDeEnvio}>
      <label htmlFor="">Contraseña de acceso</label>
      <input type="password" onChange={(event) => setPassword(event.target.value)} />
      <button>Acceder</button>
      <p>{message}</p>
    </form>
  )
}

export default FormLogin