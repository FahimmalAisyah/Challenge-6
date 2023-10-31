import React, { PureComponent } from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function MainSection() {
  return (
    <section id="main-section">
    <div class="header">
        <div class="main-text">
            <h1 class="main-text-judul">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p class="main-text-subtitle">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas 
                terbaik dengan harga terjangkau.
                Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <a href="/cars" className="btn btn-left text-white btn-primary">Mulai Sewa</a>
        </div>
        <div class="img-container">
            <img src="./src/assets/ezyzip/imgcar.png" alt="Gambar mobil"></img>
        </div>
    </div>
</section>
  )
}

export default MainSection