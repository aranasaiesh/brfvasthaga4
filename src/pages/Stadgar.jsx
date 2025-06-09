import { User } from "lucide-react";

export default function Stadgar() {
  const stadgar = [
    {
      id: 1,
      name: "Stadgar",
      info: "Info om stadgar",
      image: "/api/placeholder/200/200",
    },
    {
      id: 2,
      name: "Stadgar",
      info: "Info om stadgar",
      image: "/api/placeholder/200/200",
    },
    {
      id: 3,
      name: "Stadgar",
      info: "Info om stadgar",
      image: "/api/placeholder/200/200",
    },
    {
      id: 4,
      name: "Stadgar",
      info: "Info om stadgar",
      image: "/api/placeholder/200/200",
    },
    {
      id: 5,
      name: "Stadgar",
      info: "Info om stadgar",
      image: "/api/placeholder/200/200",
    },
    {
      id: 6,
      name: "Stadgar",
      info: "Info om stadgar",
      image: "/api/placeholder/200/200",
    },
  ];
  return (
    <div>
      <div className="mb-8">
        <div className="font-bold text-2xl">Stadgar</div>
        <p className="text-sm mt-2">Här kan ni se föreningens stadgar.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stadgar.map((stadgar) => (
          <div
            key={stadgar.id}
            className="bg-gray-700 rounded-lg overflow-hidden border border-gray-200"
          >
            {/* Image Section */}
            <div className="relative h-42 bg-gray-200 flex items-center justify-center">
              <User size={60} className="text-gray-600" />
            </div>
            {/* Stadgar info */}
            <div className="p-4">
              <div className="text-center mb-4">
                <h3 className="text-lg md:text-xl font-bold mb-1 text-gray-100">
                  {stadgar.name}
                </h3>
                <p className="text-sm font-medium text-gray-200 italic">
                  {stadgar.info}
                </p>
              </div>
              <div className="space-y-2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
