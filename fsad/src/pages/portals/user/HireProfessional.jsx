import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const HireProfessional = () => {
  const { id } = useParams(); // This grabs the ID from the URL (/hire/1)
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleConfirmHire = () => {
    setIsProcessing(true);
    
    // Simulate a booking delay
    setTimeout(() => {
      alert(`Success! You have officially hired Professional #${id}.`);
      navigate('/user-portal');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">Booking Summary</h2>
        
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-500">Professional ID:</span>
            <span className="font-mono font-bold text-blue-600">#{id}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-500">Service Estimate:</span>
            <span className="font-bold text-gray-800">$50.00 / hr</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Booking Fee:</span>
            <span className="font-bold text-gray-800">$5.00</span>
          </div>

          <div className="pt-4 border-t flex justify-between items-center text-xl font-extrabold text-green-600">
            <span>Total Due Now:</span>
            <span>$55.00</span>
          </div>
        </div>

        <div className="mt-8 space-y-3">
          <button 
            onClick={handleConfirmHire}
            disabled={isProcessing}
            className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${
              isProcessing ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 active:scale-95'
            }`}
          >
            {isProcessing ? 'Confirming with Professional...' : 'Confirm Hire'}
          </button>
          
          <button 
            onClick={() => navigate('/user-portal')}
            className="w-full py-2 text-gray-500 font-medium hover:text-gray-700 transition"
          >
            Cancel and Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default HireProfessional;