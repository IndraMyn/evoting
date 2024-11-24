import Navbar from "@/components/partials/navbar";
import ContentCard from "@/components/molecules/ContentCard";

const Page = () => {
  const dummy = [
    {
      name: "David Dodetin",
      avatar: "https://github.com/shadcn.png",
      caption: "Telur dulu atau Ayam dulu",
      image:
        "https://cdn.idntimes.com/content-images/post/20161031/b3-14fd1692966a260cd93b96605f77b4a3.jpg",
      option: [
        {
          id: 1,
          value: "ayam",
        },
        {
          id: 2,
          value: "telur",
        },
      ],
    },
    {
      name: "Sigit Gendang",
      avatar: "https://github.com/shadcn.png",
      caption: "Prediksi calon juara la liga musim ini",
      image:
        "https://www.fcbarcelona.com/photo-resources/2024/10/24/71005308-9a4f-4e9b-94a6-3326ffe61295/TIMEZONES_ESCUTS-rm.jpg?width=1200&height=750",
      option: [
        {
          id: 1,
          value: "Dedemit",
        },
        {
          id: 2,
          value: "Decul",
        },
      ],
    },
    {
      name: "Dayat Moshing",
      avatar: "https://github.com/shadcn.png",
      caption: "Dulu ikut faksi mana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGuGss-_GASGB7RfHySvB_I3CWXJHZgpOP2A&s",
      option: [
        {
          id: 1,
          value: "Orde jaya",
        },
        {
          id: 2,
          value: "Legiun terdepan",
        },
      ],
    },
  ];

  return (
    <>
      <div className="w-screen h-20 flex bg-red-100 items-center justify-center sticky top-0 z-50 drop-shadow-sm">
        <Navbar />
      </div>

      <div className="mt-5">
        <div className="grid grid-cols-3 gap-10 ">
          <div>1</div>
          <div className="w-full">
            {dummy.map((item, i) => (
              <div className="mb-3">
                <ContentCard {...item} />
              </div>
            ))}
          </div>
          <div>2</div>
        </div>
      </div>
    </>
  );
};

export default Page;
