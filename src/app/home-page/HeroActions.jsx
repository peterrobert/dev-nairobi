"use client";
import React from "react";

import Appbutton from "../componets/Appbutton";
import { useModalStore } from "../store/modalStore";

const HeroActions = () => {
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-12">
      <Appbutton
        variant="primary"
        rightIcon={<i className="fa-solid fa-arrow-right text-sm"></i>}
        onClick={() => openModal("audit")}
      >
        Book Free Website Audit
      </Appbutton>

      <Appbutton variant="secondary">View Services</Appbutton>
    </div>
  );
};

export default HeroActions;
