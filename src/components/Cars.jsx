import React, { useContext, useState } from 'react'
import {UserContext, UserProvider} from '../context/Mobil'
import NavBar from './NavBar'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SewaMobilSection from './SewaMobilSection';


const User = ()=>{
  const {user} = useContext(UserContext)
  return (
    <div>
        <div className='d-flex'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user[0].image} />
          <Card.Body>
            <Card.Title>{user[0].model}</Card.Title>
            <Card.Text>
              <p>Harga Sewa/hari: {user[0].rentPerDay}</p>
              <p>Kapasitas: {user[0].capacity} orang</p>
              <p>Driver: {user[0].driver}</p>
            </Card.Text>
          </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user[1].image} />
          <Card.Body>
            <Card.Title>{user[1].model}</Card.Title>
            <Card.Text>
              <p>Harga Sewa/hari: {user[1].rentPerDay}</p>
              <p>Kapasitas: {user[1].capacity} orang</p>
              <p>Driver: {user[1].driver}</p>
            </Card.Text>
          </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user[2].image} />
          <Card.Body>
            <Card.Title>{user[2].model}</Card.Title>
            <Card.Text>
              <p>Harga Sewa/hari: {user[2].rentPerDay}</p>
              <p>Kapasitas: {user[2].capacity} orang</p>
              <p>Driver: {user[2].driver}</p>
            </Card.Text>
          </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user[3].image} />
          <Card.Body>
            <Card.Title>{user[3].model}</Card.Title>
            <Card.Text>
              <p>Harga Sewa/hari: {user[3].rentPerDay}</p>
              <p>Kapasitas: {user[3].capacity} orang</p>
              <p>Driver: {user[3].driver}</p>
            </Card.Text>
          </Card.Body>
          </Card>
        </div>
        <div className="d-flex">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user[4].image} />
          <Card.Body>
            <Card.Title>{user[4].model}</Card.Title>
            <Card.Text>
              <p>Harga Sewa/hari: {user[4].rentPerDay}</p>
              <p>Kapasitas: {user[4].capacity} orang</p>
              <p>Driver: {user[4].driver}</p>
            </Card.Text>
          </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user[5].image} />
          <Card.Body>
            <Card.Title>{user[5].model}</Card.Title>
            <Card.Text>
              <p>Harga Sewa/hari: {user[5].rentPerDay}</p>
              <p>Kapasitas: {user[5].capacity} orang</p>
              <p>Driver: {user[5].driver}</p>
            </Card.Text>
          </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user[6].image} />
          <Card.Body>
            <Card.Title>{user[6].model}</Card.Title>
            <Card.Text>
              <p>Harga Sewa/hari: {user[6].rentPerDay}</p>
              <p>Kapasitas: {user[6].capacity} orang</p>
              <p>Driver: {user[6].driver}</p>
            </Card.Text>
          </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user[7].image} />
          <Card.Body>
            <Card.Title>{user[7].model}</Card.Title>
            <Card.Text>
              <p>Harga Sewa/hari: {user[7].rentPerDay}</p>
              <p>Kapasitas: {user[7].capacity} orang</p>
              <p>Driver: {user[7].driver}</p>
            </Card.Text>
          </Card.Body>
          </Card>
        </div>
        <div className="d-flex">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={user[11].image} />
            <Card.Body>
                <Card.Title>{user[11].model}</Card.Title>
                <Card.Text>
                <p>Harga Sewa/hari: {user[11].rentPerDay}</p>
                <p>Kapasitas: {user[11].capacity} orang</p>
                <p>Driver: {user[11].driver}</p>
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    </div>
  )
}

function Cars() {
  const [driver, setDriver] = useState('dengan supir')
  const [penumpang, setPenumpang] = useState('')
  const [waktu, setWaktu] = useState('9 pagi')
  


  const handleSubmit = (e)=>{
    e.preventDefault()
    if(driver === 'dengan supir' && waktu === '9 pagi' && penumpang <=5){
      window.location='/dengansupir9'
    }
    else if(driver === 'dengan supir' && waktu === '9 pagi' && penumpang >5){
      window.location='/mobilbesarsupir'
    }
    else if(driver === 'dengan supir' && waktu === '11 pagi' && penumpang >5){
      window.location='/mobilbesarsupir'
    }
    else if(driver === 'dengan supir' && waktu === '4 sore' && penumpang >5){
      window.location='/mobilbesarsupir'
    }
    else if(driver === 'dengan supir' && waktu === '11 pagi' && penumpang <=5){
      window.location='/dengansupir'
    }
    else if(driver === 'dengan supir' && waktu === '4 sore' && penumpang <=5){
      window.location='/dengansupir'
    }
    else if(driver === 'tanpa supir' && waktu === '9 pagi' && penumpang <=5){
      window.location='/tanpasupir'
    }
    else if(driver === 'tanpa supir' && waktu === '11 pagi' && penumpang <=5){
      window.location='/tanpasupir'
    }
    else if(driver === 'tanpa supir' && waktu === '4 sore' && penumpang <=5){
      window.location='/tanpasupir'
    }
    else{
        window.location = '/no-car'
    }
  }
  return (
    <div>
      <NavBar/>
      <SewaMobilSection/>
      <br />
      <form className="d-flex" onSubmit={handleSubmit}>
          
            <Form.Select
              type="text"
              placeholder="Dengan Supir/ Lepas Kunci"
              className="me-2"
              aria-label="driver"
              value={driver}
              onChange={e=>{setDriver(e.target.value)}}
              required
            >
              <option value="dengan supir">Dengan Supir</option>
              <option value="tanpa supir">Tanpa Supir</option>
            </Form.Select>

            <Form.Control
                type="date"
                placeholder="Pilih tanggal"
                className="me-2"
                aria-label="tanggal"
                required
            />
            <Form.Select
              type="text"
              placeholder=" pilih waktu"
              className="me-2"
              aria-label="driver"
              value={waktu}
              onChange={(e)=>{setWaktu(e.target.value)}}
              required
            >
              <option value="9 pagi">9 AM</option>
              <option value="11 pagi">11 AM</option>
              <option value="4 sore">4 PM</option>
              
            </Form.Select>

            <Form.Control
              type="number"
              placeholder="Jumlah Penumpang (optional)"
              className="me-2"
              aria-label="jumlah penumpang"
              value={penumpang}
              onChange={(e)=>{setPenumpang(e.target.value)}}
              
            />
            <Button variant="success" type='submit'>Search</Button>
          </form>
      <br />
      <div>
        <UserProvider>
          <User/>
        </UserProvider>
      </div>
    </div>
  )
}

export default Cars