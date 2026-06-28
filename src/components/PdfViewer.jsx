import { useSearchParams } from 'react-router-dom';

export default function PdfViewer() {
  const [searchParams] = useSearchParams();
  const fileUrl = searchParams.get('file');

  if (!fileUrl) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center text-white/50">
        No document specified.
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-[#323639] animate-in fade-in duration-500">
      <iframe
        src={`${fileUrl}#view=FitH`}
        className="w-full h-full border-none"
        title="Document Viewer"
      >
        <p className="text-white p-4 text-center">Your browser does not support inline PDFs. Please download the document to view it.</p>
      </iframe>
    </div>
  );
}
