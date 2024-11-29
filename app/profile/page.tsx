import { Templates } from "@/components/partials/templates";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Page = () => {
  return (
    <Templates>
      <div className="grid md:grid-cols-12">
        <div className="md:col-start-5 md:col-span-4">
          <Card>
            <CardHeader>
              <div className="flex justify-center">
                <Avatar className="w-20 h-20">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>IMG</AvatarFallback>
                </Avatar>
              </div>
            </CardHeader>
            <CardContent>
              <form className="flex flex-1 w-full flex-col gap-5">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="name">Nama</Label>
                  <Input value="John Doe" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input value="johndoe@email.com" disabled readOnly />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <div className="grid w-full">
                <Button type="button">Simpan Perubahan</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Templates>
  );
};

export default Page;
