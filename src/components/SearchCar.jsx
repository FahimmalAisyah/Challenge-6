import React, { PureComponent } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export class SearchCar extends PureComponent {
  render() {
    return (
      <div>
        <Form className="d-flex">
          
            <Form.Select
              type="text"
              placeholder="Dengan Supir/ Lepas Kunci"
              className="me-2"
              aria-label="driver"
            >
              <option value="supir">Dengan Supir</option>
              <option value="withoutSupir">Tanpa Supir</option>
            </Form.Select>

            <Form.Control
              type="select"
              placeholder="Pilih tanggal"
              className="me-2"
              aria-label="tanggal"
            />
            <Form.Select
              type="text"
              placeholder=" pilih waktu"
              className="me-2"
              aria-label="driver"
            >
              <option value="9pagi">9 AM</option>
              <option value="10pagi">10 AM</option>
              <option value="11pagi">11 AM</option>
              <option value="12siang">12 PM</option>
              <option value="1siang">1 PM</option>
              
            </Form.Select>
            <Form.Control
              type="number"
              placeholder="Jumlah Penumpang"
              className="me-2"
              aria-label="jumlah penumpang"
            />
            <Button variant="success">Search</Button>
          </Form>
      </div>
    )
  }
}

export default SearchCar