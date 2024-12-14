import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { PiCopyThin } from "react-icons/pi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import useBuilder from "../../hooks/useBuilder";
import { onFormCodeGenerator } from "../../utils";

const Code = () => {
  const { selectForm } = useBuilder();
  const [copied, setCopied] = useState(false);

  const code = onFormCodeGenerator(selectForm);

  const handleCopy = () => {
    navigator.clipboard.writeText(code?.reactCode || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // <PageLayout type="builder">
    <div className="relative bg-[#1E1E1E] text-white overflow-hidden">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 text-white"
      >
        {copied ? (
          <span className="flex justify-center items-center gap-1 text-[12px]">
            <FaCheck /> Copied!
          </span>
        ) : (
          <PiCopyThin size={20} />
        )}
      </button>

      {/* Syntax Highlighter with Line Numbers and Line Wrapping */}
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        showLineNumbers={true}
        wrapLines={true}
        wrapLongLines={true}
        customStyle={{
          backgroundColor: "#1E1E1E",
          padding: "20px",
          borderRadius: "8px",
          fontFamily: "Fira Code, monospace",
          fontSize: "14px",
        }}
        lineNumberStyle={{
          color: "#6A6A6A",
          paddingRight: "10px",
          fontSize: "12px",
        }}
      >
        {code?.reactCode || "// No code available"}
      </SyntaxHighlighter>
    </div>
    // </PageLayout>
  );
};

export default Code;
