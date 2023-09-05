"use client"

interface propType {
  bgColor?: "orange" | "brown" | "blue"
  text: string
  fontSize?: "xl" | "sm" | "md"
  font?: "girassol" | "girassol" | "kufam" | "poppins"
  color?: "blue" | "white" | "gold"
  onClick?: () => void
}
export default function AlButton({
  bgColor,
  text,
  fontSize,
  color,
  onClick,
  font,
}: propType) {
  return (
    <button
      onClick={onClick}
      className={` font-medium ${
        (font === "girassol" && ` font-girassol`) ||
        (font === "kufam" && ` font-kufam`) ||
        (font === "poppins" && ` font-poppins`) ||
        "font-nunito"
      } ${
        (bgColor === "orange" && ` bg-orange`) ||
        (bgColor === "brown" && ` bg-brown`) ||
        (bgColor === "blue" && ` bg-offBlue`) ||
        "bg-brown"
      } ${
        (fontSize === "sm" && ` text-sm`) ||
        (fontSize === "md" && ` text-md`) ||
        (fontSize === "xl" && ` text-xl`) ||
        "text-2xl"
      } ${
        (color === "blue" && ` text-darkBlue`) ||
        (color === "white" && ` text-white`) ||
        (color === "gold" && ` text-gold`) ||
        "text-black"
      } rounded-3xl p-4`}
    >
      {text ? text : ""}
    </button>
  )
}
