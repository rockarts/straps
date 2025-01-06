import React from 'react';

const ExerciseCard = ({ exercise, onClick }) => {
    return (
        <div
            className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onClick(exercise)}
        >
            {exercise.youtube_id && (
                <div className="relative pb-[56.25%] h-0">
                    <img
                        src={`https://img.youtube.com/vi/${exercise.youtube_id}/hqdefault.jpg`}
                        alt={exercise.name}
                        className="absolute h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
                        </div>
                    </div>
                </div>
            )}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{exercise.name}</h3>
            </div>
        </div>
    );
};

export default ExerciseCard;