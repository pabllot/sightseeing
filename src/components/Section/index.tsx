import DefineCategory from "../../utils/defineCategory";
import { useParams } from "react-router-dom";

const Section = () => {
  const { category } = useParams();
  const { data, isLoading }: any = DefineCategory(category);

  return (
    <>
      {isLoading ? (
        "Loading"
      ) : (
        <div>
          {data?.results.map((item: any, idx: number) => (
            <p key={idx}>{item.name}</p>
          ))}
        </div>
      )}
    </>
  );
};

export default Section;
