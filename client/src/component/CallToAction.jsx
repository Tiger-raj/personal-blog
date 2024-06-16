import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl ">Want to learn more about Javascript ?</h2>
        <p className="text-gray-500 my-2">Checkout these resources with 100 JS Projects.</p>
        <Button className="rounded-tl-xl rounded-bl-none" gradientDuoTone="purpleToPink">
          <a href="#" target="_blank" className="" rel="noopener noreferrer">
            100 JS Projects
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZq_FDxj8jleGCeDXaWUdeuD1XGtvc2wG0Vg&s" />
      </div>
    </div>
  );
}
