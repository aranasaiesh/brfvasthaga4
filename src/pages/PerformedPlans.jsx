import { Mail, Phone, User } from "lucide-react";

export default function PerformedPlans() {
  const PerformedPlans = [
    {
      id: 1,
      name: "Sopsortering",
      info: "Ny sopsorteringsstation",
      year: "2023",
      img: "https://vanersborgsbostader.se/wp-content/uploads/2023/11/atervinning.jpg",
    },
    {
      id: 2,
      name: "Digitala portlås",
      info: "Nya digitala portlås har installerats i alla portar.",
      year: "2023",
      img: "https://www.byggfaktadocu.se/oka-sakerheten-i-fastigheten-med-digitala-laas-403307/nyhet-files/axema_byggfakta_bildespel1.jpg",
    },
    {
      id: 3,
      name: "Säkerhetsdörrar",
      info: "Alla lägenhetsdörrar har bytts ut till säkerhetsdörrar.",
      year: "2020",
      img: "https://www.secor.se/wp-content/uploads/2019/10/daloc130425-16993_webb_alt.jpg",
    },
    {
      id: 4,
      name: "Fönsterbyte",
      info: "Resterande fönster bytta.",
      year: "2018",
      img: "https://www.linkopingsguiden.nu/wp-content/uploads/2017/09/byta-fonster.jpg",
    },
    {
      id: 5,
      name: "Balkonger",
      info: "Utbyggnad och inglasning utav balkonger.",
      year: "2013",
      img: "https://www.kristinehamn.se/contentassets/e16e2540166c43f8b3f9f9536cbbbd2b/inglasad-balkong-16.9.jpg",
    },
    {
      id: 6,
      name: "Fönsterbyte",
      info: "Fönsterbyte baksida samt byte av balkongdörrar.",
      year: "2011",
      img: "https://www.linkopingsguiden.nu/wp-content/uploads/2017/09/byta-fonster.jpg",
    },
    {
      id: 7,
      name: "Stamrenovering",
      info: "Fastigheten har genomgått en stamrenovering.",
      year: "2004",
      img: "https://stambytestockholm.net/wp-content/uploads/2021/08/stambyte-567x350.jpg",
    },
  ];
  return (
    <div>
      <div className="mb-8">
        <div className="font-bold text-2xl">Utförda planer</div>
        <p className="text-sm mt-2">
          Här finns alla utförda planer gjorda hos BRF Västhaga Nr 4.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PerformedPlans.map((PerformedPlans) => (
          <div
            key={PerformedPlans.id}
            className="bg-gray-700 rounded-lg overflow-hidden border border-gray-200"
          >
            {/* Image Section */}
            <div className="relative h-48 bg-gray-200 flex items-center justify-center mb-2">
              <img src={PerformedPlans.img} className="h-48 w-full" />
            </div>
            {/* Content Section */}
            <div className="p-4">
              <div className="text-center mb-4">
                <h3 className="text-lg md:text-xl font-bold mb-1 text-gray-100">
                  {PerformedPlans.name}
                </h3>
                <p className="text-sm font-medium text-gray-200 italic mb-1">
                  {PerformedPlans.year}
                </p>
                <p className="text-sm text-gray-200 italic">
                  {PerformedPlans.info}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
