// @flow strict
import Image from "next/image";
import { VscServerProcess } from "react-icons/vsc";

function BlogCard({ blog }) {
  return (
    <a href={blog.path}>
      <div href="" className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
        <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
          <Image 
            src={blog?.imageUrl}
            height={1080}
            width={1920}
            alt=""
            className="h-full w-full group-hover:scale-110 transition-all duration-300"
          />
        </div>

        <div className="p-2 sm:p-3 flex flex-col">
          <h1 className="p-2 text-gray-300 font-mono">{blog.title}</h1>
          <button className=" px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex justify-center items-center gap-1 hover:gap-3">
            <span>Live site</span>
            <VscServerProcess size={16} />
          </button>
        </div>
      </div>
    </a> 
  );
}

export default BlogCard;
