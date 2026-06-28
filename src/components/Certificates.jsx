import SectionHeading from './SectionHeading';
import AnimatedList from './AnimatedList';
import { assetUrl } from '../data/portfolioData';

export default function Certificates() {
  const certificateData = [
    { title: 'Laravel Certification', file: 'Laravel.pdf' },
    { title: 'C++ Certification', file: 'c++.pdf' },
    { title: 'JavaScript Certification', file: 'js.pdf' },
    { title: 'Python Certification', file: 'python.pdf' },
    { title: 'Unix Certification', file: 'unix.pdf' },
  ];

  const handleCertificateSelect = (item, index) => {
    const cert = certificateData[index];
    if (cert && cert.file) {
      window.open(`/view-pdf?file=${encodeURIComponent(assetUrl(`certificat/${cert.file}`))}`, '_blank');
    }
  };

  return (
    <div id="certificates" className="w-full">
      <SectionHeading
        title="Certifications"
        subtitle="Continuous learning and professional credentials"
      />
      
      <div className="flex justify-center mt-8 w-full">
        <AnimatedList
          items={certificateData.map(c => c.title)}
          onItemSelect={handleCertificateSelect}
          showGradients={true}
          enableArrowNavigation={true}
          displayScrollbar={true}
          className="w-full"
        />
      </div>
    </div>
  );
}
