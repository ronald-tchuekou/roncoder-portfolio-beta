import { firebaseApp } from "@src/resources/firebase";
import { ContactFormSchema } from "@src/resources/form-schemas";
import { getServiceLabel } from "@src/resources/util-functions";
import { RequestModel } from "@src/resources/util-types";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import localizedFormat from "dayjs/plugin/localizedFormat";
import {
  addDoc,
  collection,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

dayjs.locale("fr");
dayjs.extend(localizedFormat);

export const createRequest = async (request: ContactFormSchema) => {
  const db = getFirestore(firebaseApp);
  const requestRef = collection(db, "Requests");
  const docRef = await addDoc(requestRef, {
    ...request,
    read: false,
    createdAt: new Date(),
  });

  // Update the request object with the docRef.id
  await updateDoc(docRef, { id: docRef.id });

  // Notify discord channel
  try {
    await fetch(`${process.env.NEXT_PUBLIC_DISCORD_WEBHOOK}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "Roncoder Portfolio",
        embeds: [
          {
            title: "Nouvelle demande de contact",
            type: "rich",
            description: `
              ${request.firstName} ${
              request.lastName
            } vous a contacté depuis votre portfolio en ligne pour solliciter un service.
              \n\n**Nom**: ${request.lastName}
              **Prénom**: ${request.firstName}
              **Adresse email**: ${request.email}
              **Téléphone**: ${request.phone || null}
              **Service**: ${getServiceLabel(request.service) || null}
              **Message**: ${request.message}
              \n\nCréer le ${dayjs().format("lll")}
            `,
          },
        ],
      }),
    });
    console.log("Discord is notified");
  } catch (error) {
    console.log("Discord event error: ", error);
  }

  return {
    ...request,
    id: docRef.id,
  } as RequestModel;
};
