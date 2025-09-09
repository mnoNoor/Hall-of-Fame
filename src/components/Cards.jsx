import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Cards({ cards }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <Card
          key={card.id}
          className="bg-white text-black border-2 rounded-xl border-black shadow-lg transition-all duration-300 h-fit p-0"
        >
          {card.img && (
            <img
              src={card.img}
              alt={card.name}
              className="w-full h-48 object-cover border-b-2 border-black rounded-t-lg"
            />
          )}

          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold">{card.name}</CardTitle>
            <CardDescription className="text-gray-700 mt-1">
              {card.desc}
            </CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
