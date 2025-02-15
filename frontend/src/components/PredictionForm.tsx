import React, { useState } from "react";

const PredictionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    season: 0, // 0 = Yala, 1 = Maha
    rainfall: "",
    min_rh: "",
    max_rh: "",
    min_temp: "",
    max_temp: "",
    evaporation: "",
    sunshine: "",
    morning_wind: "",
    evening_wind: "",
  });

  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: parseFloat(e.target.value) || "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", { // 🔥 Calls Flask API directly
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to get prediction. Please try again.");
      }

      const data = await response.json();
      setPrediction(data.predicted_yield);
    } catch (error) {
      setError("Error fetching prediction.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">🌾 Paddy Yield Prediction</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Season</label>
          <select name="season" className="mt-1 p-2 w-full border rounded-md" onChange={handleChange}>
            <option value="0">Yala</option>
            <option value="1">Maha</option>
          </select>
        </div>

        {["rainfall", "min_rh", "max_rh", "min_temp", "max_temp", "evaporation", "sunshine", "morning_wind", "evening_wind"]
          .map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 capitalize">
                {field.replace("_", " ")} 
              </label>
              <input 
                type="number"
                name={field}
                placeholder={`Enter ${field.replace("_", " ")}`}
                className="mt-1 p-2 w-full border rounded-md"
                onChange={handleChange}
              />
            </div>
          ))}

        <button 
          type="submit" 
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
          disabled={loading}
        >
          {loading ? "Predicting..." : "Get Prediction"}
        </button>
      </form>

      {prediction !== null && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md text-center">
          <h3 className="text-lg font-semibold text-gray-800">Predicted Paddy Yield</h3>
          <p className="text-2xl font-bold text-green-600">{prediction} t/ha</p>
        </div>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-600 text-center rounded-md">
          {error}
        </div>
      )}
    </div>
  );
};

export default PredictionForm;
