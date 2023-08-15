import React, { useEffect, useState } from 'react';

const FigmaImage = ({ figmaNodeId, figmaScale, figmaFormat, figmaApiToken }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchFigmaImage = async () => {
      try {
        const response = await fetch(`https://api.figma.com/v1/images/${figmaNodeId}?scale=${figmaScale}&format=${figmaFormat}`, {
          headers: {
            'X-FIGMA-TOKEN': figmaApiToken
          }
        });

        const data = await response.json();
        setImageUrl(data.images[figmaFormat]);
      } catch (error) {
        console.error('Error fetching Figma image:', error);
      }
    };

    fetchFigmaImage();
  }, [figmaNodeId, figmaScale, figmaFormat, figmaApiToken]);

  return <img src={imageUrl} alt="Figma Image" />;
};

export default FigmaImage;
