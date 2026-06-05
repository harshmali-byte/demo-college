import { useEffect, useState } from "react";
import WelcomeFlyerModal from "./WelcomeFlyerModal";
import ELearningModal from "./ELearningModal";
import { MODAL_STORAGE_KEY } from "../../data/modalContent";

const FirstVisitModals = () => {
  const [showFlyer, setShowFlyer] = useState(false);
  const [showELearning, setShowELearning] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem(MODAL_STORAGE_KEY);
    if (!hasSeen) {
      const timer = setTimeout(() => setShowFlyer(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleFlyerClose = () => {
    setShowFlyer(false);
    setShowELearning(true);
  };

  const handleELearningClose = () => {
    setShowELearning(false);
    localStorage.setItem(MODAL_STORAGE_KEY, "true");
  };

  return (
    <>
      <WelcomeFlyerModal isOpen={showFlyer} onClose={handleFlyerClose} />
      <ELearningModal isOpen={showELearning} onClose={handleELearningClose} />
    </>
  );
};

export default FirstVisitModals;
