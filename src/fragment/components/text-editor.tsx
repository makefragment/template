import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CodeComponentMeta } from "@plasmicapp/host";

export const CustomCKEditor = ({
  data = "",
  onBlur,
  toolbar = ["heading", "|", "bold", "italic", "bulletedList", "numberedList"],
  headingOptions = [
    { model: "paragraph", title: "Paragraph", class: "ck-heading_paragraph" },
    {
      model: "heading1",
      view: "h1",
      title: "Heading 1",
      class: "ck-heading_heading1",
    },
    {
      model: "heading2",
      view: "h2",
      title: "Heading 2",
      class: "ck-heading_heading2",
    },
  ],
  contentsLangDirection = "rtl",
  language = "fa",
}: {
  data?: string;
  onBlur?: (data: string) => void;
  toolbar?: string[];
  headingOptions?: { model: string; title: string; class: string }[];
  contentsLangDirection?: string;
  language?: string;
}) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      config={{
        toolbar,
        heading: { options: headingOptions },
        contentsLangDirection,
        language,
      }}
      data={data}
      onBlur={(event, editor) => {
        const editorData = editor.getData();
        if (onBlur) onBlur(editorData);
      }}
    />
  );
};

export const ckEditorMeta: CodeComponentMeta<any> = {
  name: "CustomCKEditor",
  displayName: "Text Editor",
  importPath: "@/fragment/components/text-editor",
  props: {
    data: {
      type: "string",
      defaultValueHint: "Enter initial data",
      description: "The initial content of the editor.",
    },
    toolbar: {
      type: "array",
      description: "Toolbar configuration for the editor.",
      defaultValue: [
        "heading",
        "|",
        "bold",
        "italic",
        "bulletedList",
        "numberedList",
      ],
    },
    headingOptions: {
      type: "array",
      description: "Heading options for the editor.",
      defaultValue: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
      ],
    },
    contentsLangDirection: {
      type: "choice",
      options: ["ltr", "rtl"],
      defaultValue: "rtl",
      description: "Sets the text direction of the editor's content.",
    },
    language: {
      type: "choice",
      options: ["fa", "en"],
      defaultValue: "fa",
      description: "Language of the editor interface.",
    },
    onBlur: {
      type: "eventHandler",
      argTypes: [{ name: "data", type: "string" }],
      description:
        "Triggered when the editor loses focus, passing the editor's data.",
    },
  },
};
