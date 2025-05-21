import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { supabase } from "@/lib/supabaseClient";

interface PromptContextType {
  selectedModel: string | null;
  setSelectedModel: (id: string | null) => void;
  prompt: string;
  setPrompt: (text: string) => void;
  hideNSFW: boolean;
  setHideNSFW: (value: boolean) => void;
  user: { id: string; email: string; is_pro?: boolean } | null;
  isLoggedIn: boolean;
}

const PromptContext = createContext<PromptContextType | undefined>(undefined);

export const PromptProvider = ({ children }: { children: ReactNode }) => {
  const [selectedModel, setSelectedModelState] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>("");
  const [hideNSFW, setHideNSFW] = useState<boolean>(false);
  const [user, setUser] = useState<{ id: string; email: string; is_pro?: boolean } | null>(null);

  useEffect(() => {
    const init = async () => {
      const storedModel = localStorage.getItem("selectedModel");
      const nsfwSetting = localStorage.getItem("hideNSFW") === "true";
      if (storedModel) setSelectedModelState(storedModel);
      setHideNSFW(nsfwSetting);

      const session = await supabase.auth.getSession();
      const userData = session.data.session?.user;
      if (userData) {
        setUser({ id: userData.id, email: userData.email ?? "" });
      }
    };

    init();

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      const userData = session?.user;
      if (userData) {
        setUser({ id: userData.id, email: userData.email ?? "" });
      } else {
        setUser(null);
      }
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const setSelectedModel = (id: string | null) => {
    setSelectedModelState(id);
    localStorage.setItem("selectedModel", id || "");
  };

  const setHideNSFWSetting = (value: boolean) => {
    setHideNSFW(value);
    localStorage.setItem("hideNSFW", value.toString());
  };

  return (
    <PromptContext.Provider
      value={{
        selectedModel,
        setSelectedModel,
        prompt,
        setPrompt,
        hideNSFW,
        setHideNSFW: setHideNSFWSetting,
        user,
        isLoggedIn: !!user,
      }}
    >
      {children}
    </PromptContext.Provider>
  );
};

export const usePromptContext = () => {
  const context = useContext(PromptContext);
  if (!context) throw new Error("PromptContext must be used within PromptProvider");
  return context;
};

export default PromptContext;
