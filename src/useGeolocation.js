import { useState, useEffect } from "react";

function useGeolocation() {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    function getPosition() {
      if (!navigator.geolocation) {
        setError("Your browser does not support geolocation");
        return;
      }

      setIsLoading(true);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
          setIsLoading(false);
        },
        (error) => {
          setError(error.message);
          setIsLoading(false);
        }
      );
    }

    getPosition();
  }, []);

  return { isLoading, position, error };
}

export default useGeolocation;
