
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Monitor } from 'lucide-react';

interface Classroom {
  id: string;
  name: string;
  capacity: number;
  availableUntil: string;
  features: string[];
}

interface ClassroomListProps {
  classrooms: Classroom[];
  buildingName: string;
}

const ClassroomList = ({ classrooms, buildingName }: ClassroomListProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      <h3 className="text-2xl font-bold text-bu-gray mb-4">
        Available Rooms in {buildingName}
      </h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {classrooms.map((classroom) => (
          <Card key={classroom.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold text-bu-red">
                {classroom.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Available until {classroom.availableUntil}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users className="w-4 h-4" />
                  <span>Capacity: {classroom.capacity}</span>
                </div>
                <div className="flex flex-wrap gap-1 mt-3">
                  {classroom.features.map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClassroomList;
