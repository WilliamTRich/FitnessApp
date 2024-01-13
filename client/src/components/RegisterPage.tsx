import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function RegisterPage() {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <h1 className="text-4xl mb-4">Register</h1>
      <Tabs
        defaultValue="account"
        className="flex flex-col w-1/3 h-2/3 items-center"
      >
        <TabsList className="h-12 w-48">
          <TabsTrigger value="account" className="text-xl">
            Client
          </TabsTrigger>
          <TabsTrigger value="password" className="text-xl">
            Trainer
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card className="w-full h-full">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default RegisterPage;
