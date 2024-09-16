import clsx from "clsx";
import React, { useRef, useState } from "react";

type FileUploadFieldProps = {
  onFileChosen: (files: File[]) => void;
  filetypes: string[];
  errorMessage?: string;
  placeholder?: React.ReactElement | string;
  // placeholder?:  string
  className?: string;
  multiple?: boolean;
  text?: React.ReactElement | string;
};

const defaultText = (
  <span>
    Drop your images here, or{" "}
    <span className="text-violet-60">click to browse</span>
  </span>
);

const FileUploadField: React.FC<FileUploadFieldProps> = ({
  onFileChosen,
  filetypes,
  errorMessage,
  className,
  // text = defaultText,
  text = "",
  placeholder = "",
  multiple = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileUploadError, setFileUploadError] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;

    if (fileList) {
      onFileChosen(Array.from(fileList));
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    setFileUploadError(false);

    e.preventDefault();

    const files: File[] = [];

    if (e.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < e.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them

        if (e?.dataTransfer?.items[i]?.kind === "file") {
          const file = e?.dataTransfer?.items[i]?.getAsFile();
          if (file && filetypes.indexOf(file.type) > -1) {
            files.push(file);
          }
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < e.dataTransfer.files.length; i++) {
        const file = e?.dataTransfer?.files[i];
        if (file && filetypes.indexOf(file.type) > -1) {
          files.push(file);
        }
      }
    }
    if (files.length === 1) {
      onFileChosen(files);
    } else {
      setFileUploadError(true);
    }
  };

  return (
    <div
      // onClick={() => inputRef?.current?.click()}
      onDrop={handleFileDrop}
      onDragOver={(e) => e.preventDefault()}
      // className={clsx(
      //   "inter-base-regular text-grey-50 rounded-rounded border-grey-20 hover:border-violet-60 hover:text-grey-40 flex h-full w-full cursor-pointer select-none flex-col items-center justify-center border-2 border-dashed transition-colors",
      //   className
      // )}
      className={clsx(
        "inter-base-regular border-grey-20  text-grey-50 hover:border-violet-60 hover:text-grey-40 flex w-full cursor-pointer select-none flex-col items-center justify-center overflow-x-auto overflow-y-auto rounded border py-[12px]  transition-colors",
        className,
      )}
    >
      <div className=" whitespace-no-wrap  flex w-full flex-col items-center justify-center overflow-x-auto overflow-y-auto">
        <p>{text}</p>
        <p className="">{placeholder}</p>
      </div>
      {fileUploadError && (
        <span className="text-rose-60">
          {errorMessage || "Please upload an image file"}
        </span>
      )}
      <input
        ref={inputRef}
        accept={filetypes.join(", ")}
        multiple={multiple}
        type="file"
        onChange={handleFileUpload}
        className="hidden"
      />
      <a className="mt-11 w-2/3 border-t border-white text-center">Upload</a>
    </div>
  );
};

export default FileUploadField;
