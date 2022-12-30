
import './App.css';
import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import TestComponent from './Components/TestComponent'



function App() {
  return (
    <ChakraProvider>    
      <TestComponent/>
    </ChakraProvider>
  );
}

export default App;
