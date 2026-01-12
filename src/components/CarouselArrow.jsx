import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CarouselArrow({ direction = "left", className }) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return <Icon size={24} strokeWidth={2.4} className={className} />;
}

export default CarouselArrow;



















