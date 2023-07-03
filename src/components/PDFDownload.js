import { useEffect } from 'react';

const PDFDownload = ({href}) => {
  useEffect(() => {
    const downloadPDF = () => {
      const link = document.createElement('a');
      link.href = href;
      link.click();
    };

    downloadPDF();
  }, [href]);

  return null;
};

export default PDFDownload;
