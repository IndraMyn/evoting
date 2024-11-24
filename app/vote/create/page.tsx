"use client";
import { Templates } from "@/components/partials/templates";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";

const Page = () => {
  const [form, setForm] = useState({
    caption: "",
    choices: "",
    isPrivate: false,
  });
  const [choices, setChoices] = useState<string[]>([]);

  const handleAddChoice = () => {
    if (form.choices) {
      setChoices([...choices, form.choices]);
      setForm({ ...form, choices: "" });
    }
  };

  return (
    <Templates>
      <div className="grid grid-cols-3">
        <div></div>
        <div>
          <Card className="w-full">
            <CardHeader></CardHeader>
            <CardContent>
              <form className="flex flex-1 w-full flex-col gap-5">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="caption">Caption</Label>
                  <Input id="caption" placeholder="tulis caption disini" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="content">Content</Label>
                  <Input
                    type="file"
                    id="content"
                    placeholder="tulis caption disini"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="choices">Choices</Label>
                  <div className="flex w-full items-center space-x-2">
                    <Input
                      id="choices"
                      value={form.choices}
                      onChange={(e) =>
                        setForm({ ...form, choices: e.target.value })
                      }
                      placeholder="tulis kandidat disini"
                    />
                    <Button type="button" onClick={handleAddChoice}>
                      Tambah
                    </Button>
                  </div>
                </div>

                {choices.length > 0 && (
                  <div>
                    <ul>
                      {choices.map((choice, i) => (
                        <li key={i}>{choice}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="grid w-full items-center gap-3">
                  <Label htmlFor="type">Type</Label>
                  <RadioGroup
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
                    <Label htmlFor="caption">Invites</Label>
                    <Input
                      id="caption"
                      placeholder="example@gmail.com, example2@yahoo.com"
                    />
                  </div>
                )}
                <div className="w-full grid">
                  <Button type="button">Create</Button>
                </div>
              </form>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </div>
      </div>
    </Templates>
  );
};

export default Page;
