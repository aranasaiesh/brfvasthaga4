export default function StyrelseInfo() {
  const StyrelseInfo = [
    {
      id: 1,
      name: "Infonamn",
      info: " Vill du ställa dig i kö till parkering eller byte av namn/telefonnr? Skriv på hemsidan alt. lägg en lapp i röda brevlådan.",
      date: "2023-04-10",
      img: "https://vanersborgsbostader.se/wp-content/uploads/2023/11/atervinning.jpg",
    },
    {
      id: 2,
      name: "Infonamn",
      info: " Vill du ställa dig i kö till parkering eller byte av namn/telefonnr? Skriv på hemsidan alt. lägg en lapp i röda brevlådan.",
      date: "2023-04-10",
      img: "https://vanersborgsbostader.se/wp-content/uploads/2023/11/atervinning.jpg",
    },
    {
      id: 3,
      name: "Infonamn",
      info: " Vill du ställa dig i kö till parkering eller byte av namn/telefonnr? Skriv på hemsidan alt. lägg en lapp i röda brevlådan.",
      date: "2023-04-10",
      img: "https://vanersborgsbostader.se/wp-content/uploads/2023/11/atervinning.jpg",
    },
    {
      id: 4,
      name: "Infonamn",
      info: " Vill du ställa dig i kö till parkering eller byte av namn/telefonnr? Skriv på hemsidan alt. lägg en lapp i röda brevlådan.",
      date: "2023-04-10",
      img: "https://vanersborgsbostader.se/wp-content/uploads/2023/11/atervinning.jpg",
    },
    {
      id: 5,
      name: "Infonamn",
      info: " Vill du ställa dig i kö till parkering eller byte av namn/telefonnr? Skriv på hemsidan alt. lägg en lapp i röda brevlådan.",
      date: "2023-04-10",
      img: "https://vanersborgsbostader.se/wp-content/uploads/2023/11/atervinning.jpg",
    },
    {
      id: 6,
      name: "Infonamn",
      info: " Vill du ställa dig i kö till parkering eller byte av namn/telefonnr? Skriv på hemsidan alt. lägg en lapp i röda brevlådan.",
      date: "2023-04-10",
      img: "https://vanersborgsbostader.se/wp-content/uploads/2023/11/atervinning.jpg",
    },
  ];
  return (
    <div>
      <div className="mb-8">
        <div className="font-bold text-2xl">Styrelsen informerar</div>
        <p className="text-sm mt-2">
          Här finns samlad information från styrelsen hos BRF Västhaga Nr 4.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {StyrelseInfo.map((StyrelseInfo) => (
          <div
            key={StyrelseInfo.id}
            className=" rounded-lg overflow-hidden border border-gray-700"
          >
            {/* Image Section */}
            {/* <div className="relative h-48 bg-gray-200 flex items-center justify-center mb-2">
              <img src={StyrelseInfo.img} className="h-48 w-full" />
            </div> */}
            {/* Content Section */}
            <div className="p-4">
              <div className="text-center mb-4">
                <h3 className="text-lg md:text-xl font-bold mb-1 text-gray-700">
                  {StyrelseInfo.name}
                </h3>
                <p className="text-sm font-medium text-gray-700 italic mb-1">
                  {StyrelseInfo.date}
                </p>
                <p className="text-sm text-gray-700 italic">
                  {StyrelseInfo.info}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
