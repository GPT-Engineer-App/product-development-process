import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Personas = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Personas Method</h1>
      <Separator className="my-8" />
      <Card>
        <CardHeader>
          <CardTitle>What is this method</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Personas are fictional characters created based on user research to represent different user types that might use a service, product, site, or brand in a similar way. Creating personas helps to understand users' needs, experiences, behaviors, and goals.
          </p>
        </CardContent>
      </Card>
      <Separator className="my-8" />
      <Card>
        <CardHeader>
          <CardTitle>How to use it</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            To use personas, integrate them into your design process. Refer to them when making decisions about features, design elements, and other aspects of your product. Personas help ensure that the end product meets the needs of its intended users.
          </p>
        </CardContent>
      </Card>
      <Separator className="my-8" />
      <Card>
        <CardHeader>
          <CardTitle>Step-by-step guide</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside">
            <li>Conduct user research to gather data about your users.</li>
            <li>Identify patterns and group similar users together.</li>
            <li>Create detailed profiles for each persona, including demographics, behaviors, needs, and goals.</li>
            <li>Use personas to guide design and development decisions.</li>
            <li>Update personas as you gather more data and insights.</li>
          </ol>
        </CardContent>
      </Card>
      <Separator className="my-8" />
      <Card>
        <CardHeader>
          <CardTitle>Example</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            <strong>Example Persona:</strong>
          </p>
          <p>
            <strong>Name:</strong> Jane Doe
          </p>
          <p>
            <strong>Age:</strong> 28
          </p>
          <p>
            <strong>Occupation:</strong> Marketing Manager
          </p>
          <p>
            <strong>Behaviors:</strong> Uses social media daily, prefers mobile apps, values efficiency.
          </p>
          <p>
            <strong>Needs:</strong> Easy access to analytics, seamless integration with other tools, user-friendly interface.
          </p>
          <p>
            <strong>Goals:</strong> Improve marketing campaign performance, increase social media engagement, streamline workflow.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Personas;