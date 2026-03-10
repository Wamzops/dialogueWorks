import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const WorkCard = ({ project }) => {
  return (
    <div className="group w-full mb-24 md:mb-48">
      <Link
        href={`/work/${project.slug}`}
        className="block relative aspect-[4/5] md:aspect-[16/9] overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl transition-all duration-700 hover:scale-[1.02]"
      >
        <Image
          src={project.image || "/images/placeholder.jpg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </Link>

      <div className="mt-12 flex flex-col items-center text-center px-4">
        {project.client && (
          <FadeIn direction="down" className="mb-4">
            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-secondary">
              {project.client}
            </span>
          </FadeIn>
        )}

        <Link href={`/work/${project.slug}`}>
          <h3 className="text-3xl md:text-5xl lg:text-7xl font-medium tracking-tighter leading-none hover:italic transition-all duration-300">
            {project.title}
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default WorkCard;
