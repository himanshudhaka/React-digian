import React from 'react'
import client from '../Images/client.jpg'
import Services from './Services'
import About from './About'
import Form from './Form'
import HeroPage from './HeroPage'
import CaseStudy from './CaseStudy'

export default function Home() {
   
    return (
        <>
           
        <HeroPage />   
        <Services />
        <About />
        <CaseStudy />

        

        <div className="container">
            <h1>Testimonials</h1>
            <div className="container testimonials flex flex-column">
                <img src={client} alt="not found" />
                <h2>MOROJINK</h2>
                <span>&#8216;&#8216;</span>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus aperiam obcaecati magnam est ea,
                    perferendis totam asperiores neque hic nam, vitae fugit molestias veniam molestiae quia vel.
                    Adipisci, eveniet commodi!</p>
            </div>
        </div>

        <Form />


        </>
    )
}
