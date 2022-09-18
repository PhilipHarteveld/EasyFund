/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Data } from "../data";
import { Progress } from "@chakra-ui/react";

import { Line } from "react-chartjs-2";

import { CategoryScale } from "chart.js";
import { Chart, registerables } from "chart.js";
import { getDocs, collection, where } from "firebase/firestore";
import { query } from "firebase/firestore";
import { db } from "../../firebase.config";

export const getSavingdata = () => {
  const [saving, setSaving] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [currentbal, setCurrentbal] = useState([]);
  // const [investments,setInvestments = useState([]);

  useEffect(() => {
    getSaving();
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
