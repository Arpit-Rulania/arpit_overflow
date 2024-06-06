import Image from "next/image";
import Link from "next/link";
import RenderTag from "./RenderTag";

const qlinks = [
  {
    _id: 1,
    value:
      "Would it be appropriate to point out an error in another paper during a referee report?",
    route: "/",
  },
  { _id: 2, value: "How can an airconditioning machine exist?", route: "/" },
  {
    _id: 3,
    value: "Interrogated every time crossing UK Border as citizen",
    route: "/",
  },
  { _id: 4, value: "Low digit addition generator", route: "/" },
  {
    _id: 5,
    value: "What is an example of 3 numbers that do not make up a vector?",
    route: "/",
  },
];

const popTags = [
  { _id: "1", name: "javascript", totalques: 5 },
  { _id: "2", name: "react", totalques: 3 },
  { _id: "3", name: "next", totalques: 4 },
  { _id: "4", name: "vue", totalques: 2 },
  { _id: "5", name: "redux", totalques: 10 },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 h-screen flex flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden lg:w-[350px] text-dark200_light900">
      <div className=" flex flex-col">
        <h3 className="h3-bold">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {qlinks.map((item) => {
            return (
              <Link
                href={`/questions/${item._id}`}
                key={item._id}
                className="flex cursor-pointer items-center justify-between gap-7"
              >
                <p className="body-medium text-dark500_light900">
                  {item.value}
                </p>
                <Image
                  src="/assets/icons/chevron-right.svg"
                  alt="chevron right"
                  width={20}
                  height={20}
                  className="invert-colors"
                />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalques}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
