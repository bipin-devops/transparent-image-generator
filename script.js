function generateImage() {
  const name = document.getElementById("nameInput").value;
  const fontSelect = document.getElementById("fontSelect");
  const resultImageContainer = document.getElementById("resultImageContainer");
  const downloadLink = document.getElementById("downloadLink");
  const resultImage = document.getElementById("resultImage");
  const validationMessage = document.getElementById("validationMessage");

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (name.trim() === "") {
    // Show the validation message and return
    validationMessage.textContent = "Please enter your name";
    validationMessage.style.display = "block";
    return;
  }

  // Clear the validation message if input is valid
  validationMessage.textContent = "";
  validationMessage.style.display = "none";

  const selectedFont = fontSelect.value;

  canvas.width = 500;
  canvas.height = 100;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.font = `40px ${selectedFont}`;
  context.fillStyle = "#000000";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(name, canvas.width / 2, canvas.height / 2);

  const dataURL = canvas.toDataURL();

  resultImage.src = dataURL;

  downloadLink.href = dataURL;
  downloadLink.style.display = "inline";
  resultImageContainer.style.display = "block";
}
