import React ,{Fragment,useState, useEffect} from 'react'
import Formulario from './components/Formulario'
import Cita from './components/Cita'


function App() {

 //arreglo con todas la citas
  const [citas,guardarCitas] = useState([])

  //funcion que tome las citas actuales y agregue la nueva

  const crearCita = cita =>{
    guardarCitas([...citas,cita])
  }
//funcion para eliminar cita por su ID

const eliminarCita = id =>{
    const nuevasCitas= citas.filter(cita => cita.id !== id);
    guardarCitas(nuevasCitas)
}


const titulo = citas.length ===0 ? 'No hay Ciatas':'Administra tus citas'

useEffect(()=>{
  console.log(citas)
},[citas])


  return (
 

   <Fragment>

      <h1>Administracion de citas</h1>
      <div className="container" >
        <div className="row">
            <div className="one-half column" >
              <Formulario

                crearCita={crearCita}

              />
            </div>
            <div className="one-half column" >
            <h2>{titulo}</h2>
            {citas.map((cita)=>(
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}

              />
            ))}

            </div>
        </div>
      </div>
   </Fragment>
  );
}

export default App;
