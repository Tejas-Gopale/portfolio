// ResumeViewer.js
import React, { useEffect, useRef } from 'react';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';
import "./ResumeViewerStyle.css";


// Set the workerSrc to the correct path
// Make sure to match the version you installed
GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js`; // Use the same version as installed

const ResumeViewer = () => {
  const canvasRef = useRef(null);
  const RESUME_PDF = "/FullStackDeveloperResume.pdf"; // Ensure your PDF is in the public folder

  useEffect(() => {
    const loadPdf = async () => {
      const loadingTask = getDocument(RESUME_PDF); // Use getDocument directly
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 1 });
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      await page.render(renderContext).promise;
    };

    loadPdf();
  }, [RESUME_PDF]);

  return (
    <div>
        <div className='resume'>
      <canvas ref={canvasRef} />
    </div>
   
    </div>
  );
};

export default ResumeViewer;