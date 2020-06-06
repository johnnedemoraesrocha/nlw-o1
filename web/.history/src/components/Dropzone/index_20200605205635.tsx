import React, {useCallback, useState } from 'react'
import {useDropzone} from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';  

import './styles.css';

interface Props {
  onFileUpload: (file: File) => void;
}

const Dropzone: React.FC<Props> = () => {

  const [selectedFileUrl, setSeletedFileUrl] = useState('');

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log(acceptedFiles);
    const file = acceptedFiles[0];
    const fileUrl = URL.createObjectURL(file);

    setSeletedFileUrl(fileUrl);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: 'image/*'})

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
            {
              selectedFileUrl
              ? <img src={selectedFileUrl} />
              : (
                <p>
              <FiUpload />
              Imagem do estabeleciomento
            </p>
              )
            }
            
      
    </div>
  )
}


export default Dropzone;
