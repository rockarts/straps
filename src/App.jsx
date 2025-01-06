// src/App.jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [exercises, setExercises] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Determine the correct path based on the environment
    const basePath = import.meta.env.DEV
      ? '' // Local development
      : '/straps'; // Your GitHub repository name

    const jsonPath = `${basePath}/exercises.json`;
    console.log('Fetching from:', jsonPath);

    fetch(jsonPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Loaded exercises:', data);
        const sortedExercises = data.sort((a, b) => a.name.localeCompare(b.name));
        setExercises(sortedExercises);
      })
      .catch(error => {
        console.error('Error loading exercises:', error);
        setError(error.message);
      });
  }, []);

  // Show loading state
  if (exercises.length === 0 && !error) {
    return <div className="p-4">Loading exercises...</div>;
  }

  // Show error if there is one
  if (error) {
    return <div className="p-4 text-red-600">Error loading exercises: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Straps Sensei Exercises</h1>

      {/* Simple list of exercises */}
      <div className="space-y-4">
        {exercises.map((exercise) => (
          <div key={exercise.slug} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{exercise.name}</h2>
            {exercise.youtube_id && (
              <div className="mt-2">
                <a
                  href={`https://www.youtube.com/watch?v=${exercise.youtube_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Watch Video
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;