function getRecommendation() {
  // Get the user's selected skin type
  const skinType = document.getElementById("skin-type").value;

  // Recommendations based on skin type
  const recommendations = {
    normal: "Keep your routine simple with a gentle cleanser and moisturizer.",
    oily: "Cleanse twice a day and use oil-free products.",
    dry: "Hydrate your skin with rich moisturizers and drink plenty of water.",
    combination: "Use a gentle cleanser and balance products for oily and dry areas.",
  };

  // Show the recommendation
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = recommendations[skinType];
}
