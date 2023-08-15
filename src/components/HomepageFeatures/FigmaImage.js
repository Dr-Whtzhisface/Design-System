import React, { useEffect, useState } from 'react';

const FigmaImage = ({ fileToken, apiToken }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const figmaNodeId = '1:1045'; // Replace with your Figma Node ID
    const figmaScale = '1';
    const figmaFormat = 'png';

    const fetchFigmaImage = async () => {
      try {
        const response = await fetch(`https://api.figma.com/v1/images/${figmaNodeId}?scale=${figmaScale}&format=${figmaFormat}`, {
          headers: {
            'X-FIGMA-TOKEN': apiToken,
            'X-FIGMA-FILE-TOKEN': fileToken
          }
        });

        const data = await response.json();
        setImageUrl(data.images[figmaFormat]);
      } catch (error) {
        console.error('Error fetching Figma image:', error);
      }
    };

    fetchFigmaImage();
  }, [fileToken, apiToken]);

  return (
    <div>
      <p>Generated Figma Image:</p>
      <img src={imageUrl} alt="Figma Image" />
    </div>
  );
};

export default FigmaImage;




