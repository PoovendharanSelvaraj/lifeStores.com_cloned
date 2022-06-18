import { Button, FormControl,Heading, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import React from 'react';
import styles from "./Navbar.module.css";

function Signup() {
    const [next ,setNext]=useState({
      mobile:true,
      otp:false,
      email:false,
      name:false
    })
   
    const [Sign, setSign] = useState({
      mobile:"",
      email:"",
      name:"",
    })

    const handleName=(e)=>{
      const {name,value}=e.target;
         setSign({
          ...Sign,
          [name]:value,
         })
    }
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    const handleClose=(e)=>{
      e.preventDefault();
      onClose();
      setNext({mobile:false,otp:false,email:false,name:true})
      
    }
    if(next.name){
       return (
       <div>
        <Button className={styles.signup}  bg='transparent' _hover='trasparent'>hi, {Sign.name}</Button>
          
       </div>
       )
    }
 
    if(next.email){
      return (
        <div>
        <Button className={styles.signup}  bg='transparent' _hover='trasparent'  onClick={onOpen}>Sign Up - Sign In</Button>
            
        <Modal
          size='3xl'
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
         
          isCentered
        >        
        <ModalOverlay />
        <ModalContent  mt='200px' padding='50px 100px 50px 100px' borderRadius='0'  >
          <ModalHeader>
            <Heading>
            Link your account
            </Heading>
          <p style={{color:"gray",fontSize:"small",}} >Existing User please login to your account to link your account to your phone number. it's one life time process</p>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel></FormLabel>
              <div style={{display:"flex"}}>
              <Input borderRadius='none' border='1px solid black' ref={initialRef} placeholder='Your email' />
             </div>
             <div style={{marginTop:'20px'}}>
             <Heading>
              How do we address you?
            </Heading>
             <div >
             <Input borderRadius='none' type='text' margin='10px 20px' name='name' value={Sign.name} onChange={handleName}  width="150px" border='1px solid black' ref={finalRef} placeholder='first name' />
            <Input type='text' borderRadius='none' width='150px' border='1px solid black' ref={finalRef} placeholder='last name' />
             </div>
             <div style={{display:'flex'}} >
             <p style={{color:"gray",fontSize:"small"}} >By creating your account you agree to our </p>
             <a style={{color:"rgb(251,183,98)",textDecoration:"none",marginLeft:"10px",fontSize:"small"}} href="#terms" >Terms and Conditions</a>
             </div>
             </div>
             <ModalFooter>
              <Button onClick={handleClose}  padding='30px 70px 30px 70px' borderRadius='none' _hover='none'   color='white' fontSize='lg' bg='rgb(251,183,98)' mr={3}>
                Proceed
              </Button>
          </ModalFooter>
            </FormControl>
           
          </ModalBody>
         
        </ModalContent>
      </Modal>
        </div>
      )
    }



    return (
      <div>
        <Button className={styles.signup}  bg='transparent' _hover='trasparent'  onClick={onOpen}>Sign Up - Sign In</Button>
        <Modal
          size='3xl'
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          isCentered
        >
          <ModalOverlay  />
          <ModalContent  mt='200px' padding='50px 100px 50px 100px' borderRadius='0'  >
          
            <ModalHeader>
              <Heading fontWeight='500' >Sign Up & Sign In</Heading>
              <p style={{color:"gray",fontSize:"small"}} >Enjoy the convenience of a single account across all participating brands</p>
            </ModalHeader>
            <ModalCloseButton />
           {next.mobile? <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Mobile Number</FormLabel>
                <div style={{display:"flex"}}>
                <Button bg='white' border='1px solid black' borderRadius='none' disabled >+91</Button>
                <Input borderRadius='none' border='1px solid black' ref={initialRef} placeholder='Enter Your Mobile Number' />
               </div>
              </FormControl>
               <div style={{display:'flex'}} >
               <p style={{color:"gray",fontSize:"small"}} >By creating your account you agree to our </p>
               <a style={{color:"rgb(251,183,98)",textDecoration:"none",marginLeft:"10px",fontSize:"small"}} href="#terms" >Terms and Conditions</a>
               </div>
           
            </ModalBody>: 
            <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Verify OTP</FormLabel>
              <div style={{display:"flex"}}>
              <Input borderRadius='none' border='1px solid black' ref={initialRef} placeholder='Enter OTP number' />
             </div>
            </FormControl>
             <div style={{display:'flex'}} >
             <p style={{color:"gray",fontSize:"small"}} >By creating your account you agree to our </p>
             <a style={{color:"rgb(251,183,98)",textDecoration:"none",marginLeft:"10px",fontSize:"small"}} href="#terms" >Terms and Conditions</a>
             </div>
          </ModalBody>
            }
            
            <ModalFooter>
              {next.mobile?<Button onClick={()=>setNext(!next.mobile)} padding='30px 70px 30px 70px' borderRadius='none' _hover='none'   color='white' fontSize='lg' bg='rgb(251,183,98)' mr={3}>
                Continue
              </Button>:<Button onClick={()=>{ setNext({mobile:false,otp:false,email:true})}} padding='30px 70px 30px 70px' borderRadius='none' _hover='none'   color='white' fontSize='lg' bg='rgb(251,183,98)' mr={3}>
                Verify
              </Button>}
              {/* <Button onClick={onClose}>Cancel</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
  }

export default Signup;