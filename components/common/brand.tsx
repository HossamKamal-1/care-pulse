import Image from "next/image"

export const Brand = () => {
  return (
    <div className="flex items-center gap-[10px]">
      <Image src='/assets/icons/brand-logo.svg' alt="brand-logo" width={25} height={25} />
      <span className="font-bold text-lg">
        CarePulse
      </span>
    </div>
  )
}