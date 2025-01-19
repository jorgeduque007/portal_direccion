import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Media: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-16 bg-[#F7C95F]">
    <div className="w-[960px] grid grid-cols-3 gap-4">
      {/* Card 1 */}
      <div className="bg-white rounded-lg border border-dashed border-[#E0643C]">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#F3C049] rounded-t-lg">
          <FontAwesomeIcon icon={faTwitter} className="text-black text-xl" />
          <span className="text-black font-bold text-sm">Post de @Soysustitucion</span>
        </div>
        <div className="h-[200px] bg-[#D9D9D9] rounded-b-lg"></div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg border border-dashed border-[#E0643C]">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#F3C049] rounded-t-lg">
          <FontAwesomeIcon icon={faYoutube} className="text-black text-xl" />
          <span className="text-black font-bold text-sm">Historias del PNIS</span>
        </div>
        <div className="h-[200px] bg-[#D9D9D9] rounded-b-lg"></div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg border border-dashed border-[#E0643C]">
        <div className="flex items-center gap-2 px-4 py-2 bg-[#F3C049] rounded-t-lg">
          <FontAwesomeIcon icon={faWhatsapp} className="text-black text-xl" />
          <span className="text-black font-bold text-sm">Canal de WTP</span>
        </div>
        <div className="h-[200px] bg-[#D9D9D9] rounded-b-lg"></div>
      </div>
    </div>
  </div>
  );
};

export default Media;