import React from "react";

interface InteractiveWrapperProps {
  children: React.ReactNode; // Le texte ou n'importe quel autre composant
  onClick: () => void; // Action à exécuter lors du clic
}

const InteractiveWrapper: React.FC<InteractiveWrapperProps> = ({
  children,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  );
};

export default InteractiveWrapper;
