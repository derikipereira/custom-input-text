import React from 'react';
import CustomTextInput from './components/CustomTextInput';
import { EmailIcon } from '../assets/Icons';


/**
 * @brief Textinputs demo page
 * custom input implementation examples
 * 
 */
export default function Home() {

  return (
    <div>

      <h1 className=' text-white text-2xl'>Small</h1>
      <CustomTextInput
        icon={< EmailIcon />}
        large="sm"
        variant="default"
        placeholder="Digite seu email"
      />

      <br />
      <br />

      <h1 className=' text-white text-2xl'>Medium</h1>
      <CustomTextInput
        icon={< EmailIcon />}
        large="md"
        variant="default"
        placeholder="Digite seu email"
      />

      <br />
      <br />

      <h1 className=' text-white text-2xl'>Large</h1>
      <CustomTextInput
        icon={< EmailIcon />}
        large="lg"
        variant="default"
        placeholder="Digite seu email"
      />

      <br />
      <br />

      <h1 className=' text-white text-2xl'>Error</h1>
      <CustomTextInput
        icon={< EmailIcon />}
        error
        showStatus
        large="md"
        variant="default"
        placeholder="Digite seu email"
      />

      <br />
      <br />

      <h1 className=' text-white text-2xl'>Success</h1>
      <CustomTextInput
        icon={< EmailIcon />}
        showStatus
        large="md"
        variant="default"
        placeholder="Digite seu email"
      />

      <br />
      <br />

      <h1 className=' text-white text-2xl'>Password Action</h1>
      <CustomTextInput
        icon={< EmailIcon />}
        showPasswordAction
        large="md"
        variant="default"
        placeholder="Digite seu email"
      />
    </div>


  )
}
