import axios from 'axios'
import {useState, useEffect, axiosConfig} from 'react'
import {Link, Navigate} from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Swal from 'sweetalert2'

//Importamos la libreria del icono 
import { FaTrashAlt, FaPencilAlt,FaFileSignature } from "react-icons/fa";

const URI = 'http://localhost:8001/usuarios/sheventos'
const URI2 = 'http://localhost:8001/usuarios/delevent/'


//Nombre de variable 
export const CompShowEventos = () => {
    
  
    const [ceventos, setEventos] = useState([])
   
    //Se define una funcion dentro de useEffect
    useEffect( ()=>{
        getBlogs()
    },[])

    //procedimineto para mostrar todos los registros
    const getBlogs = async () => {
        const res = await axios.get(URI,axiosConfig)
        setEventos(res.data)
    }

    //procedimineto para eliminar un registro
    const deleteBlog = async (_id) => {

        //insertar la validación con Alert

      
       Swal.fire({
        title: 'Advertencia',
        text: 'Esta seguro de eliminar el evento?',
        icon: 'question',
        showDenyButton: true,
        denyButtonText: "NO",
        confirmButtonText: "SI",
       }).then(response => {
        if(response.isConfirmed){
            axios.delete(`${URI2}${_id}`)
            Swal.fire("El evento se elimino con exito")
            getBlogs()
        }else{
            Swal.fire("Seleccione el evento a eliminar")
        }
       })
       
    }


        
        //fire("Archivo eliminado con Exito")
      // await axios.delete(`${URI2}${_id}`)
       //getBlogs()
   // }


//Aqui esta nuestro codigo HTML de como se mostrara
    return(
        <div >
            <div >
                <div >
                    <Link to="/regevento" className='btn btn-primary mt-2 mb-2'><i className="fas fa-plus"></i><FaFileSignature /></Link>
                    <center>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Fecha</th>
                                <th>Equipo 1</th>
                                <th>Equipo 2</th>
                                <th>Marcador E1</th>
                                <th>Marcador E2</th>
                                <th>Tipo de Evento</th>
                            </tr>
                        </thead>
                        <tbody>
                            { ceventos.map ( (blog) => (
                                <tr key={ blog._id}>
                                    <td > { blog.fecha  } </td>
                                    <td > { blog.equipo1  } </td>
                                    <td > { blog.equipo2  } </td>
                                    <td > { blog.marcador1  } </td>
                                    <td > { blog.marcador2  } </td>
                                    <td > { blog.tipoevento  } </td>
                                    <td>
                                        <Link to={`/editevento/${blog._id}`} className=''><i className="fas fa-edit"><FaPencilAlt/>   </i></Link>
                                        </td>
                                        <td>
                                        <button onClick={ ()=>deleteBlog(blog._id) } className='btn btn-danger'><i className="fas fa-trash-alt"><FaTrashAlt/></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </Table>
                    </center>
                </div>    
            </div>
        </div>
    )

}

export default CompShowEventos