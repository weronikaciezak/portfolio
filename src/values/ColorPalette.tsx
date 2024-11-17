interface Color {
    hex: string;
}

const ColorPalette: { [key in 'background' | 'footer' | 'header' | 'text' | 'primary']: Color } = {
    background: { hex: "#1B1B1D" },
    footer: { hex: "#1C1E21" },
    header: { hex: "#242526" },
    text: { hex: "#FFFCF6" },
    primary: { hex: "#418fbf" }
};

export default ColorPalette;