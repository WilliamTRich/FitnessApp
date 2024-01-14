import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <h1 className="text-4xl mb-4">Login</h1>
      <Tabs defaultValue="client" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="client">Client</TabsTrigger>
          <TabsTrigger value="trainer">Trainer</TabsTrigger>
        </TabsList>
        <TabsContent value="client">
          <LoginForm
            title="Client"
            description="Login as a Client, click 'Login as Client' to continue."
            buttonText="Login as Client"
          />
        </TabsContent>
        <TabsContent value="trainer">
          <LoginForm
            title="Trainer"
            description="Login as a Trainer, click 'Login as Trainer' to continue."
            buttonText="Login as Trainer"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default LoginPage;
