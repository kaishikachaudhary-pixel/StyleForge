const bgColor = document.getElementById("bg-color");
const textColor = document.getElementById("text-color");
const accentColor = document.getElementById("accent-color");
const fontFamily = document.getElementById("font-family");
const fontSize = document.getElementById("font-size");
const fontWeight = document.getElementById("font-weight");
const padding = document.getElementById("padding");
const borderRadius = document.getElementById("border-radius");
const borderWidth = document.getElementById("border-width");

const previewCard = document.getElementById("preview-card");
const previewButton = document.getElementById("preview-button");
const previewHeading = document.getElementById("preview-heading");
const previewDescription = document.getElementById("preview-description");
const previewInput = document.getElementById("preview-input");

const fontSizeValue = document.getElementById("font-size-value");
const paddingValue = document.getElementById("padding-value");
const radiusValue = document.getElementById("radius-value");
const borderWidthValue = document.getElementById("border-width-value");

const generatedCode = document.getElementById("generated-code");

const saveBtn = document.getElementById("copy-btn");
const resetBtn = document.getElementById("reset-btn");
const themeBtn = document.getElementById("theme-btn");

// UPDATE SLIDER LABELS

function updateSliderLabels() {
    fontSizeValue.textContent = `${fontSize.value}px`;
    paddingValue.textContent = `${padding.value}px`;
    radiusValue.textContent = `${borderRadius.value}px`;
    borderWidthValue.textContent = `${borderWidth.value}px`;
}

// UPDATE LIVE PREVIEW

function updatePreview() {
    previewCard.style.backgroundColor = bgColor.value;
    previewCard.style.color = textColor.value;
    previewButton.style.backgroundColor = accentColor.value;

    previewCard.style.fontFamily = fontFamily.value;
    previewCard.style.fontSize = `${fontSize.value}px`;
    previewCard.style.fontWeight = fontWeight.value;

    previewCard.style.padding = `${padding.value}px`;
    previewCard.style.borderRadius = `${borderRadius.value}px`;
    previewCard.style.borderWidth = `${borderWidth.value}px`;

    previewInput.style.fontFamily = fontFamily.value;

    generateCss();
}

// GENERATE CSS

function generateCss() {
    const css = `/* Preview Card */
.preview-card {
    background-color: ${bgColor.value};
    color: ${textColor.value};
    font-family: ${fontFamily.value};
    font-size: ${fontSize.value}px;
    font-weight: ${fontWeight.value};
    padding: ${padding.value}px;
    border-radius: ${borderRadius.value}px;
    border-width: ${borderWidth.value}px;
}

/* Preview Button */
.preview-button {
    background-color: ${accentColor.value};
}`;

    generatedCode.textContent = css;
}

// LISTEN FOR CONTROL CHANGES

const designControls = [
    bgColor,
    textColor,
    accentColor,
    fontFamily,
    fontSize,
    fontWeight,
    padding,
    borderRadius,
    borderWidth
];

designControls.forEach(function (control) {
    control.addEventListener("input", function () {
        updateSliderLabels();
        updatePreview();
    });

    control.addEventListener("change", function () {
        updateSliderLabels();
        updatePreview();
    });
});

// INITIALIZE

updateSliderLabels();
updatePreview();