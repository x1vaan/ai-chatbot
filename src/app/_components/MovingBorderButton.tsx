export default function MovingBorderButton({ title, css }: { title: string; css?: string }) {
    return (
      <div className="flex items-center">
        <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_60%,#57a6b9_100%)]"></span>
          <div
            className={`inline-flex items-center justify-center px-3 text-sm rounded-full border-[1px] border-[#27242A] cursor-pointer backdrop-blur-3xl whitespace-nowrap ${css}`}
          >
            {title}
          </div>
        </span>
      </div>
    );
  }