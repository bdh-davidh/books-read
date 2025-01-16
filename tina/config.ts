import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "book",
        label: "Books",
        path: "content/books",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "string",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "boolean",
            name: "completed",
            label: "Book completed?",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: [
            {
                value: "fiction",
                label: "Fiction",
            },
            {
                value: "nonfiction",
                label: "Nonfiction",
            },
            ],
            required: true,
          },
          {
            type: "number",
            name: "pages",
            label: "Pages",
            required: true,
          },
          {
            type: "string",
            name: "isbn",
            label: "Bookshop.org Ref",
            required: true,
          },
          {
            type: "number",
            name: "rating",
            label: "Star Rating",
            required: true,
          },
          {
            type: "string",
            name: "review",
            label: "Review Summary",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Main Content",
            isBody: true,
          },
        ],
      },
    ],
  },
});
