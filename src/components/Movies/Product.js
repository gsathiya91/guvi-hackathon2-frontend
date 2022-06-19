import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
    Typography,
    Button,
    Grid,
    Paper
} from '@mui/material';

import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap';
import axios from 'axios';
import './Product.css';


function Product() {

    const [productList, setProductList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getProducts = async () => {
                var response = await axios.get('https://guvi-hackathon2backend.herokuapp.com/getmovies')
                console.log(response);
                setProductList(response.data);
            }
            getProducts();
    }, [])

    const handleLogout = () => {
       
        navigate('/');
    }
    return (
        
        <>
           <Navbar bg="light" variant="dark">
                    <Container>
                        <Nav className="me-auto">
                            <Typography variant="h6" class="text-secondary">Watch handpicked movie with comfort Book Now!!!</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Typography variant="h5" class="text-secondary">Search</Typography>
                        </Nav>
                        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                    </Container>
                </Navbar>
               
            <div className="grid">

                <Grid container spacing={4}>
                    {productList.map((Movies) => (
                        <Grid item key={Movies._id}>
                            <Paper className="imagecontainer">
                                <div >
                                <img className='image' src={Movies.movieUrl}  alt={Movies.movieName}/>
                                   
                                </div>
                               
                                   <Button variant="contained" id="button" onClick={()=> navigate("/booking")}>Book Now</Button>
                                   
                            </Paper>
                        </Grid>
                    ))}
                </Grid>


            </div>
        </>
    )
}
export default Product;