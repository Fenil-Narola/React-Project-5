import { deleteDoc, doc } from "firebase/firestore";
import { HiOutlinePencilAlt, HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { db } from "../config/firebase";
import useDisclosue from "../hooks/useDisclosue";
import AddAndUpdateContact from "./AddAndUpdateContact";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { isOpen, onOpen, onClose } = useDisclosue();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Deleted Successfully")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="bg-yellow flex items-center justify-between rounded-lg p-2"
      >
        <div className="flex gap-2">
          <HiOutlineUserCircle className="text-orange text-4xl" />
          <div className="">
            <h2 className="font-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
            <p className="text-sm">{contact.phone}</p>
          </div>
        </div>
        <div className="flex text-3xl">
          <HiOutlinePencilAlt
            onClick={onOpen}
            className="text-dark-yellow cursor-pointer"
          />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="text-orange cursor-pointer"
          />
        </div>
      </div>
      <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
