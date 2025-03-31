"use client";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Cart } from "../Cart/Cart";
import s from "./sideCart.module.scss";

export const SideCart = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsVisible(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx(s.side_cart_wrapper, {
        [s.show]: isVisible,
        [s.hide]: !isVisible,
      })}
    >
      <Cart />
    </div>
  );
};
