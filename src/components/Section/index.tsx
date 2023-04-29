import DefineCategory from "../../utils/defineCategory";

const Section = () => {
  const { data, isLoading }: any = DefineCategory("category2");

  return (
    <div>
      {data?.results.map((item: any, idx: number) => (
        <p key={idx}>{item.name}</p>
      ))}
    </div>
  );
};

export default Section;
