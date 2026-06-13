import { Herosection } from "./hero.section"
import { Footer } from "../../components/common/footer"

import { Blogs } from "./blogs/blogs"

export const Landingpage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Herosection/>
      
      <Blogs/>
      <div className="mt-auto">
        <Footer/>
      </div>
    </div>
  )
}