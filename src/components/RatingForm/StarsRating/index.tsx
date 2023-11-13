// components/StarsRating.js

import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

export const StarsRating = () => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const handleStarClick = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleStarHover = (rating: number) => {
    setSelectedRating(rating);
  };

  const handleStarLeave = () => {
    if (selectedRating === null) {
      setSelectedRating(null);
    }
  };

  const stars = [1, 2, 3, 4, 5];

  return (
    <Box textAlign="center">
      <Text>Avalie o filme:</Text>
      <Box>
        {stars.map((rating) => (
          <Text
            key={rating}
            fontSize="2xl"
            margin="0 0.1em"
            cursor="pointer"
            _hover={{ color: 'orange' }}
            color={rating <= (selectedRating || 0) ? 'orange' : 'gray.500'}
            onClick={() => handleStarClick(rating)}
            onMouseOver={() => handleStarHover(rating)}
            onMouseLeave={handleStarLeave}
            display="inline-block"
          >
            &#9733;
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default StarsRating;
