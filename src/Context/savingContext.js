import { createContext } from "react";
import { useEffect, useState } from "react";

import { getDocs, collection } from "firebase/firestore";

import { db } from "../hooks/firebase.config";

export const SavingData = createContext();

const GetSavingData = ({ children }) => {
  const GetSavingdata = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [saving, setSaving] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks

    useEffect(() => {
      getSaving();
      console.log("Saving data on Context" + typeof saving);
    }, []);

    const getSaving = () => {
      const savingCollectionRef = collection(db, "balance");
      getDocs(savingCollectionRef)
        .then((response) => {
          const savingdata = response.docs.map((doc) => ({
            Saving: doc.data(),
          }));
          setSaving(savingdata[0].Saving.Saving);
        })
        .catch((Error) => console.log(Error.message));
    };
  };

  return (
    // eslint-disable-next-line no-undef
    <SavingData.Provider value={(saving, setSaving)}>
      {children}
    </SavingData.Provider>
  );
};
