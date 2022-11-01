import { uniqueId } from "lodash-es";
import {
  forwardRef,
  LegacyRef,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { formatNumber } from "../../../tools/number.js";
import { TextInput } from "../TextInput/index.js";
import styles from "./numberInput.module.css";

const NumberInput = forwardRef(
  (
    { id, isBusy, isLoading, format, value, onChange, ...props }: any,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    const [formattedValue, setFormattedValue] = useState(value);
    const [numberInputID, numberInputTextID] = useMemo(() => {
      const numberId = id || uniqueId("numberInput_");
      return [numberId, "numberInputText_" + numberId];
    }, [id]);

    const formatValue = useCallback((value: string | number = "") => {
      const unformattedNumber =
        value === 0 ? null : String(value).split(",").join("");
      const newFormattedNumber =
        unformattedNumber === "-"
          ? "-"
          : formatNumber(unformattedNumber, {
              decimals: 0,
              nullValue: "",
            });
      setFormattedValue(newFormattedNumber);
      return unformattedNumber;
    }, []);

    const handleChange = useCallback(
      (event) => {
        if (format) {
          event.target.value = String(event.target.value).split(",").join("");
        }
        // eslint-disable-next-line unicorn/prefer-number-properties
        if (onChange && !isNaN(event.target.value)) {
          onChange(event);
        }
      },
      [format, onChange]
    );

    useEffect(() => {
      if (format) {
        formatValue(value);
      } else {
        setFormattedValue(value);
      }
    }, [format, formatValue, value]);

    return (
      <div className={styles.root}>
        <TextInput
          id={numberInputTextID}
          isBusy={isBusy}
          isLoading={isLoading}
          onChange={handleChange}
          // cannot format in type=number
          type={format ? "text" : "number"}
          value={formattedValue}
          {...props}
        />
        <input
          ref={ref}
          type="number"
          className={styles.numberInput}
          id={numberInputID}
          value={value}
        />
      </div>
    );
  }
);

export default NumberInput;