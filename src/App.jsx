import Nav from "./components/Nav"
import './App.css'
import { ChakraProvider, Text } from "@chakra-ui/react";


function App() {

  return (
    <>
    <ChakraProvider>
      <Nav/>
      <Text fontSize='45' fontWeight='800'>Search properties to rent</Text>
      
    </ChakraProvider>
     
    </>
  )
}

export default App
