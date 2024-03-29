import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisterForm from "./RegisterForm";

function RegisterPage() {
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <h1 className="text-4xl mb-4">Register</h1>
      <Tabs defaultValue="client" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="client">Client</TabsTrigger>
          <TabsTrigger value="trainer">Trainer</TabsTrigger>
        </TabsList>
        <TabsContent value="client">
          <RegisterForm
            title="Client"
            description="Register as a Client, click 'Register as Client' to continue."
            buttonText="Register as Client"
          />
        </TabsContent>
        <TabsContent value="trainer">
          <RegisterForm
            title="Trainer"
            description="Register as a Trainer, click 'Register as Trainer' to continue."
            buttonText="Register as Trainer"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default RegisterPage;
