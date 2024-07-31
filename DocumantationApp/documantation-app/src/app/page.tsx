'use client'
const htmlCreator = require("html-creator");

export default function Home() {
  const html = new htmlCreator([
    {
      type: "head",
      content: [
        {
          type: "title",
          content: "Generated HTML",
        },
        {
          type: "style",
          content: `
            #cool-text {
              color: red;
            }
          `,
        },
      ],
    },
    {
      type: "body",
      content: [
        {
          type: "div",
          content: [
            {
              type: "div",
              content: "This is a cool text 😎",
              attributes: { id: "cool-text" },
            },
            {
              type: "a",
              content: "Click here",
              attributes: { href: "/path-to-infinity", target: "_blank" },
            },
          ],
        },
      ],
    },
  ]);

  const generator = () =>{
    console.log("sdfdsf")
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={generator}>Download</button>
    </main>
  );
}
