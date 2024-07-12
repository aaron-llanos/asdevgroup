let widthDOM = 1
if (typeof window !== 'undefined') {
  widthDOM = window.screen.width;
}

export const isMobile = widthDOM < 900;