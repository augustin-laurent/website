import Card from "@/components/Card";

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24" id="projects">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">My projects</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          These are some of the projects I developed during my free time.
        </p>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8">
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
