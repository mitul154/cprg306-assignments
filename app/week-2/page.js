import StudentInfo from "../../components/student-info";

export default function Page() {
  return (
    <main className="flex items-center flex-col mt-10">
      <h1 className="my-10 text-4xl">Shopping List</h1>
      <div className="">
        <StudentInfo />
      </div>
    </main>
  );
}
