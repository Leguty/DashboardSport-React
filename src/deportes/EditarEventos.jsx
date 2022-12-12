import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'


//EndPoint para mostrar un evento especifico
const URI = 'http://localhost:8001/usuarios/shevent/'

//EndPoint para editar un evento especifico
const URI2 = 'http://localhost:8001/usuarios/upevent/'

export const CompEditEvento = () => {
    const [fecha, setFecha] = useState('')    
    const [equipo1, setEquipo1] = useState('')
    const [equipo2, setEquipo2] = useState('')   
    const [marcador1, setMarcador1] = useState('')   
    const [marcador2, setMarcador2] = useState('') 
    const [tipoevento, setTipoevento] = useState('')    

    const navigate = useNavigate()
    const {_id} = useParams()
    console.log('el valor del id es : ', _id)



    //procedimiento para actualizar
    const onSubmit = async (e) => {
        e.preventDefault()
        Swal.fire({
            title: 'Desea guardar los cambios?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            denyButtonText: `No guardar`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Guardado!', '', '')
            } else if (result.isDenied) {
              Swal.fire('La actualización no fue guardada', '', 'info')
            }
          })

          await axios.put(URI2+_id, { fecha: fecha, equipo1: equipo1, equipo2: equipo2, marcador1: marcador1, marcador2: marcador2, tipoevento: tipoevento })
          navigate('/sheventos')

        }

  

    const getBlogById = async () => {
        const res = await axios.get(URI+_id)
        setFecha(res.data.fecha)
        setEquipo1(res.data.equipo1)
        setEquipo2(res.data.equipo2)
        setMarcador1(res.data.marcador1)
        setMarcador2(res.data.marcador2)
        setTipoevento(res.data.tipoevento)
    }

    useEffect( ()=>{
        getBlogById()
     },[ ] )
     
    return (
        <div className="login-form">
        <h3>Editar Eventos Deportivos</h3>
        <form>
    
        <div>
                    <input
                        value={fecha}
                        onChange={ (e)=> setFecha(e.target.value)} 
                        type="text"
                        placeholder = "Fecha Año/Mes/Dia"
                    />    
                </div>
                 <div>
                 
                  <input
                        value={equipo1}
                        onChange={ (e)=> setEquipo1(e.target.value)} 
                        type="text"
                        placeholder = "Digite Equipo 1"
                    />    
                             
                 </div>
                 <div>
                 
                    <input 
                        value={equipo2}
                        onChange={ (e)=> setEquipo2(e.target.value)} 
                        type = "text"
                        placeholder = "Digite Equipo 2"
                    />                 
                 </div>
                 <div>
                
                 <input 
                    value={marcador1}
                     onChange={ (e)=> setMarcador1(e.target.value)} 
                     type = "text"
                     placeholder = "Digite Marcador 1"
                 />                 
              </div>
              <div>
              
                 <input 
                     value={marcador2}
                     onChange={ (e)=> setMarcador2(e.target.value)} 
                     type = "text"
                     placeholder = "Digite Marcador 2"
                 />                 
              </div>
              <div>
              
                 <input 
                     value={tipoevento}
                     onChange={ (e)=> setTipoevento(e.target.value)} 
                     type = "text"
                     placeholder = "Digite Tipo de Evento"
                 />                 
              </div>
            <button type="submit" onClick={onSubmit} className="btn-register">Actualizar</button>
        </form>
    </div>
    )

}

export default CompEditEvento