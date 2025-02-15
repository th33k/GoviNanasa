import React from "react";
import PredictionForm from "../components/PredictionForm"; // Adjust the path if needed

const PredictionPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          🌾 Paddy Yield Prediction
        </h1>
        <PredictionForm />
      </div>
    </div>
  );
};

export default PredictionPage;
