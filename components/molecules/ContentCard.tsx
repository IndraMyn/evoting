"use client";

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
import { useEffect, useState } from "react";

type IOptions = {
  id: number;
  value: string;
  isVoted?: boolean;
  percentage: number;
};

type ContentCard = {
  avatar: string;
  caption: string;
  name: string;
  image: string;
  option: IOptions[];
  voted?: number;
  totalVotes: number;
};

const ContentCard = (props: ContentCard) => {
  const [voted, setVoted] = useState<number>(0);

  useEffect(() => {
    if (props.voted) setVoted(props.voted);
  }, [props.voted]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-md flex flex-1 flex-row items-center gap-3 mb-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>IMG</AvatarFallback>
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
          {props.option.map((option, i) => (
            <Button
              key={i}
              onClick={() =>
                voted == option.id ? setVoted(0) : setVoted(option.id)
              }
              className="flex-1"
              variant={voted == option.id ? "default" : "outline"}
            >
              {voted ? `${option.percentage}% ` : ""}
              {option.value}
            </Button>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ContentCard;
