
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Classroom {
  id: string;
  name: string;
  capacity: number;
  availableUntil: string;
  features: string[];
}

interface Building {
  id: string;
  name: string;
  abbreviation: string;
  icon: string;
  availableRooms: number;
  classrooms: Classroom[];
}

interface BuildingCardProps {
  building: Building;
  onSelect: (building: Building) => void;
  isSelected: boolean;
}

const BuildingCard = ({ building, onSelect, isSelected }: BuildingCardProps) => {
  return (
    <Card 
      className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 ${
        isSelected ? 'ring-2 ring-bu-red bg-red-50' : 'hover:bg-gray-50'
      }`}
      onClick={() => onSelect(building)}
    >
      <CardHeader className="text-center pb-2">
        <div className="text-4xl mb-2">{building.icon}</div>
        <CardTitle className="text-lg font-bold text-bu-gray">{building.abbreviation}</CardTitle>
        <p className="text-sm text-gray-600">{building.name}</p>
      </CardHeader>
      <CardContent className="text-center">
        <Badge variant="secondary" className="bg-bu-red text-white">
          {building.availableRooms} rooms available
        </Badge>
      </CardContent>
    </Card>
  );
};

export default BuildingCard;
