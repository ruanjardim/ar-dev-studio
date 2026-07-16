export function LogoCube(): string {
  return `
    <svg class="brand-mark" viewBox="0 0 36 36" role="img" aria-labelledby="logo-cube-title">
      <title id="logo-cube-title">Logo Cube da AR Dev Studio</title>
      <path class="brand-mark__face brand-mark__face--top" d="M18 3 31 10.5 18 18 5 10.5 18 3Z" />
      <path class="brand-mark__face brand-mark__face--left" d="M5 10.5 18 18v15L5 25.5v-15Z" />
      <path class="brand-mark__face brand-mark__face--right" d="M31 10.5v15L18 33V18l13-7.5Z" />
      <path class="brand-mark__edge" d="M18 3 31 10.5v15L18 33 5 25.5v-15L18 3Z" />
      <path class="brand-mark__line" d="M18 18v15M5 10.5 18 18l13-7.5" />
    </svg>
  `;
}
