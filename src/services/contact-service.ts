import { db } from "@src/resources/firebase";
import { ContactFormSchema } from "@src/resources/form-schemas";
import { RequestModel } from "@src/resources/util-types";
import { addDoc, collection, updateDoc } from "firebase/firestore";

export const createRequest = async (request: ContactFormSchema) => {
  const requestRef = collection(db, "Requests");
  const docRef = await addDoc(requestRef, {
    ...request,
    read: false,
    createdAt: new Date(),
  });

  // Update the request object with the docRef.id
  await updateDoc(docRef, { id: docRef.id });

  return {
    ...request,
    id: docRef.id,
  } as RequestModel;
};
