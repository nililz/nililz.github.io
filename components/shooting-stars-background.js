"use client";
import React from "react";
import { ShootingStars } from "@/components/shooting-stars";
import { StarsBackground } from "@/components/stars-background";
export function ShootingStarsAndStarsBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}