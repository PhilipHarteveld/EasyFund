// export default RothForm;
import React, { useContext, useState } from "react";
import { RothContext, RothContextProvider } from "../Context/rothIRAContext";
import SideNav from "../components/SideNavBar/SideNav";

function RothIra() {
  const [form, setForm] = useState({
    currentAge: 18,
    retirementAge: 65,
    startingBalance: 0,
    annualContribution: 5500,
    return: 7,
  });
  const [total, SetTotal] = useState(0);

  function updateForm(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }
  const buttonCalculate = () => {
    calculateRoth();
  };
  function calculateRoth() {
    let total = parseInt(form.startingBalance);
    let age = parseInt(form.currentAge);
    let annualContribution = parseInt(form.annualContribution);
    let rothData = [];
    let retirementBalance = 0;
    let totalContribution = 0;

    for (age; age <= form.retirementAge; age++) {
      total = parseFloat(
        ((total + annualContribution) * (1 + form.return / 100)).toFixed(2)
      );

      totalContribution += annualContribution;

      rothData.push({
        age: age,
        total: total,
        totalContribution: totalContribution,
      });
      retirementBalance = total;
      SetTotal(total);
      //   console.log(rothData);
    }
    return { rothData, retirementBalance };
  }

  console.log(total + " Roth Ira data");

  return (
    <RothContextProvider theme="light">
      <div className=" bg-background w-screen h-screen flex">
        <SideNav />
        <div>
          <form className="mt-10">
            <div>
              <label
                for="Current Age"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Current Age
              </label>
              <input
                type="text"
                id="CurrentAge"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="18"
                onChange={updateForm}
                value={form.currentAge}
                required
              />
            </div>
            <div>
              <label
                for="Current Age"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                RetirementAge
              </label>
              <input
                type="text"
                id="RetirementAge"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="18"
                onChange={updateForm}
                value={form.retirementAge}
                required
              />
            </div>
            <div>
              <label
                for="Current Age"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                StartingBalance
              </label>
              <input
                type="text"
                id="startingBalance"
                value={form.startingBalance}
                onChange={updateForm}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="18"
                required
              />
            </div>
            <div>
              <label
                for="Current Age"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Annual Contribution
              </label>
              <input
                type="text"
                id="annualContribution"
                onChange={updateForm}
                value={form.annualContribution}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="18"
                required
              />
            </div>
            <div>
              <label
                for="Current Age"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Return per year
              </label>
              <input
                type="text"
                onChange={updateForm}
                value={form.return}
                id="return"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="18"
                required
              />
            </div>
          </form>
          <button className=" bg-bermuda" onClick={buttonCalculate}>
            hello
          </button>
        </div>
      </div>
    </RothContextProvider>
  );
}

export default RothIra;
