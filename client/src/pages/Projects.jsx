import CallToAction from "../component/CallToAction.jsx";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl flex mx-auto flex-col justify-center items-center gap-6 p-3 ">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">Build fun and engaging projects while learning web development.</p>
      <CallToAction />
    </div>
  );
}
