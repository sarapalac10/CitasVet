const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    console.log('paciente :>> ', paciente);

    const {nombre, propietario, email, fecha, sintomas, id } = paciente;

    const handleEliminar = () => {
        const respuesta = confirm('¿Deseas eliminar el paciente?')
        if(respuesta){
            eliminarPaciente(id)
        }
    }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl ">
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre Mascota: {''}
        <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre Propietario: {''}
        <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Correo electrónico: {''}
        <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha Alta: {''}
        <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
            Síntomas de la mascota: {''}
        <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <div className="flex justify-between mt-10">
            <button 
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                onClick={() => setPaciente(paciente) }
                >Editar
            </button>
            <button 
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                onClick={handleEliminar}
                >Eliminar
            </button>
        </div>
    </div>
  )
}

export default Paciente;