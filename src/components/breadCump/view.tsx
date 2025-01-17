import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../router";

interface BreadCrumbType {
  items: {
    name?: string;
    link?: string;
  }[];
  className?: string;
}

const BreadCrumb = ({ items, className }: BreadCrumbType) => {
  return (
    <div className={`wrapper ${className} max-md:hidden`}>
      <div className="flex items-center cursor-pointer gap-x-[8px]  mb-[36px]">
        <Link
          to={items.link}
          className="text-[12px] text-txtSecondary py-[5px] px-[8px] bg-buttonBg rounded-[6px] font-[500] flex items-center gap-x-[6px]"
        >
          Главная
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 12L10.5 9L7.5 6"
              stroke="#80848F"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
        {items.map((item, idx) =>
          item.link ? (
            <Link
              className="text-[12px] bg-buttonBg text-txtSecondary font-[500] py-[5px] px-[8px]  rounded-[6px]"
              to={item.link}
              key={idx}
            >
              {item.name}
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 12L10.5 9L7.5 6"
                  stroke="#80848F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          ) : (
            <div className="flex items-center py-[5px] px-[8px] bg-buttonBg rounded-[6px]">
              <div className="text-[12px] text-txtSecondary font-[500]">
                {item.name}
              </div>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 12L10.5 9L7.5 6"
                  stroke="#80848F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BreadCrumb;
