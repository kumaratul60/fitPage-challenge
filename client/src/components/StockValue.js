import React from "react";
import { useParams } from "react-router-dom";

const StockValue = ({ scans }) => {
  const { id, criteria, va } = useParams();
  const scan = scans.find((scan) => scan?.id === parseInt(id));
  const values = scan?.criteria[criteria]?.variable[va];

  return (
    <>
      {scan && (
        <div className="stockList stockValue">
          {values.type === "value" &&
            values.values.map((value, index) => (
              <div className="list" key={index}>
                <div className="title">{value}</div>
              </div>
            ))}
          {values.type === "indicator" && (
            <div>
              <div className="title">{values?.study_type}</div>
              <div className="subtitle">Set Parameters</div>
              <div className="indicator">
                <div>Period</div>
                <input
                  type="number"
                  min={values?.min_value}
                  max={values?.max_value}
                  defaultValue={values?.default_value}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default StockValue;
