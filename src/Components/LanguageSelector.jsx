import { useState, useEffect } from "react";
import { LANGUAGES } from "../i18n/languages";

function LanguageSelector({ currentLang, onSelect }) {
  const [selected, setSelected] = useState(currentLang);

  useEffect(() => {
    setSelected(currentLang);
  }, [currentLang]);

  return (
    <div className="flex flex-col overflow-y-auto h-full px-2">
      {LANGUAGES.map((lang) => (
        <label key={lang.code} className="py-3 flex items-center">
          <input
            type="radio"
            name="lang"
            className="mr-3"
            value={lang.code}
            checked={selected === lang.code}
            onChange={() => {
              setSelected(lang.code);
              onSelect(lang.code);
            }}
          />
          {lang.label}
        </label>
      ))}
    </div>
  );
}

export default LanguageSelector;
