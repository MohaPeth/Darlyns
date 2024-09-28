import React from "react";
import { cn } from "@/lib/utils";

// Définition des types de props pour le composant Spacing
export type SpacingProps = {
  size?: "sm" | "md" | "lg"; // Propriété size optionnelle
  color?: string;
};

// Définition du composant fonctionnel Spacing
export const Spacing = ({ size = "md", color = "black" }: SpacingProps) => {
  return (
    <div
      className={cn({
        "h-4 lg:h-14": size === "sm",
        "h-16 lg:h-24": size === "md",
        "h-24 lg:h-32": size === "lg",
      })}
    />
  );
};

// En résumé, ce composant Spacing est utilisé pour créer des espaces vides ou des séparations verticales
//  dans une interface utilisateur React, en permettant aux développeurs de spécifier la hauteur de ces espaces de manière flexible et directe
//  à travers les props.
