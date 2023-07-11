import { MutableRefObject, useEffect, useRef, useState } from "react";

import { cssVariable } from "../tools/css.js";

type CalculatedInputStyles = {
  input?: {
    height: number;
    paddingTop: number;
  };
};

export default function useMeasureInput(): [
  MutableRefObject<HTMLLabelElement>,
  CalculatedInputStyles,
] {
  const labelRef = useRef<HTMLLabelElement>();
  const [extraStyles, setExtraStyles] = useState<CalculatedInputStyles>({});

  useEffect(() => {
    if (labelRef.current) {
      const lineHeight = Number.parseFloat(cssVariable("--ye-line-height"));
      const labelHeight = labelRef.current.offsetHeight;
      const fontSize = Number.parseFloat(
        getComputedStyle(labelRef.current).fontSize,
      );
      const lineHeightPixel = lineHeight * fontSize;
      if (lineHeightPixel < labelHeight) {
        setExtraStyles({
          input: {
            height: labelHeight,
            paddingTop: labelHeight - lineHeightPixel,
          },
        });
      }
    }
  }, []);

  return [labelRef, extraStyles];
}
