import React from 'react';

export const CoffeeCard: React.FC<{
  title: string;
  description: string;
  date: string;
}> = ({ title, description, date }) => {
  return (
    <div className="border border-black">
      <h1 className="text-5xl text-primary">{title}</h1>
      <p className="mt-2 text-sm text-grey">{description}</p>
      <p className="mt-2 text-sm text-grey">{date}</p>
    </div>
  );
};
