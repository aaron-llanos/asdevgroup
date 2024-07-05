let widthDOM
if (typeof window !== 'undefined') {
  widthDOM = window.screen.width;
}

export const isMobile = widthDOM < 900;