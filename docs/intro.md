# Figma Image Example

Here's an example of embedding an image fetched from the Figma API:

<div id="figma-image"></div>

# Figma Image Example

Here's an example of embedding an image fetched from the Figma API:

<div id="figma-image"></div>

<script>
  // Replace 'YOUR_FIGMA_NODE_ID', 'YOUR_FIGMA_SCALE', and 'YOUR_FIGMA_API_TOKEN' with actual values
  const figmaNodeId = '1:1045';
  const figmaScale = '1';
  const figmaFormat = 'png';
  const figmaApiToken = 'figd_mcFPFGozK2HCuON5VTyrpvNyGien_J8BJsMUxak2';

  // Construct the Figma API URL
  const figmaApiUrl = `https://api.figma.com/v1/images/${figmaNodeId}?scale=${figmaScale}&format=${figmaFormat}`;

  // Make a GET request to the Figma API
  fetch(figmaApiUrl, {
    headers: {
      'X-FIGMA-TOKEN': figmaApiToken
    }
  })
    .then(response => response.json())
    .then(data => {
      const imageUrl = data.images[figmaFormat]; // Assuming the requested format is present
      
      // Create an image element
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      
      // Append the image to the div with id 'figma-image'
      const imageContainer = document.getElementById('figma-image');
      imageContainer.appendChild(imgElement);
    })
    .catch(error => {
      console.error('Error fetching Figma image:', error);
    });
</script>

