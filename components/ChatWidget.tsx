"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

export function ChatWidget() {
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://n8n.srv1644260.hstgr.cloud/webhook/a4f8d702-58f9-4acd-8b7f-1ea8bebc6587/chat",
      mode: "window",
      showWelcomeScreen: false,
      loadPreviousSession: true,
      initialMessages: [
        "Bonjour ! Je suis l'assistant virtuel de 2F AUTO37.",
        "Je peux vous renseigner sur nos services, horaires, tarifs ou vous aider à prendre rendez-vous. Comment puis-je vous aider ?",
      ],
      i18n: {
        en: {
          title: "Assistant 2F AUTO37",
          subtitle: "Disponible 24h/24 pour répondre à vos questions",
          footer: "",
          getStarted: "Démarrer la conversation",
          inputPlaceholder: "Posez votre question...",
          closeButtonTooltip: "Fermer",
        },
      },
      defaultLanguage: "en",
    });
  }, []);

  return (
    <style>{`
      :root {
        --chat--color-primary: #E94560;
        --chat--color-primary-shade-50: #D03350;
        --chat--color-primary-shade-100: #C02D47;
        --chat--color-secondary: #1A1A2E;
        --chat--color-secondary-shade-50: #141424;
        --chat--color-white: #ffffff;
        --chat--color-light: #F8F9FA;
        --chat--color-light-shade-50: #E8E8E8;
        --chat--color-medium: #8C8C8C;
        --chat--color-dark: #1A1A2E;
        --chat--color-disabled: #8C8C8C;
        --chat--color-typing: #404040;

        --chat--window--width: 380px;
        --chat--window--height: 580px;

        --chat--header--background: #1A1A2E;
        --chat--header--color: #ffffff;

        --chat--message--bot--background: #F8F9FA;
        --chat--message--bot--color: #1A1A2E;
        --chat--message--user--background: #E94560;
        --chat--message--user--color: #ffffff;

        --chat--toggle--background: #E94560;
        --chat--toggle--hover--background: #D03350;
        --chat--toggle--active--background: #C02D47;
        --chat--toggle--color: #ffffff;
        --chat--toggle--size: 60px;

        --chat--border-radius: 12px;
        --chat--textarea--height: 50px;
      }
    `}</style>
  );
}
