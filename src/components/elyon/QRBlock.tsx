import { useEffect, useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Download, Link2, Check } from "lucide-react";
import { toast } from "sonner";

export function QRBlock({ path = "/" }: { path?: string }) {
  const [url, setUrl] = useState("https://elyon.app/");
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(`${window.location.origin}${path}`);
    }
  }, [path]);

  const handleDownload = () => {
    const canvas = containerRef.current?.querySelector("canvas");
    if (!canvas) return;
    const dataUrl = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "elyon-qrcode.png";
    a.click();
    toast.success("QR Code baixado");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copiado");
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Não foi possível copiar");
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 rounded-2xl border border-gold/20 bg-card/60 p-6 backdrop-blur sm:p-8">
      <div
        ref={containerRef}
        className="rounded-xl bg-white p-3 shadow-elegant"
      >
        <QRCodeCanvas
          value={url}
          size={168}
          bgColor="#ffffff"
          fgColor="#0a0a0a"
          level="H"
          marginSize={1}
        />
      </div>
      <div className="text-center">
        <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
          Compartilhe a Elyon
        </p>
        <p className="mt-1 max-w-[14rem] text-xs text-muted-foreground">
          Aponte a câmera ou baixe o QR para divulgar.
        </p>
      </div>
      <div className="flex w-full flex-col gap-2 sm:flex-row">
        <button
          onClick={handleDownload}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gold-gradient px-4 py-2.5 text-xs font-medium text-background shadow-gold transition-transform hover:scale-[1.02]"
        >
          <Download className="h-3.5 w-3.5" />
          Baixar QR
        </button>
        <button
          onClick={handleCopy}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-background/40 px-4 py-2.5 text-xs text-foreground/90 transition-colors hover:border-gold/40"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-gold" />
          ) : (
            <Link2 className="h-3.5 w-3.5" />
          )}
          {copied ? "Copiado" : "Copiar link"}
        </button>
      </div>
    </div>
  );
}
