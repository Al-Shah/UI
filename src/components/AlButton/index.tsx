"use client"
export default function AlButton({
  bgColor,
  text,
  fontSize = "2xl",
  p = 4,
  m,
  onClick,
}: {
  bgColor?: string
  text: string
  fontSize?: string
  onClick?: () => void
  p?: number
  m?: number
}) {
  return (
    <button
      onClick={onClick}
      className={` font-medium ${
        bgColor ? `bg-[${bgColor}]` : "bg-[#FABF75]"
      } rounded-3xl m-${m} p-${p} text-${fontSize}`}
    >
      {text ? text : ""}
    </button>
  )
}
