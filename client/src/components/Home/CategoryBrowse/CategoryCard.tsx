import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi";
const CategoryCard = ({
  title,
  rating,
  skills,
  link,
}: {
  title: string;
  rating: number;
  skills: number;
  link: string;
}) => {
  return (
    <Link
      to={link}
      className="bg-[#F7FAF7] hover:bg-[#e2ede2] backdrop-blur-sm  dark:bg-white/10 border border-white dark:border-dark-primary dark:hover:bg-white/5 p-4 lg:p-8 shadow-md/40 dark:shadow-gray-950 hover:shadow-lg/40 transition-shadow delay-75 sm:min-h-[120px] flex flex-col justify-between cursor-pointer rounded-lg"
    >
      <h1 className="text-[1.2rem] font-semibold mb-2 text-light-primary dark:text-dark-primary">
        {title}
      </h1>
      <div className="flex justify-between text-light-muted dark:text-dark-muted text-[0.7rem] lg:text-[0.8rem]">
        <p className="flex items-center gap-1 ">
          <span className="text-light-green text-md">
            <HiStar />
          </span>
          {rating}/5
        </p>
        <p>{skills} skills</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
