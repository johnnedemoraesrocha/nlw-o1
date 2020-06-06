import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone';

import './styles.css';

const Dropzone = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Imagem do estabeleciomento</p>
      }
    </div>
  )
}


export default Dropzone;
