import { Button } from "../components/ui/button";
import { CreateAccount } from "../components/test/CreateAccount";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 space-y-16">
      <div className="flex flex-col items-center justify-center w-full h-full space-y-4">
        <h1 className="text-4xl font-bold">Hello World</h1>
        <Button>Click me</Button>
      </div>
      <div>
        <CreateAccount />
      </div>
    </main>
  );
}
