import React, { useState } from 'react'

import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet'
import { Container , Row , Col } from 'reactstrap';
import '../styles/shop.css';
import Footer from '../components/Footer/Footer';

import products from '../assets/data/products';
import ProductLists from '../components/UI/ProductsLists';

const Shop = () => {

  const [ productsData, setProductsData] = useState(products);

  const handleFilter = (e)=>{

    
    const filterValue = e.target.value;
      if( filterValue === 'Web development'){
        const filteredProducts = products.filter(
          (item) => item.category === 'Web development'
        );

        setProductsData(filteredProducts);
      }


      if( filterValue === 'Subjects'){
        const filteredProducts = products.filter(
          (item) => item.category === 'Subjects'
        );

        setProductsData(filteredProducts);
      }


      if( filterValue === 'Language'){
        const filteredProducts = products.filter(
          (item) => item.category === 'Language'
        );

        setProductsData(filteredProducts);
      }


      if( filterValue === 'Marketing'){
        const filteredProducts = products.filter(
          (item) => item.category === 'Marketing'
        );

        setProductsData(filteredProducts);
      }


      if( filterValue === 'wireless'){
        const filteredProducts = products.filter(
          (item) => item.category === 'wireless'
        );

        setProductsData(filteredProducts);
      }
  };

  
  const handleSearch = (e) =>{
    const searchTerm = e.target.value 

    const searchProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchProducts)
  }

  return <Helmet title='Shop'>
    <CommonSection title='Courses' />

    <section>
      <Container>
        <Row>
          {/* <Col lg='3' md='6'>
            <div className="filter__widget">
              <select onClick={handleFilter}> 
                <option> Filter By Category</option>
                <option value="sofa"> Sofa</option>
                <option value="mobile">Mobile</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
                <option value="wireless">Wireless</option>
              </select>
            </div> </Col>
          <Col lg='3' md='6'>
          <div className="filter__widget">
          <select> 
                <option> Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
          </select>
          </div>
          </Col> */}
          <Col lg='6' md='12'>
            <div className="search__box">
              <input type='text' placeholder='Search.....' 
              onChange={handleSearch}
              />
              <span><i class="ri-search-line"></i></span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <section className='pt-0'>
      <Container>
        <Row>
          {
            productsData.length === 0? <h1 className='text-center fs-4'>No products are found! </h1>: <ProductLists data={productsData} />
          }
        </Row>
      </Container>
    </section>
    <Footer />

  </Helmet>
}

export default Shop;
