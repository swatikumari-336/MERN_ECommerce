import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { saveShippingAddress } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

const ShippingScreen = ({ history }) => {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Submit")
        dispatch(saveShippingAddress({
            address, city, postalCode, country
        }))
        history.push('/payment')
    }
    return (
        <FormContainer>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <h1>Shipping</h1>
            <form onSubmit={submitHandler}>
                <Form.Group controlId='address'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type='text'
                        placeholder='Enter address'
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='city'>
                    <Form.Label>Email city</Form.Label>
                    <Form.Control type='text'
                        placeholder='Enter city'
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='postalCode'>
                    <Form.Label>Email postalCode</Form.Label>
                    <Form.Control type='text'
                        placeholder='Enter postalCode'
                        required
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId='country'>
                    <Form.Label>Email country</Form.Label>
                    <Form.Control type='text'
                        placeholder='Enter country'
                        required
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>Continue</Button>
            </form>
        </FormContainer>
    )
}

export default ShippingScreen
