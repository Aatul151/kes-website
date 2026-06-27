import React from "react";

const COMPANY_LOGO = "/kes_logo.png";

export default function ClientLogo({ client, className = "w-full h-full object-contain" }) {
  return (
    <img
      src={client.image}
      alt={client.name}
      title={client.name}
      loading="lazy"
      className={className}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = COMPANY_LOGO;
      }}
    />
  );
}
