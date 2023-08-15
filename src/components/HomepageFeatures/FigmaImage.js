import React, { useEffect, useState } from 'react';

const FigmaImage = ({ fileToken, apiToken }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const figmaFileKey = 'your_file_key'; // Replace with your Figma file key
    const figmaNodeId = '1:1045'; // Replace with the desired node ID
    const figmaScale = '1';
    const figmaFormat = 'png';

    const fetchFigmaImage = async () => {
      try {
        // Fetch file information to get the file key
        const fileResponse = await fetch(`https://api.figma.com/v1/files/${figmaFileKey}`, {
          headers: {
            'X-FIGMA-TOKEN': apiToken,
          },
        });

        if (!fileResponse.ok) {
          setError('Error fetching Figma file information');
          return;
        }

        const fileData = await fileResponse.json();
        const fileId = fileData.id;

        // Fetch specific image using Get Image endpoint
        const imageResponse = await fetch(`https://api.figma.com/v1/images/${fileId}?ids=${figmaNodeId}&scale=${figmaScale}&format=${figmaFormat}`, {
          headers: {
            'X-FIGMA-TOKEN': apiToken,
          },
        });

        if (!imageResponse.ok) {
          setError('Error fetching Figma image');
          return;
        }

        const imageData = await imageResponse.json();
        setImageUrl(imageData.images[figmaNodeId]);
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
      {imageUrl ? (
        <img src={imageUrl} alt="Figma Image" />
      ) : (
        <p>Loading Figma image...</p>
      )}
    </div>
  );
};

export default FigmaImage;

