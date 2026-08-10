/**
 * Muestra una imagen si se pasa `src`; si no, un placeholder con estilo.
 * - variant "avatar": monograma grande (para la foto de perfil).
 * - variant "cover" : etiqueta "Captura del proyecto".
 */
export default function ImageSlot({
  src,
  alt,
  variant,
  mono,
  label = "Captura del proyecto",
}: {
  src?: string;
  alt?: string;
  variant: "avatar" | "cover";
  mono?: string;
  label?: string;
}) {
  const className = "slot" + (variant === "avatar" ? " slot-avatar" : "");
  return (
    <div className={className}>
      {src ? (
        <img src={src} alt={alt || ""} />
      ) : variant === "avatar" ? (
        <span className="slot-mono">{mono}</span>
      ) : (
        <span className="slot-label">{label}</span>
      )}
    </div>
  );
}
