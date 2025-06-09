import { Mail, Phone, User } from "lucide-react";

export default function Board() {
  const boardMembers = [
    {
      id: 1,
      name: "Marie Nordin",
      position: "Ordförande",
      email: "marie.nordin@vasthaganr4.se",
      ansvar: "Ekonomi, nyckelhantering & porttelefon",
      image: "/api/placeholder/200/200",
    },
    {
      id: 2,
      name: "Cerin Benyamin",
      position: "Vice ordförande",
      email: "cerin.Benyamin@vasthaganr4.se",
      ansvar: "Ekonomi & tvättstuga",
      image: "/api/placeholder/200/200",
    },
    {
      id: 3,
      name: "Karin Öman",
      position: "Sekreterare",
      email: "karin.oman@vasthaganr4.se",
      ansvar: "Informationstavla & yttre/inre städ",
      image: "/api/placeholder/200/200",
    },
    {
      id: 4,
      name: "Tomas Stockhaus",
      position: "Ledamot",
      email: "tomas.stockhaus@vasthaganr4.se",
      ansvar: "Namnändringar & yttre miljö",
      image: "/api/placeholder/200/200",
    },
    {
      id: 5,
      name: "Torbjörn Lundqvist",
      position: "Ledamot",
      email: "torbjorn.lundqvist@vasthaganr4.se",
      ansvar: "Parkeringa & yttre miljö",
      image: "/api/placeholder/200/200",
    },
    {
      id: 6,
      name: "Alojz Zvar",
      position: "Suppleant",
      email: "alojz.zvar@vasthaganr4.se",
      image: "/api/placeholder/200/200",
    },
  ];
  return (
    <div>
      <div className="mb-8">
        <div className="font-bold text-2xl">Styrelsen</div>
        <p className="text-sm mt-2">
          Styrelsen för Västhaga Nr 4 består av 6 personer och är framröstade
          utav medlemmarna i föreningen under årsstämman.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {boardMembers.map((member) => (
          <div
            key={member.id}
            className="bg-gray-700 rounded-lg overflow-hidden border border-gray-200"
          >
            {/* Image Section */}
            <div className="relative h-48 bg-gray-200 flex items-center justify-center">
              <User size={60} className="text-gray-600" />
            </div>
            {/* Content Section */}
            <div className="p-4">
              <div className="text-center mb-4">
                <h3 className="text-lg md:text-xl font-bold mb-1 text-gray-100">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-gray-200 italic">
                  {member.position}
                </p>
              </div>
              <div className="space-y-2">
                {/* Ansvar */}
                <div className="flex justify-center space-x-2 text-gray-200">
                  <div className="flex-shrink-0">
                    <p className="italic text-sm">{member.ansvar}</p>{" "}
                  </div>
                </div>
                {/* Email */}
                <div className="flex justify-center space-x-2 text-gray-50">
                  <Mail size={16} className="flex-shrink-0" />
                  <a
                    href={`mailto:${member.email}`}
                    className="text-sm hover:text-white transition-colors break-all"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Contact Information */}
      <div className="mt-12 bg-gray-700 border border-gray-400 rounded-lg p-6 text-center">
        <p className="text-gray-50 mb-6 text-sm md:text-base">
          Har du frågor eller synpunkter? Tveka inte att kontakta någon av oss i
          styrelsen eller använd kontaktformuläret längst ner på sidan.
        </p>
      </div>
    </div>
  );
}
