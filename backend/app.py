from flask import Flask, request, jsonify
import pickle
import numpy as np
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Load trained model
try:
    with open("paddy_yield_model.pkl", "rb") as f:
        model = pickle.load(f)
    print("✅ Model loaded successfully!")
except FileNotFoundError:
    print("❌ Error: Model file 'paddy_yield_model.pkl' not found.")
    model = None

# Load scaler if available
try:
    with open("scaler.pkl", "rb") as f:
        scaler = pickle.load(f)
    print("✅ Scaler loaded successfully!")
except FileNotFoundError:
    print("⚠️ Warning: Scaler file 'scaler.pkl' not found.")
    scaler = None

@app.route('/')
def home():
    return "🚀 Paddy Yield Prediction API is Running!"

@app.route('/predict', methods=['POST'])
def predict():
    try:
        if model is None:
            return jsonify({"error": "Model not loaded."}), 500

        data = request.get_json()
        input_features = np.array([[data['season'], data['rainfall'], data['min_rh'], data['max_rh'],
                                    data['min_temp'], data['max_temp'], data['evaporation'],
                                    data['sunshine'], data['morning_wind'], data['evening_wind']]])

        if scaler:
            input_features = scaler.transform(input_features)

        predicted_yield = model.predict(input_features)[0]
        return jsonify({"predicted_yield": round(predicted_yield, 2)})

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(port=5000)
