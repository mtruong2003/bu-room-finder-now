
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import BuildingCard from '@/components/BuildingCard';
import ClassroomList from '@/components/ClassroomList';
import Footer from '@/components/Footer';
import { Search, MapPin, Clock, Users } from 'lucide-react';

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

const sampleBuildings: Building[] = [
  {
    id: 'questrom',
    name: 'Questrom School of Business',
    abbreviation: 'QST',
    icon: '🏢',
    availableRooms: 8,
    classrooms: [
      { id: 'har224', name: 'HAR 224', capacity: 45, availableUntil: '4:00 PM', features: ['Projector', 'Whiteboard', 'AC'] },
      { id: 'har302', name: 'HAR 302', capacity: 30, availableUntil: '6:00 PM', features: ['Smart Board', 'Video Conf'] },
      { id: 'har150', name: 'HAR 150', capacity: 60, availableUntil: '3:30 PM', features: ['Amphitheater', 'Mic System'] },
      { id: 'har201', name: 'HAR 201', capacity: 25, availableUntil: '5:00 PM', features: ['Projector', 'Whiteboard'] }
    ]
  },
  {
    id: 'cas',
    name: 'College of Arts & Sciences',
    abbreviation: 'CAS',
    icon: '🎓',
    availableRooms: 12,
    classrooms: [
      { id: 'cas101', name: 'CAS 101', capacity: 35, availableUntil: '3:00 PM', features: ['Projector', 'Whiteboard'] },
      { id: 'cas205', name: 'CAS 205', capacity: 40, availableUntil: '5:30 PM', features: ['Smart Board', 'AC'] },
      { id: 'cas312', name: 'CAS 312', capacity: 20, availableUntil: '4:15 PM', features: ['Whiteboard', 'Natural Light'] },
      { id: 'cas450', name: 'CAS 450', capacity: 50, availableUntil: '6:00 PM', features: ['Projector', 'Sound System'] }
    ]
  },
  {
    id: 'eng',
    name: 'College of Engineering',
    abbreviation: 'ENG',
    icon: '⚙️',
    availableRooms: 6,
    classrooms: [
      { id: 'eng109', name: 'ENG 109', capacity: 30, availableUntil: '2:30 PM', features: ['Lab Equipment', 'Projector'] },
      { id: 'eng245', name: 'ENG 245', capacity: 25, availableUntil: '4:45 PM', features: ['Computers', 'Whiteboard'] },
      { id: 'eng301', name: 'ENG 301', capacity: 40, availableUntil: '5:15 PM', features: ['Smart Board', 'Lab Bench'] }
    ]
  },
  {
    id: 'com',
    name: 'College of Communication',
    abbreviation: 'COM',
    icon: '📺',
    availableRooms: 4,
    classrooms: [
      { id: 'com101', name: 'COM 101', capacity: 35, availableUntil: '3:45 PM', features: ['Media Lab', 'Projector'] },
      { id: 'com209', name: 'COM 209', capacity: 20, availableUntil: '5:00 PM', features: ['Recording Studio', 'Soundproof'] }
    ]
  }
];

const Index = () => {
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(null);

  const handleBuildingSelect = (building: Building) => {
    setSelectedBuilding(building);
  };

  const totalAvailableRooms = sampleBuildings.reduce((total, building) => total + building.availableRooms, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-bu-red to-red-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Find Empty Classrooms at BU
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-4xl mx-auto">
            Instantly search for unoccupied classrooms by building — Questrom, CAS, ENG, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>All BU Buildings</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>Real-time Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>{totalAvailableRooms} Rooms Available Now</span>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-white text-bu-red hover:bg-gray-100 text-lg px-8 py-3 rounded-full font-semibold shadow-lg"
          >
            <Search className="w-5 h-5 mr-2" />
            Check Availability
          </Button>
        </div>
      </div>

      {/* Building Selection */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-bu-gray mb-4">Select Your Building</h2>
          <p className="text-gray-600 text-lg">Choose from our most popular academic buildings</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {sampleBuildings.map((building) => (
            <BuildingCard
              key={building.id}
              building={building}
              onSelect={handleBuildingSelect}
              isSelected={selectedBuilding?.id === building.id}
            />
          ))}
        </div>

        {/* Classroom Results */}
        {selectedBuilding && (
          <div className="mt-12">
            <ClassroomList 
              classrooms={selectedBuilding.classrooms} 
              buildingName={selectedBuilding.name}
            />
          </div>
        )}
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-bu-gray mb-12">
            Why Choose BU Classroom Finder?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-bu-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-bu-gray">Real-Time Updates</h3>
                <p className="text-gray-600">
                  Get live availability updates so you never waste time walking to an occupied room.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-bu-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-bu-gray">All Buildings Covered</h3>
                <p className="text-gray-600">
                  From Questrom to Engineering, we track classrooms across the entire BU campus.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-bu-red rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-bu-gray">Built by Students</h3>
                <p className="text-gray-600">
                  Created by BU students who understand the daily struggle of finding study spaces.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Screenshot Placeholder */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-bu-gray mb-4">See It In Action</h2>
          <p className="text-gray-600 text-lg">Watch how easy it is to find your perfect study spot</p>
        </div>
        <Card className="overflow-hidden shadow-xl">
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-64 md:h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-bu-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-600 text-lg">App Demo Coming Soon</p>
              <p className="text-gray-500">Interactive classroom finder in development</p>
            </div>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
