// Map number x from range [a, b] to [c, d]
export const mapNumber = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

// Linear interpolation
export const lerp = (a, b, n) => (1 - n) * a + n * b;

export const calcWinsize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
};

// Gets the mouse position
export const getMousePos = e => {
  return { 
    x : e.clientX, 
    y : e.clientY 
  };
};

export const distance = (x1, y1, x2, y2) => {
  let a = x1 - x2;
  let b = y1 - y2;
  return Math.hypot(a,b);
}

// Generate a random float.
export const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);