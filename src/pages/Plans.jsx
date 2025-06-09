import { Mail, Phone, User } from "lucide-react";

export default function Plans() {
  const Plans = [
    {
      id: 1,
      name: "Solceller",
      year: "2025",
      img: "https://images.ctfassets.net/l0gi7dcsjajc/2rBv47wzGMUh7S4y1bNaH2/036dab526bcf878717f6712dfeee083f/solceller-tak.jpg",
    },
    {
      id: 2,
      name: "Laddstolpar",
      year: "2023",
      img: "https://www.laddtec.se/thumbs/1100x0c/2021-02/laddstolpar-laddbox-foretag-produktblad-flex.jpg",
    },
    {
      id: 3,
      name: "Laddstolpar",
      year: "2029",
      img: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
    },
    {
      id: 4,
      name: "Laddstolpar",
      year: "2027",
      img: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
    },
    {
      id: 5,
      name: "Laddstolpar",
      year: "2028",
      img: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
    },
    {
      id: 6,
      name: "Laddstolpar",
      year: "2026",
      img: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
    },
  ];
  return (
    <div>
      <div className="mb-8">
        <div className="font-bold text-2xl">Pågående & kommande planer</div>
        <p className="text-sm mt-2">
          Här finns alla pågående och kommande planer hos BRF Västhaga Nr 4.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Plans.map((plans) => (
          <div
            key={plans.id}
            className="bg-gray-700 rounded-lg overflow-hidden border border-gray-200"
          >
            {/* Image Section */}
            <div className="relative h-48 bg-gray-200 flex items-center justify-center mb-2">
              <img src={plans.img} className="h-48 w-full" />
            </div>
            {/* Content Section */}
            <div className="p-4">
              <div className="text-center mb-4">
                <h3 className="text-lg md:text-xl font-bold mb-1 text-gray-100">
                  {plans.name}
                </h3>
                <p className="text-sm font-medium text-gray-200 italic">
                  {plans.year}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
