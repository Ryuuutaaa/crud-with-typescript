import Link from "next/link";
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5";

export const CreateButton = () => {
  return (
    <>
      <Link
        href="/contacts/create"
        className="inline-flex items-center space-x-1 text-white bg-blue-900 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">
        <IoAddSharp size={20} />
        Create
      </Link>
    </>
  );
};

export const EditButton = () => {
  return (
    <>
      <Link href="contact" className="rounded-sm border p-1 hover:bg-gray-100">
        <IoPencil />
      </Link>
    </>
  );
};

export const DeleteButton = () => {
  return (
    <>
      <Link href="contact" className="rounded-sm border p-1 hover:bg-gray-100">
        <IoTrashOutline />
      </Link>
    </>
  );
};
