import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DataFormat from "../helper/DataFormat";

const StockDetail = ({ scans }) => {
  const { id } = useParams();
  const scan = scans.find((scan) => scan.id === parseInt(id));
  let navigate = useNavigate();
  useEffect(() => {
    const links = document.querySelectorAll(".criteria a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        navigate(link.getAttribute("href"));
      });
    });
  }, []);
  return (
    <>
      {scan && (
        <div className="stockList stockDetail">
          <div className="list" key={scan.id}>
            <div className="title">{scan.name}</div>
            <div className={`subtitle ${scan.color}`}>{scan.tag}</div>
          </div>
          {scan.criteria.map((cri, index) => (
            <div className="criteria" key={index}>
              <div
                className="title"
                dangerouslySetInnerHTML={{
                  __html: DataFormat(id, cri, index),
                }}
              />
              {scan.criteria.length - 1 !== index && (
                <div className="subtitle">and</div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default StockDetail;
