import { useQuery } from "@tanstack/react-query"
import { getblogs } from "../../../api/blog.api"
import { SectionHeading } from "../../../inputs/section.heading"
import { DataLoading } from "../../../components/common/input/data.loading"
import { BlogList } from "./blogs.list"

export const Blogs = () => {
    const { data, isLoading } = useQuery({
        queryFn: getblogs,
        queryKey: ["get-all-blogs"]
    })

    return (
        
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
            <SectionHeading title={"Blogs"} subTitle={"explore our all of the blogs"} link={"#"}/>

            {isLoading ? (
                
                <div className="h-[60vh] flex items-center justify-center">
                    <DataLoading />
                </div>
            ) : data?.data?.length > 0 ? (
                <BlogList blogs={data.data} />
            ) : (
                <div className="text-center py-12 text-gray-500">No blogs found.</div>
            )}
        </div>
    )
}