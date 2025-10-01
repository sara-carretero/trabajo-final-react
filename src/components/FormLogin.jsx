const FormLogin = () => {

  //manejadorDeEnvio por lo general se lo nombra como handleSubmit
  const manejadorDeEnvio = (e) => {

    //e.preventDefault () método para prevenir el comportamiento por defecto que tiene el formulario, es decir, tiene por defecto que cada vez que se envíe, se recarga la página.
    e.preventDefault()
  }

  return (

    <form onSubmit={manejadorDeEnvio}>
      <label htmlFor="">Contraseña de acceso</label>
      <input type="password" name="" id="" />
      <button>Acceder</button>
    </form>
  )
}

export default FormLogin