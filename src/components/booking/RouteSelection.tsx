
import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Route {
  id: string;
  name: string;
  description: string;
  estimatedDistance: number;
  estimatedPrice: number;
}

interface RouteSelectionProps {
  routes: Route[];
  onSelectRoute: (route: Route | null) => void;
  selectedRouteId: string | null;
}

const RouteSelection = ({ routes, onSelectRoute, selectedRouteId }: RouteSelectionProps) => {
  const handleRouteSelect = (route: Route) => {
    onSelectRoute(route);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Select Your Route</h2>
      <p className="text-muted-foreground mb-6">
        Choose the route for your journey in Kashmir
      </p>

      <div className="grid grid-cols-1 gap-4">
        {routes.map((route) => (
          <div
            key={route.id}
            className={cn(
              "border rounded-xl p-4 hover:shadow-md transition-all duration-300 cursor-pointer",
              selectedRouteId === route.id
                ? "border-primary bg-primary/5"
                : "border-border"
            )}
            onClick={() => handleRouteSelect(route)}
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-lg">{route.name}</h3>
                <p className="text-sm text-muted-foreground">{route.description}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-primary">₹{route.estimatedPrice}</p>
                <p className="text-xs text-muted-foreground">Approx. {route.estimatedDistance} km</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RouteSelection;
