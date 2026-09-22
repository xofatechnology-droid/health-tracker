import DailyLogForm from "@/components/ui/DailyLogForm";
import LogHistory from "@/components/ui/LogHistory";

export default function LogPage() {
  return (
    <main className="w-full min-h-screen bg-softBg flex flex-col items-center py-12 px-6">
      <DailyLogForm />
      
      {/* 
        The LogHistory component fetches data server-side.
        It will automatically update when the Server Action revalidates this route.
      */}
      <LogHistory />
    </main>
  );
}