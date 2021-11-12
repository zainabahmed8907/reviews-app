import React, { useState } from 'react'
import {FaChevronRight, FaChevronLeft, FaQuoteRight } from "react-icons/fa"
import people from './data';

function Review() {
     const[index,setindex]=useState(0);
     const {name, job,image,text}=people[index];

     const checkNumber=(number)=>{
          if(number>people.length-1)
          {
               return 0;
          }
          if(number<0)
          {
               return people.length-1;

          }
     }
     const prevPerson =()=>{
          setindex(()=>{
               let newIndex=index-1;
               return checkNumber[newIndex];

          })
     }
     const nextPerson =()=>{
          setindex(()=>{
               let newIndex=index+1;
               return checkNumber[newIndex];

          })
     }
     return (
          <div>
              <article className='review'>

                   <div className='img-container'>
                        <img src={image} className='person-img img-fluid' alt=''/>

                        <span className='quote-icon'>
                             <FaQuoteRight/>

                        </span>
                   </div>

                    <h4 className='author'>{name}</h4>
                    <p className='job'>{job}</p>
                    <p className='info'>{text}</p>
                
                    <div className='btn-container'>
                         <button className='prev-btn' onClick={prevPerson}>
                                   <FaChevronLeft/>


                         </button>
                         <button className='next-btn' onClick={nextPerson}>
                              <FaChevronRight/>
                         </button>
                         <button className='random-btn'>
                                 Give your reviews


                         </button>
                    </div>


              </article>
               
          </div>
     )
}

export default Review
