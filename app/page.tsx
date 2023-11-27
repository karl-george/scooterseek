import { ScooterProp } from './components/ScooterCard';
import { fetchScooters } from './utils/actions';

export default async function Home() {
  const { data } = await fetchScooters();

  return (
    <main>
      {data.map((scooter: ScooterProp) => (
        <div>{scooter.id}</div>
      ))}
    </main>
  );
}

// scooter.attributes =
// {
//   state: 'ACTIVE',
//   lastLocationUpdate: '2023-11-27T10:40:58Z',
//   lastStateChange: '2023-11-13T09:09:01Z',
//   batteryLevel: 55,
//   currentRangeMeters: 22000,
//   lat: 48.078828,
//   lng: 16.279638,
//   maxSpeed: 20,
//   zoneId: 'MOEDLING',
//   code: 128208,
//   iotVendor: 'okai',
//   licencePlate: '01252',
//   isRentable: true,
//   vehicleType: 'escooter',
//   hasHelmetBox: true,
//   hasHelmet: false
// }
