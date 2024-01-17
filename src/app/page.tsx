import TaskGroup from "@/components/ui/task-group";

export default function Home() {
  return (
    <div className="h-auto w-full">
      <h1 className="text-blue500 mx-7 my-2 text-lg font-bold italic">
        Minhas Tarefas
      </h1>
      <TaskGroup />
    </div>
  );
}
