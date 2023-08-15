import React, { useEffect, useState } from 'react';

const FigmaImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const figmaNodeId = '1:1045';
    const figmaScale = '1';
    const figmaFormat = 'png';
    const figmaApiToken = 'figd_mcFPFGozK2HCuON5VTyrpvNyGien_J8BJsMUxak2';
    const fileToken = '4vMAPIHT9iqOuhqF4N97kp';

    const fetchFigmaImage = async () => {
      try {
        const response = await fetch(`https://api.figma.com/v1/images/${figmaNodeId}?scale=${figmaScale}&format=${figmaFormat}`, {
          headers: {
            'X-FIGMA-TOKEN': figmaApiToken,
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
  }, []);

  return <img src={imageUrl} alt="Figma Image" />;
};

export default FigmaImage;

