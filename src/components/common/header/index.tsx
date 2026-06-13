import { Navcontents } from "./nav.contents"

export const Header = () => {
  return (
    <div
      className="
        w-full
        h-[15vh]
        flex
        items-center
        justify-center
        text-white
        bg-black/20
        backdrop-blur-md
        fixed
        top-0
        z-50
      "
    >
      <Navcontents />
    </div>
  )
}