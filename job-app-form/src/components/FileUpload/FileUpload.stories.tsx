import { useState } from 'react';
import { FileUpload } from './Fileupload';

export default {
    title: 'Components/FileUpload',
    component: FileUpload,
};

export const Default = () => {
    const [, setFile] = useState<File | null>(null);
    return <FileUpload label="Upload File" onFileSelect={setFile} />;
};
