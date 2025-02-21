import { useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/modelStyle.css";

function ModelOptionsPage() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [predictionResult, setPredictionResult] = useState("");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(file);
    }
  };

  const handleAnalyzeImage = async () => {
    if (!uploadedImage) {
      alert("Please upload an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", uploadedImage);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      setPredictionResult(data.prediction);
    } catch (error) {
      console.error("Error analyzing image:", error);
      setPredictionResult("Error occurred while processing.");
    }
  };

  return (
    <div className="model-options-container">
      {/* Page Header */}
      <header className="header">
        <h1>AI Tuberculosis Detection</h1>
        <p>Upload a chest X-ray image for AI-based TB analysis.</p>
      </header>

      {/* Main Content */}
      <div className="model-content">
        {/* Left Section: Image Upload */}
        <div className="left-section">
          <div className="option-card">
            <h2>Upload an Image</h2>
            <input type="file" accept="image/*" onChange={handleFileUpload} />
            {uploadedImage && (
              <img src={URL.createObjectURL(uploadedImage)} alt="Uploaded Preview" className="uploaded-image" />
            )}
          </div>
        </div>

        {/* Right Section: Model Info & Actions */}
        <div className="right-section">
          <div className="option-card model-info">
            <h2>Model Information</h2>
            <p>✅ Disease: Tuberculosis Detection</p>
            <p>✅ Image Format: JPEG/PNG, Max size 1MB</p>
            <p>⚡ AI-powered fast and reliable analysis</p>
          </div>

          <div className="buttons">
            <Link to="/">
              <button className="secondary-btn">Back to Home</button>
            </Link>
            {uploadedImage && (
              <button className="primary-btn" onClick={handleAnalyzeImage}>Analyze Image</button>
            )}
          </div>

          {/* Display Prediction Result */}
          {predictionResult && (
            <div className="result-card">
              <h2>Prediction Result</h2>
              <p>{predictionResult}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ModelOptionsPage;
