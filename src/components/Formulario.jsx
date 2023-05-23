import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ( { pacientes, setPacientes, paciente, setPaciente } ) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    
    const [error, setError] = useState(false);

    useEffect(()  => {
        if(Object.keys(paciente).length>0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const random= Math.random().toString(20).substring(2)
        const date = Date.now().toString(36)
        return random + date
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //Validación
        if([nombre, propietario, email, fecha, sintomas].includes('')){
            console.log("Hay al menos un campo vacío")
            setError(true)
            return;
        }
        setError(false);

        //Objeto de paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
        };

        if(paciente.id){
            //console.log('Editando -> no es nuevo')
            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
            setPacientes(pacientesActualizados)
            setPaciente({})
        }else{
            //console.log('Nuevo registro')
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente]);
        }


        //Reiniciar el form después de enviar los datos
        setNombre('');
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }


  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>
        <p className="text-lg mt-5 mb-10 text-center">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold">Adminístralos</span>
        </p>
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        >
            {error && <Error>Todos los campos son obligatorios</Error> }
            <div className="mb-5">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold" >
                    Nombre de la Mascota
                </label>
                <input
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-40 rounded-md"
                    value={nombre}
                    onChange={ (e) =>setNombre(e.target.value) }
                />
            </div>
            <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold" >
                    Nombre del Propietario
                </label>
                <input
                    id="propietario"
                    type="text"
                    placeholder="Nombre del propietario de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-40 rounded-md"
                    value={propietario}
                    onChange={ (e) =>setPropietario(e.target.value) }
                />
            </div>
            <div className="mb-5">
                <label htmlFor="email" className="block text-gray-700 uppercase font-bold" >
                    Correo electrónico
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="email del propietario de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-40 rounded-md"
                    value={email}
                    onChange={ (e) =>setEmail(e.target.value) }
                />
            </div>
            <div className="mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold" >
                    Fecha de alta
                </label>
                <input
                    id="alta"
                    type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-40 rounded-md"
                    value={fecha}
                    onChange={ (e) =>setFecha(e.target.value) }
                />
            </div>
            <div className="mb-5">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold" >
                    Síntomas
                </label>
                <textarea
                    placeholder="Describe los síntomas de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-40 rounded-md"
                    id="sintomas"
                    value={sintomas}
                    onChange={ (e) =>setSintomas(e.target.value) }
                />
            </div>
            <input
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
            />
        </form>
    </div>
  )
}

export default Formulario