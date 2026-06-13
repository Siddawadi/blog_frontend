
import { Link, useLocation } from "react-router-dom"

const navcontents = [
  {
    label: "Home",
    link: "/",
  },
  
  
  {
    label: "Add Blog",
    link: "/addblog",
  },
  
]

export const Navcontents = () => {
  return (
    <div className="flex justify-center gap-2 ">
      {navcontents.map((items) => (
        <Items
          key={items.label}
          label={items.label}
          link={items.link}
        />
      ))}
    </div>
  )
}

const Items = ({
  label,
  link,
}: {
  label: string
  link: string
}) => {
  const location = useLocation()

  return (
    <Link
      to={link}
      className={`px-2 py-2 rounded-md text-white ${
        location.pathname === link
          ? "bg-black/50 rounded-2xl h-10  hover:font-semibold text-white/75"
          : "text-black"
      }`}
    >
      {label}
    </Link>
  )
}