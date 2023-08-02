import Nav from "./components/Nav"
import './App.css'
import { ChakraProvider } from "@chakra-ui/react";

function App() {

  return (
    <>
    <ChakraProvider>
      <Nav/>
    </ChakraProvider>
     
    </>
  )
}

export default App
