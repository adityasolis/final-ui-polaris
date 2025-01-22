import { useState, useEffect } from 'react';
import axios from 'axios';

interface LocationData {
    country_calling_code: string;
}

const useGeoLocation = () => {
    const [locationData, setLocationData] = useState<LocationData | null>(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        setLocationData(response.data);
      } catch (error) {
        console.error('Error fetching geolocation data:', error);
      }
    };

    getLocation();
  }, []);

  return locationData;
};

export default useGeoLocation;