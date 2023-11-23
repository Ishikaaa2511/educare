import React, {useState} from 'react';
import { Container, Row , Col, FormGroup } from 'reactstrap';
import CommonSection from '../components/UI/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import Footer from '../components/Footer/Footer';

import '../styles/checkout.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';


const Checkout = () => {

  const totalQty = useSelector((state)=> state.cart.totalQuantity)
  const totalAmount = useSelector((state)=> state.cart.totalAmount)
  const dispatch = useDispatch();

  
  const [discountApplied, setDiscountApplied] = useState(false);
  const discountPercentage = 50; // Set the discount percentage here
  
  const handlePlaceOrder = () => {
    // Handle the logic for placing the order with the discount applied
    if (discountApplied) {
      // Apply the 50% discount to the total amount
      const discountedAmount = totalAmount*(1 - discountPercentage / 100);

      dispatch(cartActions.setDiscountAmount(discountedAmount));

      // Continue with the order placement logic
      return 1;

    } else{
      dispatch(cartActions.setDiscountAmount(0));
    }

  };

  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Billing Information</h6>
              <form className='billing__form'>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Enter your name' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='email' placeholder='Enter your email' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='number' placeholder='Enter your number' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Address' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='City' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Postal code' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='Country' />
                </FormGroup>
              </form>
            </Col>
            <Col lg='4'>
               <div className="checkout__cart">
                <h6>Total Qty: <span>{totalQty} items</span></h6>
                <h6>Subtotal: <span>$ {totalAmount}</span></h6>
                <h6>Free Shipping</h6>
                <h4>Total Cost: <span>${totalAmount}</span></h4>
                {!discountApplied && (
                  <button
                  className="btn w-100 mt-3"
                  onClick={() => setDiscountApplied(true)}
                  >
                    Apply 50% Discount
                  </button>
                )}
                {discountApplied && (
                  <button
                  className="btn w-100 mt-3"
                  onClick={handlePlaceOrder}
                  >
                    Place an order with discount
                  </button>
                )}
               </div>
             
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />

    </Helmet>
  )
}

export default Checkout;
