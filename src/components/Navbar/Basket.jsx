import { Button, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverFooter, PopoverHeader, PopoverTrigger, Portal } from '@chakra-ui/react'
import React from 'react'
import {BsBagFill} from "react-icons/bs"

const Basket = () => {
  return (
    <div>
        <Popover>
  <PopoverTrigger>
    <Button bg='transparent' mt='5px'   _hover='transparent' >Basket
    <p style={{marginLeft:"10px"}}><BsBagFill fontSize='18px' /></p>
    </Button>
  </PopoverTrigger>
  <Portal>
    <PopoverContent>
      <PopoverArrow />
      <PopoverHeader>Header</PopoverHeader>
      <PopoverBody>
        <Button colorScheme='blue'>Button</Button>
      </PopoverBody>
      <PopoverFooter>This is the footer</PopoverFooter>
    </PopoverContent>
  </Portal>
</Popover>
    </div>
  )
}

export default Basket