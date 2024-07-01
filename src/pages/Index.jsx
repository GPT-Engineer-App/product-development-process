import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div>
        <h1 className="text-3xl text-center mb-4">Your Blank Canvas</h1>
        <p className="text-center mb-4">
          Chat with the agent to start making edits.
        </p>
        <div className="flex justify-center">
          <Link to="/double-diamond">
            <Button variant="outline" className="hover:text-blue-500">View Double Diamond Process</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;