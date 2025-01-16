"use client";

import { Content } from "@prismicio/client";
import { createContext, useContext, useMemo, useState } from "react";

type CustomizerControlsContextType = {
  selectedWheel?: Content.SkateboardCustomizerDocumentDataWheelsItem;
  setWheel: (wheel: Content.SkateboardCustomizerDocumentDataWheelsItem) => void;
  selectedDeck?: Content.SkateboardCustomizerDocumentDataDecksItem;
  setDeck: (deck: Content.SkateboardCustomizerDocumentDataDecksItem) => void;
  selectedTruck?: Content.SkateboardCustomizerDocumentDataMetalsItem;
  setTruck: (truck: Content.SkateboardCustomizerDocumentDataMetalsItem) => void;
  selectedBolt?: Content.SkateboardCustomizerDocumentDataMetalsItem;
  setBolt: (bolt: Content.SkateboardCustomizerDocumentDataMetalsItem) => void;
};

const defaultContext: CustomizerControlsContextType = {
  selectedWheel: undefined,
  setWheel: () => {},
  selectedDeck: undefined,
  setDeck: () => {},
  selectedTruck: undefined,
  setTruck: () => {},
  selectedBolt: undefined,
  setBolt: () => {},
};

const CustomizerControlsContext = createContext(defaultContext);

type CustomizerControlsProviderProps = {
  defaultWheel?: Content.SkateboardCustomizerDocumentDataWheelsItem;
  defaultDeck?: Content.SkateboardCustomizerDocumentDataDecksItem;
  defaultTruck?: Content.SkateboardCustomizerDocumentDataMetalsItem;
  defaultBolt?: Content.SkateboardCustomizerDocumentDataMetalsItem;
  children: React.ReactNode;
};

export function CustomizerControlsProvider({
  defaultDeck,
  defaultWheel,
  defaultTruck,
  defaultBolt,
  children,
}: CustomizerControlsProviderProps) {
  const [selectedWheel, setWheel] = useState(defaultWheel);
  const [selectedDeck, setDeck] = useState(defaultDeck);
  const [selectedTruck, setTruck] = useState(defaultTruck);
  const [selectedBolt, setBolt] = useState(defaultBolt);

  const value = useMemo<CustomizerControlsContextType>(
    () => ({
      selectedWheel,
      setWheel,
      selectedDeck,
      setDeck,
      selectedTruck,
      setTruck,
      selectedBolt,
      setBolt,
    }),
    [selectedBolt, selectedDeck, selectedTruck, selectedWheel],
  );

  return (
    <CustomizerControlsContext.Provider value={value}>
      {children}
    </CustomizerControlsContext.Provider>
  );
}

export function useCustomizerControls() {
  if (!CustomizerControlsContext) {
    throw new Error(
      "useCustomizerControls must be used within a CustomizerControlsProvider",
    );
  }

  return useContext(CustomizerControlsContext);
}
