/* eslint-disable react/jsx-no-undef */
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { cn } from "@/lib/utils";

export default function Editor({
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
  className,
}: {
  data?: string;
  onBlur?: (data: string) => void;
  toolbar?: string[];
  headingOptions?: any[];
  contentsLangDirection?: string;
  language?: string;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      <CKEditor
        editor={ClassicEditor}
        config={{
          toolbar,
          heading: { options: headingOptions },
          language,
        }}
        data={data}
        onBlur={(event: any, editor: any) => {
          const editorData = editor.getData();
          if (onBlur) onBlur(editorData);
        }}
      />
    </div>
  );
}
