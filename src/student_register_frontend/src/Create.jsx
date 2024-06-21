import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {Container, Row, Col, Card} from 'react-bootstrap'
import { student_register_backend } from 'declarations/student_register_backend';
import {useNavigate} from "react-router-dom"

const Create = () => {
    const [name, setName] = useState ("");
    const [lastName, setLastName] = useState ("");
    const [grade, setGrade] = useState (0);
    const [group, setGroup] = useState (0);
    const [teacherName, setTeacherName] = useState ("");

    const navigate = useNavigate()

    const onChangeName = (e) => {
        e.preventDefault();
        const preName = e.target.value;
        setName(preName);
    }

    const onChangeLastName = (e) => {
        e.preventDefault();
        const preLastName = e.target.value;
        setLastName(preLastName);
    }

    const onChangeGrade = (e) => {
        e.preventDefault();
        const preGrade = e.target.value;
        setGrade(preGrade);
    }

    const onChangeGroup = (e) => {
        e.preventDefault();
        const preGroup = e.target.value;
        setGroup(preGroup);
    }

    const onChangeTeacherName = (e) => {
        e.preventDefault();
        const preTeacherName = e.target.value;
        setTeacherName(preTeacherName);
    }

    function createStudent() {
        student_register_backend.addStudent(BigInt(group, grade), name, lastName, teacherName)
    }

  return (
    <Container>
        <Row>
            <Col>
            <Card>
                <Card.Title>Agregar Alumno</Card.Title>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Nombre del alumno: </Form.Label>
                            <Form.Control name = "name" onChange={onChangeName} type="text" placeholder="Ingresa el Nombre" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Apellido del alumno: </Form.Label>
                            <Form.Control name = "lastName" onChange={onChangeLastName} type="text" placeholder="Ingresa el Apellido" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Calificación general del alumno: </Form.Label>
                            <Form.Control name = "grade" onChange={onChangeGrade} type="number" placeholder="Ingresa la Calificación general" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Grupo al que pertenece el alumno: </Form.Label>
                            <Form.Control name = "group" onChange={onChangeGroup} type="number" placeholder="Ingresa el Grupo" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Docente del grupo: </Form.Label>
                            <Form.Control name= "teacherName" onChange={onChangeTeacherName} type="text" placeholder="Ingresa el nombre del Titular" />
                        </Form.Group>

                        <Button variant="primary" onClick={createStudent}>
                            Guardar Registro
                        </Button>
                    </Form> 
                </Card.Body>
            </Card>
            </Col>
        </Row>
    </Container>
  );
}

export default Create;