import React, {useState , useEffect} from 'react';
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../assets/data/products';
import Footer from '../components/Footer/Footer';

import Helmet from "../components/Helmet/Helmet";

import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img1.png';
// import Services from '../services/services';
// import ProductsLists from '../components/UI/ProductsLists';
// import Clock from '../components/UI/Clock';
// import counterImg from '../assets/images/counter-timer-img.png';
import Company from '../components/company-section/company';
import AboutUs from '../components/About-us/AboutUs';
import '../styles/home.css';
import Courses from '../components/Courses-section/Courses';

import ChooseUs from '../components/Choose-us/ChooseUs';
import Features from '../components/Feature-section/Features';
import FreeCourse from '../components/Free-courses-section/FreeCourses';
import Testimonials from '../components/Testimonials/Testimonials';
import Newsletter from '../components/Newsletter/Newsletter';


const Home = () => {


    const [trendingProducts , setTrendingProducts] = useState(products)
    const [bestSalesProducts , setBestSalesProducts] = useState(products)
    const [mobileProducts , setMobileProducts] = useState(products)
    const [wirelessProducts , setWirelessProducts] = useState(products)
    const [popularProducts , setPopularProducts] = useState(products)


    const year = new Date().getFullYear() ;

    useEffect(()=>{
        const filteredTrendingProducts = products.filter(item => item.category === 'Language'
        );
        const filteredBestSalesProducts = products.filter(item => item.category === 'Web development'
        );
        const filteredMobileProducts = products.filter(item => item.category === 'Subjects'
        );
        const filteredWirelessProducts = products.filter(item => item.category === 'wireless'
        );
        const filteredPopularProducts = products.filter(item => item.category === 'Marketing'
        );

        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);
        setMobileProducts(filteredMobileProducts);
        setWirelessProducts(filteredWirelessProducts);
        setPopularProducts(filteredPopularProducts);
    }, []);


  return <Helmet title ={'Home'}>
    <section className="hero__section">
        <Container>
            <Row>
            <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
              Join our vibrant community of passionate learners and embark<br/>
              on a quest for knowledge that knows no bounds. Start your<br/>
              learning adventure today with Educare!
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
            </Row>
        </Container>
    </section>

    <Company />
    <AboutUs />
    <Courses />
    <ChooseUs />
    <Features />
    <FreeCourse />
    <Testimonials />
    <Newsletter />
   
{/* 
    <section className="new__arrival">
        <Container>
            <Row>
            <Col lg="12" className='text-center mb-5' >
                    <h2 className='section__title'> New Arrivals</h2>
                </Col>
                <ProductsLists data={mobileProducts} />
                <ProductsLists data={wirelessProducts} />

            </Row>
        </Container>
    </section>

    <section className="popular_category">
        <Container>
            <Row>
            <Col lg="12" className='text-center mb-5'>
                    <h2 className='section__title'> Popular in Category</h2>
                </Col>
                <ProductsLists data={popularProducts} />
            </Row>
        </Container>
    </section> */}
    <Footer />
  </Helmet>

}

export default Home;
