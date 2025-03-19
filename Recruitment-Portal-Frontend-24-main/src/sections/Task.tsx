import { useState, useEffect } from "react";
import TechTask from "./TechTask";
import DesignTask from "./DesignTask";
import ManagementTask from "./ManagementTask";
import { useTabStore } from "../store";
import secureLocalStorage from "react-secure-storage";

const Task = () => {
  const { tabIndex, setTabIndex } = useTabStore();
  const [selectedDomain, setSelectedDomain] = useState(0);
  const [selectedSubDomain, setSelectedSubDomain] = useState("");
  const [domains, setDomains] = useState<string[]>([]);
  useEffect(() => {
    setSelectedSubDomain("");
  }, [selectedDomain]);

  useEffect(() => {
    const userDetailsString = secureLocalStorage.getItem(
      "userDetails"
    ) as string;
    if (userDetailsString) {
      const userDetails: { domain: string[]; isProfileDone: boolean } =
        JSON.parse(userDetailsString);
      const userDomains = userDetails.domain;
      // console.log("userDomains:", userDomains);
      setDomains(userDomains);
      const isProfileDone = userDetails.isProfileDone;
      if (isProfileDone) {
        setTabIndex(1);
      } else {
        setTabIndex(0);
        // console.log("tabIndex", tabIndex);
      }
    }
  }, []);

  return (
    <div className="w-full profile py-6 flex gap-4 flex-col lg:flex-row">
      <div className="nes-container with-title is-centered lg:w-[30%] w-full invert">
        <p className="title">Domains</p>
        <div className="flex flex-col justify-between h-full gap-4 lg:gap-8">
          {domains.includes("tech") && (
            <button
              type="button"
              onClick={() => setSelectedDomain(0)}
              className={`
              nes-btn w-full lg:h-[30%] text-sm md:text-base domain-btn
              ${selectedDomain === 0 && "is-primary"}
            `}
            >
              Technical
            </button>
          )}
          {domains.includes("design") && (
            <button
              onClick={() => setSelectedDomain(1)}
              type="button"
              className={`
              nes-btn w-full lg:h-[30%] text-sm md:text-base domain-btn
              ${selectedDomain === 1 && "is-primary"}
            `}
            >
              Design
            </button>
          )}
          {domains.includes("management") && (
            <button
              onClick={() => setSelectedDomain(2)}
              type="button"
              className={`
              nes-btn w-full lg:h-[30%] text-sm md:text-base domain-btn
              ${selectedDomain === 2 && "is-primary"}
            `}
            >
              Management
            </button>
          )}
        </div>
      </div>

      <div className="nes-container is-dark with-title is-centered dark-nes-container w-full lg:w-[90%] relative dark-container-nes">
        {selectedSubDomain !== "" && (
          <button
            type="button"
            onClick={() => setSelectedSubDomain("")}
            className="nes-btn is-error absolute -top-2 -right-2 z-[50] h-fit btn-back"
          >
            <i className="nes-icon close is-small"></i>
          </button>
        )}
        <p className="title dark-nes-container">Tasks</p>
        <div className="w-full h-full flex items-center relative">
          {domains.includes("tech") && selectedDomain === 0 && (
            <TechTask
              selectedSubDomain={selectedSubDomain}
              setSelectedSubDomain={setSelectedSubDomain}
            />
          )}
          {domains.includes("design") && selectedDomain === 1 && (
            <DesignTask
              selectedSubDomain={selectedSubDomain}
              setSelectedSubDomain={setSelectedSubDomain}
            />
          )}
          {domains.includes("management") && selectedDomain === 2 && (
            <ManagementTask
              selectedSubDomain={selectedSubDomain}
              setSelectedSubDomain={setSelectedSubDomain}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Task;
