import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CarouselArrow({ direction = "left" }) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;

  return <Icon size={20} strokeWidth={2.4} />;
}

export default CarouselArrow;
















