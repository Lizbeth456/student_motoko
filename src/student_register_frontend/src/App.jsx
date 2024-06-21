import { useEffect, useState } from 'react';
import { student_register_backend } from 'declarations/student_register_backend';
import {Container, Row, Col, Card, Table, Button} from 'react-bootstrap'
import {useNavigate} from "react-router-dom"

function App() {
  const [students, setStudents] =useState([])
  const navigate = useNavigate()
  useEffect(() => {
    getStudents();
  }, []);

  function getStudents() {
    student_register_backend.getAllStudents().then(students =>{
        setStudents(students);
    });
  }

  function delateStudent(id) {
    student_register_backend.delateStudent(BigInt(id)).then(() => {
        getStudents();
    });
  }

  return (
    <Container>
        <Row>
            <span class="d-block mb-3"></span>
            <h1>Lista de Estudiantes</h1>
            <span></span>
            <Col>
              <Button onClick={()=>navigate('/agregar-alumno')}>Adicción de datos</Button>
            </Col>
            <Col>
              <Button onClick={()=>delateStudent(Number(student.id))}>Eliminación de datos</Button>
            </Col>
            <Col>
              < Button onClick={()=>navigate('/actualizar-alumno')}>Actualización de datos</Button>
            </Col>
            <span class="d-block mb-3"></span>
            <span></span>
            <Card>
                <Card.Body>
                    <Card.Title>Registro de Alumnos</Card.Title>
                    <Card.Subtitle>Proyecto de Listado a través de un CRUD</Card.Subtitle>
                    <Table>
                      <thead>
                        <tr> 
                          <th>#</th>
                          <th>Nombre del Alumno</th>
                          <th>Apellido del Alumno</th>
                          <th>Calificación del Alumno</th>
                          <th>Grupo del Alumno</th>
                          <th>Docente del Alumno</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          students.length > 0 ?
                          students.map((student) => (
                            <tr>
                              <td>{Number(student.id)}</td>
                              <td>{student.name}</td>
                              <td>{student.lastName}</td>
                              <td>{Number(student.grade)}</td>
                              <td>{Number(student.group)}</td>
                              <td>{student.teacherName}</td>
                            </tr>
                          ))
                          : <tr></tr>
                        }
                      </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Row>
    </Container>
    )
}

export default App;
