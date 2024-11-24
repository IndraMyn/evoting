import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Progress } from "@radix-ui/react-progress";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import Image from "next/image";

type IOptions = {
  id: number;
  value: string;
};

type ContentCard = {
  avatar: string;
  caption: string;
  name: string;
  image: string;
  option: IOptions[];
};

const ContentCard = (props: ContentCard) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-md flex flex-1 flex-row items-center gap-3 mb-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <label htmlFor="">{props.name}</label>
        </CardTitle>
        <CardDescription>{props.caption}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={props.image}
          alt="img"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-contain"
        />
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <div className="flex-1 w-full">
          <Progress className="bg-red-200" value={33} />
        </div>
        <div className="flex flex-1 w-full gap-5">
          {props.option.map((option) => (
            <Button className="flex-1" variant="outline">
              {option.value}
            </Button>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ContentCard;
