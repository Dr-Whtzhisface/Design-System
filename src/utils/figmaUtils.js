async function generateFigmaImageUrl(fileToken, apiToken, nodeId, scale, format) {
    const url = `https://api.figma.com/v1/images/${fileToken}?ids=${nodeId}&format=${format}&scale=${scale}`;
    const headers = {
      'X-Figma-Token': apiToken,
    };
  
    try {
      const response = await fetch(url, { headers });
      const data = await response.json();
  
      if (data.error) {
        throw new Error(data.error);
      }
  
      return data.images[nodeId];
    } catch (error) {
      console.error('Error generating Figma image URL:', error);
      return null;
    }
  }
  