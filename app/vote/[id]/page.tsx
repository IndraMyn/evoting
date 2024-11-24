import { useRouter } from "next/router";

const Page = ({ params }: { params: { id: string } }) => {
  return <h1>Ini halaman voting {params.id}</h1>;
};

export default Page;
