import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const methods = {
  Discover: ["User Research", "Market Analysis", "Stakeholder Interviews"],
  Define: ["Affinity Mapping", <Link to="/personas" className="hover:text-blue-500">Personas</Link>, "Journey Mapping"],
  Develop: ["Prototyping", "Usability Testing", "Iteration"],
  Deliver: ["Launch Planning", "Marketing Strategy", "Feedback Collection"],
};

const DoubleDiamond = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Double Diamond Process</h1>
      <Separator className="my-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.keys(methods).map((phase) => (
          <Card key={phase}>
            <CardHeader>
              <CardTitle>{phase}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside">
                {methods[phase].map((method, index) => (
                  <li key={index} className="hover:text-blue-500">{method}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DoubleDiamond;