import ContentCard from "@/components/molecules/ContentCard";
import { Templates } from "@/components/partials/templates";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const Page = ({ params }: { params: { id: string } }) => {
  const dummy = {
    name: "David Dodetin",
    avatar: "https://github.com/shadcn.png",
    caption: "Telur dulu atau Ayam dulu",
    image:
      "https://cdn.idntimes.com/content-images/post/20161031/b3-14fd1692966a260cd93b96605f77b4a3.jpg",
    options: [
      {
        id: 1,
        value: "ayam",
        percentage: 50,
      },
      {
        id: 2,
        value: "telur",
        percentage: 50,
      },
    ],
    totalVotes: 100,
  };

  return (
    <Templates>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-6">
            <ContentCard {...dummy} code={params.id} />
          </div>
          <div className="col-span-6">
            <div className="grid grid-row-12 gap-5">
              <div>
                <Card>
                  <CardHeader className="text-center">
                    Berakhir dalam 01:00:00
                  </CardHeader>
                </Card>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <label>Total Votes: 1000</label>
                  </CardHeader>
                  <CardContent>
                    {dummy.options.map((option, i) => (
                      <div className="grid gap-3 mb-5" key={i}>
                        <div className="flex">
                          <Label className="flex-1">{option.value}</Label>
                          <Label>{`${option.percentage}% (${100/100 * 50} votes)`}</Label>
                        </div>
                        <Progress value={option.percentage} />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Templates>
  );
};

export default Page;
