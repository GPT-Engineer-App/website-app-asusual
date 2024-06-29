import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md w-full">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-3xl">Endtime Bride Message</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="home" className="w-full">
              <TabsList className="flex justify-around">
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
              </TabsList>
              <TabsContent value="home">
                <ScrollArea className="h-64">
                  <p>Welcome to Endtime Bride Message. This is the home page content.</p>
                </ScrollArea>
              </TabsContent>
              <TabsContent value="about">
                <ScrollArea className="h-64">
                  <p>About Endtime Bride Message. This is the about page content.</p>
                </ScrollArea>
              </TabsContent>
              <TabsContent value="contact">
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
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;