import Image from "next/image";

const TalhaoCard = ({ data }) => {
  return (
    <div className="rounded-lg p-10 shadow ">
      <Image src="talhao.png" alt={""} />
      <div className="flex flex-col gap-4">
        <h1>{data?.nome}</h1>
        <p>{data?.ultimaColeta}</p>
      </div>
    </div>
  );
};

export default TalhaoCard;
