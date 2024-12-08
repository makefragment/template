import { CodeComponentMeta } from "@plasmicapp/host";
import { ReactNode } from "react";

type IFileInput = {
  accept?: string;
  onFileSelect?: (files: FileList | null) => void;
  inputType?: "file" | "image" | "text";
  children: ReactNode;
};

export const FileInput = ({
  accept = "image/png, image/jpg, image/jpeg, image/bmp",
  onFileSelect,
  inputType = "file",
  children,
}: IFileInput) => {
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

export const fileInputMeta: CodeComponentMeta<IFileInput> = {
  name: "FileInput",
  displayName: "Fragment/FileInput",
  importPath: "@/fragment/components/file-input",
  props: {
    children: "slot",
    value: "object",
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
