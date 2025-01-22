"use client";
import React, { useEffect, useState } from "react";
import { Modal } from "antd";

const Advertisement = () => {
  const [isAdvertisementVisible, setIsAdvertisementVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsAdvertisementVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);
  const handleCloseAdvertisement = () => {
    setIsAdvertisementVisible(false);
  };
  return (
    <Modal
      open={isAdvertisementVisible}
      footer={null}
      onCancel={handleCloseAdvertisement}
      centered
      className="ad-modal"
      styles={{
        body: {
          padding: 0,
          borderRadius: "8px",
          overflow: "hidden",
        },
      }}
    >
      <div className="w-full">
        <img
          src="/images/advertisement.jpg"
          alt="Advertisement"
          className="w-full object-cover"
        />
      </div>
    </Modal>
  );
};

export default Advertisement;
