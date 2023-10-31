import React, { PureComponent } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


export class ServiceSection extends PureComponent {
  render() {
    return (
        <section id="service-section">
        <div class="container my-5">
          <div class="row d-flex justify-content-center align-items-center py-5">
            <div class="col-md-5 px-lg-5">
              <img src="./src/assets/ezyzip/model.png" alt="img service" class="img-fluid"></img>
            </div>
            <div class="col-md-6 ps-lg-5 mt-4">
              <h2 class="service-text-judul">Best Car Rental for any kind of trip in (Lokasimu)!</h2>
              <div class="service-desc-container mt-3">
                <p class="service-p pe-lg-5">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
               <div class="service-content">
                  <div class="service-img-container">
                      <img src="./src/assets/ezyzip/check.png" alt=""></img>
                  </div>
                  <ul>
                      <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                      <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                      <li>Sewa Mobil Jangka Panjang Bulanan</li>
                      <li>Gratis Antar - Jemput Mobil di Bandara</li>
                      <li>Layanan Airport Transfer / Drop In Out</li>
                    </ul>
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ServiceSection