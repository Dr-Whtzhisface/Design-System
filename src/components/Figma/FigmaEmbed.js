// src/components/FigmaEmbed.js

import React from 'react';
import { generateFigmaImageUrl } from '../utils/figmaUtils'; // Adjust the path as needed

const FigmaEmbed = ({ fileToken, apiToken, nodeId, scale, format }) => {
  const figmaImageUrl = "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/638ec794-c976-44e7-9f6c-1a61ca34f51d";//generateFigmaImageUrl(fileToken, apiToken, nodeId, scale, format);

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
