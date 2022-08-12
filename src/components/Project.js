import { ExternalLinkIcon } from "@heroicons/react/outline";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Project({
  title,
  websiteLink,
  feLink,
  beLink,
  desc,
  features,
  imgs,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="md:pr-[20px]">
        <h3>{title}</h3>
        {websiteLink && (
          <a href={websiteLink}>
            See it in action{" "}
            <ExternalLinkIcon className="w-4 h-4 inline-block" />
          </a>
        )}
        <p className="text-gray">
          Github: <a href={feLink}>frontend</a>, <a href={beLink}>backend</a>
        </p>
        <p className="mt-[10px]">{desc}</p>
        <p> Features within scope of responsibility:</p>
        <ul>
          {features?.map((el) => (
            <li>&emsp; &#9900; {el}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-lg overflow-hidden mt-[20px] md:mt-0">
        <Carousel
          showIndicators={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          renderThumbs={() => {}}
        >
          {imgs?.map((el) => (
            <div>
              <img src={el} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
