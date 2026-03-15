function Loader({ text = "Chargement des données...", className = "" }) {
  return (
    <div className={`text-center py-5 ${className}`}>
      <div className="spinner-border text-primary" role="status"></div>
      <p className="mt-3">{text}</p>
    </div>
  );
}

export default Loader;
