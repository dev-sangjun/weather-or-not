import { keyframes } from "styled-components";

export const animations = {
  fadeIn: keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,
  fadeOut: keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,
  bounceIn: keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -6rem);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`,
  bounceOut: keyframes`
from {
  opacity: 1;
  transform: translate(-50%, -50%);
}
to {
  opacity: 0;
  transform: translate(-50%, -6rem);
}
`,
};
