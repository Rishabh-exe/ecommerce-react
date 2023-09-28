import Carousel from 'react-bootstrap/Carousel';


function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src='/img/img1.png' class="d-block w-100" alt="image" style={{maxHeight:"100vh"}}></img>
        <Carousel.Caption>
          <h3 className='text-dark'>New H&M Arrivals</h3>
          <p className='text-dark'>Get 50% off On every Products</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/img/img2.png' class="d-block w-100" alt="image" style={{maxHeight:"100vh"}}></img>
        <Carousel.Caption>
          <h3 className='text-dark'>US Polo Assn</h3>
          <p className='text-dark'>Flat 50% Off</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/img/img3.png' class="d-block w-100" alt="image" style={{maxHeight:"100vh"}}></img>
        <Carousel.Caption>
          <h3 className='text-dark'>Woman Wear</h3>
          <p className='text-dark'>New Ethnic Wear For Womens</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/img/img4.png' class="d-block w-100" alt="image" style={{maxHeight:"100vh"}}></img>
        <Carousel.Caption>
          <h3 className='text-dark'><b>Puma Shirts</b></h3>
          <p className='text-dark'><b>Flat 30% Off </b></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;