import React from 'react';

export default function Countdown({ countdown }) {
  const { days, hours, minutes, seconds } = countdown;

  const units = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto my-6">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl glass-card border border-lavender/20 backdrop-blur-md shadow-glass"
        >
          <span className="font-serif text-2xl sm:text-4xl font-semibold text-white tracking-wider">
            {String(unit.value).padStart(2, '0')}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-lavender-light/70 mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
