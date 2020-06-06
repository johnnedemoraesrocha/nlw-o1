import React, {useCallback, useState } from 'react'
import {useDropzone} from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';  

import './styles.css';

const Dropzone = () => {

  const [selectedFileUrl, setSeletedFileUrl] = useState('')

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: 'image/*'})

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
 
            <p>
              <FiUpload />
              Imagem do estabeleciomento
            </p>
      
    </div>
  )
}


export default Dropzone;
