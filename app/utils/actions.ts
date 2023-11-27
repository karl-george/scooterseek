'use server';

export const fetchScooters = async () => {
  const response = await fetch(
    'https://platform.tier-services.io/v1/vehicle?lat=48.1&lng=16.3&radius=5000',
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': process.env.TIER_SERVICES_API_KEY || '',
      },
    }
  );

  const data = await response.json();

  return data;
};
