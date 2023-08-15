import React from 'react';
import { generateFigmaImageUrl } from '../utils/figmaUtils'; // Adjust the path as needed

const FigmaEmbed = ({ fileToken, apiToken, nodeId, scale, format }) => {
  console.log('fileToken:', fileToken);
  console.log('apiToken:', apiToken);
  console.log('nodeId:', nodeId);

  const figmaImageUrl = generateFigmaImageUrl(fileToken, apiToken, nodeId, scale, format);
  console.log('figmaImageUrl:', figmaImageUrl);

  return (
    <div>
      {figmaImageUrl && (
        <iframe
          title="Figma Embed"
          src={figmaImageUrl}
          width="100%"
          height="400"
          frameBorder="0"
        />
      )}
    </div>
  );
};

export default FigmaEmbed;
