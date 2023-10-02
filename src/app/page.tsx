'use client'

import React, { useState } from 'react';
import { EmailIcon } from '../assets/Icons';
import { TextInput } from './components/custom/TextInput';


/**
 * @brief Textinputs demo page
 * custom input implementation examples
 * 
 */
export default function Home() {

  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div>

      <h1 className=' text-white text-2xl'>Small</h1>
      <TextInput.Root
        large="sm"
        variant="default"
      >
        <TextInput.Icon 
          icon={< EmailIcon />} 
          large="sm" 
          className={`fill-gray-3`} 
        />
        <TextInput.Input 
          type={isPasswordVisible ? 'text' : 'password'}
          placeholder="Digite seu email" 
          large='sm'
        />
      </TextInput.Root>

      <br />
      <br />

      <h1 className=' text-white text-2xl'>Medium</h1>
      <TextInput.Root
        large="md"
        variant="default"
      >
        <TextInput.Icon 
          icon={< EmailIcon />} 
          large="md" 
          className={`fill-gray-3`} 
        />
        <TextInput.Input 
          type={isPasswordVisible ? 'text' : 'password'}
          placeholder="Digite seu email" 
          large='md'
        />
      </TextInput.Root>

      <br />
      <br />

      <h1 className=' text-white text-2xl'>Large</h1>
      <TextInput.Root
        large="lg"
        variant="default"
      >
        <TextInput.Icon 
          icon={< EmailIcon />} 
          large="lg" 
          className={`fill-gray-3`} 
        />
        <TextInput.Input 
          type={isPasswordVisible ? 'text' : 'password'}
          placeholder="Digite seu email" 
          large='lg'
        />
      </TextInput.Root>

      <br />
      <br />

      <h1 className=' text-white text-2xl'>Error</h1>
      <TextInput.Root
        large="md"
        error
        variant="default"
      >
        <TextInput.Icon 
          icon={< EmailIcon />} 
          large="md" 
          className={`fill-gray-3`} 
        />
        <TextInput.Input 
          type={isPasswordVisible ? 'text' : 'password'}
          large='md'
          placeholder="Digite seu email" 
        />
        <TextInput.Actions>
          <TextInput.Status error large='md'/>
        </TextInput.Actions>
      </TextInput.Root>

      <br />
      <br />

      <h1 className=' text-white text-2xl'>Success</h1>
      <TextInput.Root
        large="md"
        variant="default"
      >
        <TextInput.Icon 
          icon={< EmailIcon />} 
          large="md" 
          className={`fill-gray-3`} 
        />
        <TextInput.Input 
          type={isPasswordVisible ? 'text' : 'password'}
          large='md'
          placeholder="Digite seu email" 
        />
        <TextInput.Actions>
          <TextInput.Status large='md'/>
        </TextInput.Actions>
      </TextInput.Root>

      <br />
      <br />

      <h1 className=' text-white text-2xl'>Password Action</h1>
      <TextInput.Root
        large="md"
        variant="default"
      >
        <TextInput.Icon 
          icon={< EmailIcon />} 
          large="md" 
          className={`fill-gray-3`} 
        />
        <TextInput.Input 
          type={isPasswordVisible ? 'text' : 'password'}
          large='md'
          placeholder="Digite seu email" 
        />
        <TextInput.Actions>
          <TextInput.PasswordActions 
            isPasswordHidden={isPasswordVisible}
            onClick={togglePasswordVisibility}
            large='md'
          />
          <TextInput.Status large='md'/>
        </TextInput.Actions>
      </TextInput.Root>
    </div>


  )
}
