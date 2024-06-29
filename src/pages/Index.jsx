import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-2xl w-full p-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl">Asusual</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <Input id="name" type="text" placeholder="Your name" className="mt-1 block w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email" className="mt-1 block w-full" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" className="mt-1 block w-full" />
              </div>
              <div className="text-center">
                <Button type="submit" className="mt-4">Submit</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;