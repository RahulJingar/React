import React, { useState } from 'react';

export default function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('Celsius');
  const [converted, setConverted] = useState('');
  const [error, setError] = useState('');

  const convertTemperature = () => {
    const value = parseFloat(temperature);
    if (isNaN(value)) {
      setError('Please enter a valid input.');
      setConverted('');
      return;
    }

    let result;
    if (unit === 'Celsius') {
      result = (value * 9) / 5 + 32;
      setConverted(`${result.toFixed(2)} °F`);
    } else {
      result = ((value - 32) * 5) / 9;
      setConverted(`${result.toFixed(2)} °C`);
    }
    setError('');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 px-4">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-white/30">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6 tracking-wide drop-shadow">
          🌡️ Temperature Converter
        </h2>

        <input
          type="text"
          placeholder="Enter temperature"
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)}
          className="w-full px-4 py-3 mb-4 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-500"
        />

        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="w-full px-4 py-3 mb-4 text-lg border border-gray-300 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
        </select>

        {error && <p className="text-red-600 text-sm mb-4 text-center">{error}</p>}

        <button
          onClick={convertTemperature}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-lg rounded-xl font-semibold transition duration-200 shadow-md"
        >
          Convert
        </button>

        {converted && (
          <p className="mt-6 text-center text-green-700 text-xl font-bold shadow-sm">
            ✅ Converted: {converted}
          </p>
        )}
      </div>
    </div>
  );
}
