import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/Button";

interface MarketPrice {
  crop: string;
  price: string;
  location: string;
}

interface FarmerListing {
  name: string;
  crop: string;
  price: string;
  contact: string;
}

const Market: React.FC = () => {
  const [marketPrices, setMarketPrices] = useState<MarketPrice[]>([]);
  const [market, setmarket] = useState<FarmerListing[]>([]);

  useEffect(() => {
    // Mock API Data (Replace with real API call)
    const mockMarketData: MarketPrice[] = [
      { crop: "Wheat", price: "$200/ton", location: "California" },
      { crop: "Rice", price: "$180/ton", location: "Texas" },
      { crop: "Corn", price: "$150/ton", location: "Iowa" },
    ];

    const mockmarket: FarmerListing[] = [
      { name: "John's Farm", crop: "Tomatoes", price: "$2/kg", contact: "+1234567890" },
      { name: "Smith's Agriculture", crop: "Potatoes", price: "$1.5/kg", contact: "+9876543210" },
    ];

    setMarketPrices(mockMarketData);
    setmarket(mockmarket);
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Market Prices</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {marketPrices.map((item, index) => (
          <Card key={index} className="p-4">
            <CardContent>
              <p className="text-lg font-semibold">{item.crop}</p>
              <p>{item.price}</p>
              <p className="text-sm text-gray-500">{item.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h1 className="text-2xl font-bold">market</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {market.map((seller, index) => (
          <Card key={index} className="p-4">
            <CardContent>
              <p className="text-lg font-semibold">{seller.name}</p>
              <p>Crop: {seller.crop}</p>
              <p>Price: {seller.price}</p>
              <Button className="mt-2">Contact: {seller.contact}</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Market;
