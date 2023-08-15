import React, { useEffect, useState } from 'react';

const FigmaImage = ({ fileToken, apiToken }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const figmaNodeId = '1:1045'; // Replace with the desired node ID
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

        if (response.ok) {
          const data = await response.json();
          setImageUrl(data.images[figmaNodeId]);
        }
      } catch (error) {
        console.error('Error fetching Figma image:', error);
      }
    };

    fetchFigmaImage();
  }, [fileToken, apiToken]);

  return (
    <div>
      {imageUrl ? (
        <iframe
          src={imageUrl}
          width="600"
          height="400"
          frameBorder="0"
          allowFullScreen
          title="Figma Image"
        ></iframe>
      ) : (
        <p>Loading Figma image...</p>
      )}
    </div>
  );
};

export default FigmaImage;

