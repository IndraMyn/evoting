import CreateVoteCard from "@/components/molecules/CreateVoteCard";
import { Templates } from "@/components/partials/templates";

const Page = () => {
  return (
    <Templates>
      <div className="grid md:grid-cols-12">
        <div className="col-start-5 col-span-4">
          <CreateVoteCard />
        </div>
      </div>
    </Templates>
  );
};

export default Page;
