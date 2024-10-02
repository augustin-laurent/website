import Card from "@/components/Card";

export default function Projects() {
  return (
    <div
      className="flex flex-col w-screen h-screen justify-center items-center"
      id="projects"
    >
      <div className="flex flex-col justify-center items-center py-5 space-y-5">
        <h2 className="text-6xl font-bold ">My projects</h2>
        <p className="text-lg md:text-xl">
          These are some of the projects I developped during my free time.
        </p>
      </div>
      <div className="flex flex-row  justify-center items-center space-x-5">
        <Card
          imageURL="/pydesk.webp"
          imageDescription="pyCleanDesk Project Image"
          title="pyCleanDesk"
          description="This project is an automation written in Python that sorts desktop files. It uses the OS module to retrieve files and sort them into folders. You can run it in the background to sort files by extension, or in a terminal to sort files by extension or by name."
          link=""
        />
        <Card
          imageURL="/mmoney.svg"
          imageDescription="MMoney Project Image"
          title="MMoney"
          description="A financial web app, created with Hono, Plaid, NextJS, MariaDB and ShadCN, the project is still under development and will be soon released."
          link=""
        />
        <Card
          imageURL="/libraweb.jpeg"
          imageDescription="LibraWeb Project Image"
          title="LibraWeb"
          description="A library web app, created with NextJS, upload and keep tracking of the book you are reading, the project is still under development and excepted to be release soon."
          link=""
        />
      </div>
    </div>
  );
}
