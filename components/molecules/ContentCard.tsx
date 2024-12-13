"use client";

import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
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
import { useRouter } from "next/navigation";

type IOptions = {
  id: number;
  value: string;
  isVoted?: boolean;
  percentage: number;
};

type ContentCard = {
  code: string;
  avatar: string;
  caption: string;
  name: string;
  image: string;
  options: IOptions[];
  voted?: number;
  totalVotes: number;
};

const ContentCard = (props: ContentCard) => {
  const [voted, setVoted] = useState<number>(0);

  useEffect(() => {
    if (props.voted) setVoted(props.voted);
  }, [props.voted]);

  const router = useRouter();

  return (
    <Card className="w-full max-w-lg rounded-xl shadow-md border bg-white overflow-hidden">
      {/* Header */}
      <CardHeader className="p-6 bg-blue-50">
        <CardTitle className="flex items-center gap-4 mb-2 text-gray-800">
          <Avatar className="shadow">
            <AvatarImage src={props.avatar} alt={props.name} />
            <AvatarFallback>IMG</AvatarFallback>
          </Avatar>
          <div>
            <label className="text-lg font-semibold">{props.name}</label>
            <p className="text-sm text-gray-600">{props.caption}</p>
          </div>
        </CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="p-0">
        <Image
          src={props.image}
          alt="img"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-cover cursor-pointer transition-transform hover:scale-105"
          onClick={() => router.push(`/vote/${props.code}`)}
        />
      </CardContent>

      {/* Footer */}
      <CardFooter className="p-6 bg-gray-50 flex flex-col items-center gap-4">
        {/* Voting Options */}
        <div className="flex w-full gap-4">
          {props.options.map((option) => (
            <Button
              key={option.id}
              onClick={() =>
                voted === option.id ? setVoted(0) : setVoted(option.id)
              }
              className={`flex-1 px-4 py-2 rounded-lg text-sm transition-all ${
                voted === option.id
                  ? "bg-blue-500 text-white shadow-md"
                  : "border border-blue-300 text-blue-600 hover:bg-blue-100"
              }`}
            >
              {`${option.percentage}% ${option.value}`}
            </Button>
          ))}
        </div>

        {/* Total Votes */}
        <div className="mt-4 w-full text-center">
          <p className="text-lg font-semibold text-gray-700">
            Total Suara: {props.totalVotes}
          </p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ContentCard;
