import { Button, Heading, Input, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsInstagram, BsTelephoneFill, BsTwitter } from 'react-icons/bs';
import { RiFacebookFill, RiMailFill, RiQuestionnaireFill } from 'react-icons/ri';

import styles from "./Footer.module.css"



const Footer = () => {
    const [subx, setsubx] = useState("");
    const [isit, setIsit]=useState(false);
    const handleChange=(e)=>{
        setsubx(e.target.value)
    }
    const handleSubs=()=>{
        if(subx===""){
            setIsit(true)
        }
        else{
            setIsit(false)
        }
    }
  return (
    <div className={styles.FooterContainer} >
        <div className={styles.bigbox} >
               <div className={styles.box1}>
                  <div >
                    <Stack>
                        <Heading as='h1' size='md'  >
                               Subscribe to our awesome emails.
                        </Heading>
                        <p style={{color:"gray"}} >Get our latest offers and news straight in your inbox.</p>
                        <div style={{marginTop:"30px"}}>
                        <Input className={styles.input} value={subx} onChange={handleChange} placeholder='Please enter an email address' bg='whitesmoke'  borderRadius='none' width='300px' size='lg' />
                        <Button onClick={handleSubs} bg='black' _hover='none' width='150px' borderRadius='none' color='white' size='lg' >Subscribe</Button>
                        </div>   
                    </Stack>
                    {isit?<p style={{color:"red"}} >Enter your email</p>:null}
                  </div>
                  <div>
                    <Stack>
                       <Heading as='h1' size='md'  >
                            Download our apps
                        </Heading>
                        <p style={{color:"gray"}} >Shop our products and others on-the-go.</p>
                        <div className={styles.apps} >
                            <div >
                                <img src="http://assets.stickpng.com/images/5a902db97f96951c82922874.png" alt="" />
                            </div>
                            <div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Get-it-on-google-play-badge.png" alt="" />
                            </div>
                        </div>
                    </Stack>
                  </div>
                 
               </div>
               <div className={styles.bottom_des} >
                     <div>
                        <ul>
                            <Heading textAlign='left' size='sm'>
                                Women
                            </Heading>
                            <li>Tops</li>
                            <li>Ethnicwear</li>
                            <li>Bottoms</li>
                            <li>Dresses & Jumpsuits</li>
                            <li>Winterwear</li>
                            <li>Lingerie</li>
                            <li>Nightwear</li>
                            <li>Sportswear</li>
                            <li>Beauty</li>
                            <li>Watches & Sunglasses</li>
                        </ul>
                     </div>
                     <div>
                     <ul>
                            <Heading textAlign='left' size='sm'>
                                Men
                            </Heading>
                            <li>Tops</li>
                            <li>Ethnicwear</li>
                            <li>Bottoms</li>
                            <li>Winterwear</li>
                            <li>Sportwear</li>
                            <li>Innerwear</li>
                            <li>Grooming</li>
                            <li>Watches</li>
                            <li>Sunglasses</li>
                        </ul>
                     </div>
                     <div>
                     <ul>
                            <Heading textAlign='left' size='sm'>
                                Kids
                            </Heading>
                            <li>Girls Clothing</li>
                            <li>Boys Clothing</li>
                            <li>Infants Girls</li>
                            <li>Winterwear</li>
                            <li>Add ons</li>
                            <li>The Teen Shop</li>
                        </ul>
                     </div>
                     <div>
                     <ul>
                            <Heading textAlign='left' size='sm'>
                                Shoes & bags
                            </Heading>
                            <li>Women</li>
                            <li>Men</li>
                            <li>Boys</li>
                            <li>Girls</li>
                            <li>Accessories</li>
                            <li>Men Accessories</li>
                            <li>Essential</li>
                        </ul>
                     </div>
                     <div>
                     <ul>
                            <Heading textAlign='left' size='sm'>
                                Beauty
                            </Heading>
                            <li>Makeup Eyes</li>
                            <li>Makeup Face</li>
                            <li>Makeup Lips</li>
                            <li>Makeup Nails</li>
                            <li>Perfumes</li>
                        </ul>
                     </div>
                     <div>
                       <ul>
                            <Heading textAlign='left' size='sm'>
                                Explore
                            </Heading>
                            <li>Online Offers</li>
                            <li>Store Offers</li>
                            <li>Online Gift Card</li>
                            <li>Stores Nearby</li>
                            <li>EDGE</li>
                            <li>Membership</li>
                            <li>Shop on</li>
                            <li>WhatsApp</li>
                            <li>Fashion VLOG</li>
                            <li>Join CIRCLEMAG</li>
                            <li>SBI Offers</li>
                            <li>Homecentre</li>
                        </ul>
                     </div>
                     <div>
                       <ul>
                            <Heading textAlign='left' size='sm'>
                                About
                            </Heading>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Take a Tour</li>
                            <li>Blog</li>
                            <li>Store Locator</li>
                            <li>Landmark Cares</li>
                        </ul>
                     </div>
                     <div>
                        <ul>
                            <Heading textAlign='left' size='sm'>
                                Help
                            </Heading>
                            <li>Contact us</li>
                            <li>Shipping</li>
                            <li>Returns Process</li>
                            <li>Returns Policy</li>
                            <li>Help Centre</li>
                        </ul>
                     </div>
                  </div>
                  <div className={styles.box3} >
                    <div>
                        <div style={{ border:"1px solid gainsboro", borderRadius:"50%",width:"60px",height:"60px", padding:"20px",marginTop:"10px"}} ><BsTelephoneFill fontSize='20px' /></div>
                        <div style={{textAlign:"left",margin:"10px 50px 0 10px",padding:"5px 0 0 0"}} >
                            <p style={{color:"gray" }} >Talk to us</p>
                            <p>1800-123-1555</p>
                        </div>
                        <div style={{border:"1px solid gainsboro",borderRadius:"50%",width:"60px",height:"60px", padding:"20px",marginTop:"10px"}} ><RiQuestionnaireFill fontSize='20px'/></div>
                        <div>
                        <div style={{ textAlign:"left",margin:"10px 50px 0 10px",padding:"5px 0 0 0"}} >
                            <p style={{color:"gray" }} >Help Center</p>
                            <p>help.lifestores.com</p>
                        </div>
                        </div>
                        <div style={{border:"1px solid gainsboro",borderRadius:"50%",width:"60px",height:"60px", padding:"20px",marginTop:"10px"}} ><RiMailFill fontSize='20px'/></div>
                        <div style={{textAlign:"left",margin:"10px 50px 0 10px",padding:"5px 0 0 0"}} >
                            <p style={{color:"gray" }} >Write to us</p>
                            <p>help@lifestores.com</p>
                        </div>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",padding:"20px 50px 0 100px"}} >
                            <div><RiFacebookFill fontSize='25px'/></div>
                            <div><BsTwitter fontSize='25px' /></div>
                            <div><BsInstagram fontSize='25px' /></div>
                    </div>
                    <div className={styles.box2_logo}>
                        <div>
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7rEtI7omf7mv7hu-ONxM_HfSMr5Q43-lESL3Uk0p374Z3F6Wbad29oY2QnTWphwuorc4&usqp=CAU" alt="logo" />
                        </div>
                          <div style={{textAlign:"left",margin:"10px 50px 0 10px",padding:"5px 0 0 0"}} >
                            <p style={{color:"gray" }} >© 2022 RNA Intellectual Property Limited.</p>
                            <p style={{color:"gray" }} >Terms & Conditions - Privacy Policy</p>
                        </div>
                     </div>

                  </div>
        </div>
    </div>
  )
}

export default Footer