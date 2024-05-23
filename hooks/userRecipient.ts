import { getRecipientEmail } from "./../utils/getRecipientEmail";
import { auth, db } from "@/config/firebase";
import { AppUser, Conversation } from "@/types";
import { collection, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";

export const useRecipient = (conversationUsers: Conversation["users"]) => {
  const [loggerInUser] = useAuthState(auth);

  const recipientEmail = getRecipientEmail(conversationUsers, loggerInUser);
  const queryGetRecipient = query(
    collection(db, "users"),
    where("email", "==", recipientEmail)
  );
  const [recipientsSnapShot] = useCollection(queryGetRecipient);

  const recipient = recipientsSnapShot?.docs[0]?.data() as AppUser | undefined;
  return {
    recipient,
    recipientEmail,
  };
};
