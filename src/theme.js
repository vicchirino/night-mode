const themeLight = {
    background: '#F8F8F9',
    body: '#161617'
}

const themeDark = {
    background: '#161617',
    body: '#FFFFFF'
}

const theme = mode => (mode === 'dark' ? themeDark : themeLight);

export default theme;