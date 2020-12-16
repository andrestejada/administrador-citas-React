import React, { Fragment,useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';


const Formulario = ({crearCita}) => {

    const [cita,actualizarCita]= useState({
        mascota: '',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''

    });

    const [error,actualizarError]= useState(false)

    const actualizarState = (e)=>{
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Extraer los valores de la cita

    const {mascota , propietario , fecha,hora,sintomas}= cita ;


    const submitCita = (e)=>{

        e.preventDefault();
        //validar

        if(mascota.trim()===''||propietario.trim()===''||fecha.trim()===''||hora.trim()===''||sintomas.trim()===''){
            actualizarError(true);
            return;
        }

        actualizarError(false);

        //asignar un ID
        cita.id = uuidv4()
        console.log(cita)
        //Crear una cita
        crearCita(cita)

        //Reiniciar el Form

        actualizarCita({
            mascota: '',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
    
        })
    }

    return (

        <Fragment>  
        <h2> Crear cita</h2>

        { error ? <p className="alerta-error" > Todos los campos son obligatorios </p>  : null}

        <form
            onSubmit={submitCita}
        >
            <label>Nombre Mascota</label>
            <input
                type='text'
                name='mascota'
                className='u-full-width'
                placeholder='Nombre Mascota'
                onChange={actualizarState}
                value={mascota}
            />

            <label>Nombre del Dueño de la Mascota</label>
            <input
                type='text'
                name='propietario'
                className='u-full-width'
                placeholder='Nombre dueño de la mascota'
                onChange={actualizarState}
                value={propietario}
            />

            <label>Nombre Mascota</label>
            <input
                type='date'
                name='fecha'
                className='u-full-width'
                onChange={actualizarState}
                value={fecha}            
            />

            <label>Hora</label>
            <input
                type='time'
                name='hora'
                className='u-full-width'
                onChange={actualizarState}
                value={hora}      
            />
            <label>Sintomas</label>
            <textarea
            className='u-full-width'
            name='sintomas'
            onChange={actualizarState}
            value={sintomas}     
            ></textarea>

            <button
            type='submit'
            className='u-full-width button-primary'
            >Agregar Cita</button>

        </form>
        
        </Fragment>
     );
}

Formulario.protoType = {
    crearCita : PropTypes.func.isRequired
}
 
export default Formulario;