import { CodeComponentMeta } from "@plasmicapp/host";
import { ReactNode } from "react";

export const FileInput = ({
  accept = "image/png, image/jpg, image/jpeg, image/bmp",
  onFileSelect,
  inputType = "file",
  children,
}: {
  accept?: string;
  onFileSelect?: (files: FileList | null) => void;
  inputType?: "file" | "image" | "text";
  children: ReactNode;
}) => {
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (onFileSelect) {
      onFileSelect(files);
    }
  };

  return (
    <>
      <input
        type={inputType}
        accept={accept}
        onChange={handleFileSelect}
        className="w-0 h-0 p-0"
        id="upload-file-input"
      />
      <label htmlFor="upload-file-input">{children}</label>
    </>
  );
};

export const fileInputMeta: CodeComponentMeta<any> = {
  name: "FileInput",
  displayName: "Fragment/FileInput",
  importPath: "@/fragment/components/FileInput",
  props: {
    children: "slot",
    accept: {
      type: "string",
      defaultValue: "image/png, image/jpg, image/jpeg, image/bmp",
      description: "Comma-separated list of accepted file types.",
    },
    onFileSelect: {
      type: "eventHandler",
      description: "Action triggered when file(s) are selected.",
      argTypes: [
        {
          name: "files",
          type: "object",
        },
      ],
    },
    inputType: {
      type: "choice",
      options: ["file", "image"],
      defaultValue: "file",
      description: "Type of input element.",
    },
  },
};
