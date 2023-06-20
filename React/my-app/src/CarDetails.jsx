import { useEffect, useRef } from "react";

export function CarDetails({
  initialData = { model: "Fiat", year: 2004, color: "Black" },
}) {
  const formRef = useRef();

  useEffect(() => {
    formRef.current[0].value = initialData.model;
    formRef.current[1].value = initialData.year;
    formRef.current[2].value = initialData.color;
  }, [initialData]);
  return (
    <div>
      <form ref={formRef}>
        <label htmlFor="model">Car Model</label>
        <input type="text" name="model" />
        <label htmlFor="year">Year</label>
        <input type="text" name="model" />
        <label htmlFor="model">Color</label>
        <input type="text" name="color" />
      </form>
    </div>
  );
}
