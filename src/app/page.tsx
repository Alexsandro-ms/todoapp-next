import TaskGroup from "@/components/ui/task-group";

export default function Home() {
  return (
    <div className="h-auto w-full">
      <h1 className="mx-7 my-2 text-lg font-bold italic text-blue500">
        Minhas Tarefas
      </h1>
      <TaskGroup />
    </div>
  );
}
