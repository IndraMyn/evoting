"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useForm } from "react-hook-form";

type FormValues = {
  caption: string;
  lastName: string;
  content: FileList;
  choices: string[];
  type: string;
  invites: string;
};

const CreateVoteForm = () => {
  const { register } = useForm<FormValues>();

  const [form, setForm] = useState({
    caption: "",
    choices: "",
    isPrivate: false,
  });
  const [choices, setChoices] = useState<string[]>([]);

  const onAddChoice = () => {
    setChoices([...choices, form.choices]);
  };

  const onRemoveChoice = (index: number) => {
    const filter = choices.filter((_choice, i) => i != index);
    setChoices(filter);
  };

  return (
    <Card className="w-full">
      <CardHeader></CardHeader>
      <CardContent>
        <form className="flex flex-1 w-full flex-col gap-5">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="caption">Caption</Label>
            <Input
              {...register("caption")}
              placeholder="tulis caption disini"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="content">Content</Label>
            <Input
              {...register("content")}
              type="file"
              id="content"
              placeholder="tulis caption disini"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="choices">Choices</Label>
            <div className="flex w-full items-center space-x-2">
              <Input id="choices" placeholder="tulis kandidat disini" />
            </div>
            {choices.map((choice, i) => (
              <div className="flex w-full items-center space-x-2" key={i}>
                <Input
                  id="choices"
                  value={choice}
                  placeholder="tulis kandidat disini"
                />
                <Button
                  className="bg-danger hover:bg-red-500"
                  type="button"
                  onClick={() => onRemoveChoice(i)}
                >
                  X
                </Button>
              </div>
            ))}
          </div>

          <Button type="button" variant="outline" onClick={onAddChoice}>
            Tambah Opsi
          </Button>

          <div className="grid w-full items-center gap-3">
            <Label htmlFor="type">Type</Label>
            <RadioGroup
              {...register("type")}
              defaultValue="public"
              className="flex flex-cols"
              onValueChange={(value) =>
                setForm({ ...form, isPrivate: value == "private" })
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="public" id="public" />
                <Label htmlFor="public">Public</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="private" id="private" />
                <Label htmlFor="private">Private</Label>
              </div>
            </RadioGroup>
          </div>
          {form.isPrivate && (
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="invites">Invites</Label>
              <Input
                {...register("invites")}
                placeholder="example@gmail.com, example2@yahoo.com"
              />
            </div>
          )}
          <div className="w-full grid">
            <Button type="button">Buat Vote</Button>
          </div>
        </form>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default CreateVoteForm;
