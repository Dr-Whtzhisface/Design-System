import React, { useEffect, useState } from 'react';

const FigmaImage = ({ fileToken, apiToken }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);

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

        if (!response.ok) {
          setError('Error fetching Figma image');
          return;
        }

        const data = await response.json();
        setImageUrl(data.images[figmaFormat]);
      } catch (error) {
        setError('Error fetching Figma image: ' + error.message);
      }
    };

    fetchFigmaImage();
  }, [fileToken, apiToken]);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <p>Generated Figma Image:</p>
      {imageUrl ? (
        <div>
          <a href={imageUrl} target="_blank" rel="noopener noreferrer">
            View Figma Image
          </a>
          <br />
          <img src={imageUrl} alt="Figma Image" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FigmaImage;






