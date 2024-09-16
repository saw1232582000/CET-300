"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import FileUploadField from "~/custom-component/form-components/FileUploadField";
import Input from "~/custom-component/form-components/Input";
import TextArea from "~/custom-component/form-components/TextArea";

interface ProductInputType extends FieldValues {
  name: string;
  quantity: string;
  image: string;
  price: number;
  descripiton: string;
}

const ProductCreate = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    getValues,
  } = useForm<ProductInputType>();

  const imageUpload=()=>{

  }
  return (
    <div className="flex w-full  sm:w-[50vh]">
      <form
        //   onSubmit={onSubmit}
        className="mt-10 flex w-full flex-col items-center gap-4 overflow-auto"
      >
        <div className="mb-2 flex w-full flex-col gap-y-6">
          <Input
            type="text"
            label="name*"
            {...register("name", {
              required: "namedata of the proudct is required",
            })}
            errors={errors}
          />
          <Input
            type="number"
            label="quantity*"
            {...register("quantity", {
              required: "Quantity of the card is required",
            })}
            errors={errors}
          />
          <Input
            type="number"
            label="price*"
            {...register("price", {
              required: "Price of the card is required",
            })}
            errors={errors}
          />
          <TextArea
            label="Items Description*"
            {...register("descripiton", {
              required: "Card terms and condition is required",
            })}
            errors={errors}
          />

          <label className="flex h-[120px] w-full flex-row border border-dashed">
            <div className="mb-10 h-full w-full">
              <FileUploadField
                onFileChosen={imageUpload}
                errorMessage=""
                filetypes={["png"]}
                className="mb-4 h-full"
                // placeholder={productName == null ? "Card Graphic" : productName}
              />
            </div>
          </label>
        </div>
        <div className="flex w-full sm:w-full">
          <button className={`mt-1 font-sans flex items-center justify-center border-[1px] p-[5px] w-full`}>Create Catalouge</button>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full text-black underline"
          onClick={() => router.back()}
        >
          back
        </button>
      </form>
    </div>
  );
};

export default ProductCreate;
